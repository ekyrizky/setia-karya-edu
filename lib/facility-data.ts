import { Facilities, Infrastructure, SchoolStatistic } from "@/types/homepage";
import { supabase } from "./supabase";

interface FacilityData {
  facilities: Facilities[];
  infrastructures: Infrastructure[];
  statistics: SchoolStatistic[];
}

export async function getFacilityData(): Promise<FacilityData> {
  const results = await Promise.allSettled([
    supabase.from("facilities").select("*"),
    supabase.from("infrastructures").select("*"),
    supabase
      .from("school_statistics")
      .select("*")
      .eq("page", "facility")
      .order("display_order"),
  ]);

  const [facilitiesResult, infrastructuresResult, statisticsResult] = results;

  return {
    facilities:
      facilitiesResult.status === "fulfilled"
        ? facilitiesResult.value.data || []
        : [],
    infrastructures:
      infrastructuresResult.status === "fulfilled"
        ? infrastructuresResult.value.data || []
        : [],
    statistics:
      statisticsResult.status === "fulfilled"
        ? statisticsResult.value.data || []
        : [],
  };
}
