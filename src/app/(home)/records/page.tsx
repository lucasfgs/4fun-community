// File: src/app/records/page.tsx
// (No "use client" directive is needed; this is a server component.)

// Type definitions for our record data.
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

// Our helper functions remain the same, but note that
// in this component we are only fetching data from our API,
// which has already performed all the mapping.

export default async function RecordsPage() {
  // Fetch records data from our API endpoint.
  // The use of { cache: "no-store" } ensures fresh data on each request.
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/records`);
  const records: RecordItem[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">Recent Records</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <tbody className="space-y-1">
            {records.map((record, index) => (
              <tr
                key={index}
                className="relative block rounded-lg w-full hover:brightness-110"
                style={{
                  // Use two background images: the primary map image and a fallback.
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

                      {/* Map Column (displaying the map name) */}
                      <div className="w-1/5 text-center text-gray-100">
                        <span className="font-semibold">{record.map}</span>
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

                      {/* Difference Column */}
                      <div
                        className={`w-1/5 text-right text-green-400 ${
                          !record.diff && "text-center"
                        }`}
                      >
                        {record.diff ? (
                          <>
                            - {record.diff.main}
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
