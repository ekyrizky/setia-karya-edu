import { supabase } from "./supabase";
import { Photos, Videos } from "@/types/homepage";

interface GaleryData {
  photos: Photos[];
  videos: Videos[];
}

export async function getGaleryData(): Promise<GaleryData> {
  const results = await Promise.allSettled([
    supabase.from("photos").select("*").order("date"),
    supabase.from("videos").select("*").order("date"),
  ]);

  const [photosResult, videosResult] = results;

  return {
    photos:
      photosResult.status === "fulfilled" ? photosResult.value.data || [] : [],
    videos:
      videosResult.status === "fulfilled" ? videosResult.value.data || [] : [],
  };
}
