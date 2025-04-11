interface LeaderboardRecord {
  rank: number;
  player: string;
  points: number;
}

export default async function LeaderboardsPage() {
  // Using a relative URL works correctly for internal API routes in SSR.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/leaderboard`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load leaderboard data");
  }

  const leaderboard: LeaderboardRecord[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Leaderboards</h1>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                  >
                    Player
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                  >
                    Points
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700">
                {leaderboard.map((record) => (
                  <tr key={record.rank}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {record.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {record.player}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {record.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
