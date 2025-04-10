"use client";

import { useEffect, useState } from "react";

interface TimeFormatted {
  main: string;
  fraction: string;
}

interface RecordItem {
  player: string;
  map: string;
  time: TimeFormatted; // Formatted time as { main, fraction }
  diff: TimeFormatted | null; // Formatted difference as { main, fraction } or null
  profileUrl: string | null; // Steam profile URL built from SteamID64.
  imageUrl: string; // Map image URL constructed from the "map" field.
  style?: string;
}

export default function RecordsPage() {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await fetch("/api/records");
        if (!response.ok) {
          throw new Error("Error fetching records.");
        }
        const data: RecordItem[] = await response.json();
        setRecords(data);
      } catch (err: any) {
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    }
    fetchRecords();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">Recent Records</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 w-1/5 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Player
              </th>
              <th className="px-6 py-3  w-1/5 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">
                Map
              </th>
              <th className="px-6 py-3  w-1/5 text-right text-xs font-medium text-gray-200 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3  w-1/5 text-right text-xs font-medium text-gray-200 uppercase tracking-wider">
                Style
              </th>
              <th className="px-6 py-3  w-1/5 text-right text-xs font-medium text-gray-200 uppercase tracking-wider">
                Difference
              </th>
            </tr>
          </thead> */}
          <tbody className="space-y-1">
            {records.map((record, index) => (
              <tr
                key={index}
                className="relative block rounded-lg w-full hover:brightness-110 cursor-pointer"
                style={{
                  // Set two backgrounds: the primary map image and a fallback image.
                  backgroundImage: `url(${record.imageUrl}), url("/map-not-found.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <td
                  colSpan={5}
                  className="relative z-10 p-0 block rounded-lg w-full"
                >
                  {/* Overlay with dark blurred background for readability */}
                  <div className="flex flex-col justify-center items-center px-6 py-8 bg-black/30 backdrop-blur-sm w-full h-20 rounded-lg">
                    <div className="w-full flex flex-wrap justify-between items-center">
                      {/* Player Column */}
                      <div className="w-1/5">
                        {record.profileUrl ? (
                          <a
                            href={record.profileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-500"
                          >
                            {record.player}
                          </a>
                        ) : (
                          <span className="text-gray-300">{record.player}</span>
                        )}
                      </div>

                      {/* Style Column */}
                      <div className="w-1/5 text-center text-gray-100">
                        {record.map}
                      </div>

                      {/* Time Column */}
                      <div className="w-1/5 text-right text-gray-100">
                        {record.time.main}
                        <span className="opacity-70">
                          {record.time.fraction}
                        </span>
                      </div>

                      {/* Style Column */}
                      <div className="w-1/5 text-right text-gray-100">
                        {record.style}
                      </div>

                      {/* Diff Column */}
                      <div
                        className={`w-1/5 text-right text-green-400 ${
                          !record.diff && "text-center"
                        }`}
                      >
                        {record.diff ? (
                          <>
                            -{record.diff.main}
                            <span className="opacity-70">
                              {record.diff.fraction}
                            </span>
                          </>
                        ) : (
                          "-"
                        )}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
