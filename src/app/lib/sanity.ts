import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fwhqak1p";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_TOKEN; // yalnızca yazma işlemleri için

if (!projectId || !dataset) {
  console.warn("[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID veya NEXT_PUBLIC_SANITY_DATASET eksik.");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  token,
});

export async function fetchSanity<T>(query: string, params?: Record<string, any>): Promise<T> {
  if (!projectId || !dataset) {
    throw new Error("[sanity] Gerekli env değişkenleri tanımlı değil.");
  }
  
  try {
    const result = await sanityClient.fetch<T>(query, params as any);
    console.log('[Sanity] Sorgu başarılı:', query, result);
    return result;
  } catch (error) {
    console.error('[Sanity] Sorgu hatası:', query, error);
    throw error;
  }
}