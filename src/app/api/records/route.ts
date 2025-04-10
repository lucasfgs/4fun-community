import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Mapping from style number to style name.
const styleMapping: Record<number, string> = {
  0: "Normal",
  1: "Sideways",
  2: "W-Only",
  3: "Scroll",
  4: "400 Velocity",
  5: "Half-Sideways",
  6: "A/D-Only",
  7: "Segmented",
  8: "Low Gravity",
  9: "Slow Motion",
  10: "TAS",
};

// The structure returned from our raw SQL query.
interface RecordsDB {
  time: number;
  map: string;
  date: number | null;
  auth: number | null;
  style: number;
  name: string | null; // user's name from the join.
}

// The final shape for each record returned by the API.
interface TimeFormatted {
  main: string;
  fraction: string; // Fractional part (including the dot) or empty if none.
}

interface RecordsRecord {
  player: string;
  map: string;
  style: string; // Mapped style name.
  time: TimeFormatted;
  diff: TimeFormatted | null;
  profileUrl: string | null; // Steam profile URL built from SteamID64.
  auth: number | null;
  imageUrl: string; // Map image URL constructed from the "map" field.
}

// Helper function to convert seconds to a formatted time object.
// If hours are zero, the output format is "MM:SS". The fraction is rounded to 2 decimals.
function formatTime(seconds: number): TimeFormatted {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60; // may include fractional part
  const secInteger = Math.floor(secs);
  const fraction = secs - secInteger;
  const fractionStr = fraction > 0 ? fraction.toFixed(2).slice(1) : "";
  let main = "";
  if (hours > 0) {
    main = `${hours}:${minutes.toString().padStart(2, "0")}:${secInteger
      .toString()
      .padStart(2, "0")}`;
  } else {
    main = `${minutes.toString().padStart(2, "0")}:${secInteger
      .toString()
      .padStart(2, "0")}`;
  }
  return { main, fraction: fractionStr };
}

// Helper function to convert a SteamID3 numeric value to a Steam profile URL.
// Conversion formula: SteamID64 = 76561197960265728 + auth
function steamId3ToProfileUrl(auth: number): string {
  const steamId64 = BigInt(76561197960265728) + BigInt(auth);
  return `https://steamcommunity.com/profiles/${steamId64.toString()}`;
}

export async function GET() {
  try {
    // Raw SQL query to aggregate by map and style (i.e., fastest record per combination).
    const recordsData: RecordsDB[] = await prisma.$queryRaw`
      SELECT pt.time, pt.map, pt.date, pt.auth, pt.style, u.name
      FROM playertimes pt
      LEFT JOIN users u ON pt.auth = u.auth
      INNER JOIN (
        SELECT map, style, MIN(time) AS min_time
        FROM playertimes
        GROUP BY map, style
      ) sub ON pt.map = sub.map 
           AND pt.style = sub.style 
           AND pt.time = sub.min_time
      ORDER BY pt.date DESC
      LIMIT 20;
    `;

    // Map the raw data to our final shape.
    // Here, the diff is calculated as the absolute difference from the previous record
    // in the aggregated list. Note: Since each record is a different (map, style) combination,
    // the diff might not be directly comparable between maps.
    const records: RecordsRecord[] = recordsData.map((record, index, arr) => {
      const diffSeconds =
        index === 0 ? null : Math.abs(record.time - arr[index - 1].time);
      const profileUrl =
        record.auth !== null ? steamId3ToProfileUrl(record.auth) : null;
      const imageUrl = `https://kawaiiclan.com/sourcebans/images/maps/${record.map}.jpg`;
      return {
        player: record.name || "Anonymous",
        map: record.map,
        style: styleMapping[record.style] || "Unknown",
        time: formatTime(record.time),
        diff: diffSeconds === null ? null : formatTime(diffSeconds),
        profileUrl,
        auth: record.auth,
        imageUrl,
      };
    });

    return NextResponse.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching records data." },
      { status: 500 }
    );
  }
}
