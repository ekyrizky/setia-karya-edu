import { Certifications, SchoolStatistic } from "@/types/homepage";
import { supabase } from "./supabase";

interface SchoolHistory {
  history: string;
}

interface ProfileData {
  schoolHistory: SchoolHistory | null;
  statistics: SchoolStatistic[];
  certifications: Certifications[];
}

export async function getProfile(): Promise<ProfileData> {
  const results = await Promise.allSettled([
    supabase.from("school_profile").select("history").single(),
    supabase.from("school_statistics").select("*").eq("page", "profile"),
    supabase
      .from("certifications")
      .select("*")
      .order("year", { ascending: false }),
  ]);

  const [schoolHistoryResult, statisticsResult, certificationsResult] = results;

  return {
    schoolHistory:
      schoolHistoryResult.status === "fulfilled"
        ? schoolHistoryResult.value.data
        : null,

    statistics:
      statisticsResult.status === "fulfilled"
        ? statisticsResult.value.data || []
        : [],
    certifications:
      certificationsResult.status === "fulfilled"
        ? certificationsResult.value.data || []
        : [],
  };
}
