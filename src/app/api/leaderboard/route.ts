import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Interface that represents the structure returned from our Prisma query.
interface LeaderboardUser {
  auth: number;
  name: string | null;
  points: number;
}

// Interface for the data we want to return from the API.
interface LeaderboardRecord {
  rank: number;
  player: string;
  points: number;
}

export async function GET() {
  try {
    // Fetch users ordered by points (descending).
    const users: LeaderboardUser[] = await prisma.users.findMany({
      orderBy: { points: "desc" },
      select: { auth: true, name: true, points: true },
    });

    // Map users to a leaderboard record format and include a rank.
    const leaderboard: LeaderboardRecord[] = users.map(
      (user: LeaderboardUser, index: number) => ({
        rank: index + 1,
        player: user.name || "Anonymous",
        points: user.points,
      })
    );

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching leaderboard data." },
      { status: 500 }
    );
  }
}
