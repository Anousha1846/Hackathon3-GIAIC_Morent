export async function fetchSanityData(query: string) {
  const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.apicdn.sanity.io/v2025-01-02/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${encodeURIComponent(query)}`;

  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    cache: "no-store", // Ensures fresh data every time
  });

  if (!res.ok) throw new Error("Failed to fetch data from Sanity");

  const { result } = await res.json();
  return result;
}
