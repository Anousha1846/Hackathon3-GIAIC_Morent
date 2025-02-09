import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, token } from "@/sanity/env"; // ✅ Use absolute imports

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token, // Ensure it's loaded from the environment
  useCdn: true, // Set to false if using ISR, SSG, or revalidation
});

// ✅ Safer logging
if (process.env.NODE_ENV !== "production") {
  console.log("Sanity Client Initialized"); 
}
