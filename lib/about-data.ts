import { supabase } from "./supabase";
import type { SchoolInfo, Missions, SchoolFeature, Testimonial } from "@/types/homepage";

interface AboutData {
  schoolInfo: SchoolInfo | null;
  missions: Missions[];
  features: SchoolFeature[];
  testimonial: Testimonial | null;
}

export async function getAboutData(): Promise<AboutData> {
  const results = await Promise.allSettled([
    supabase.from("school_info").select("*").single(),
    supabase.from("missions").select("*").order("order_index"),
    supabase
      .from("school_features")
      .select("*")
      .eq("page", "about")
      .order("display_order"),
    supabase.from("testimonials").select("*").eq("role", "Kepala Sekolah").single(),
  ]);

  const [schoolInfoResult, missionsResult, featuresResult, testimonialResult] = results;

  return {
    schoolInfo:
      schoolInfoResult.status === "fulfilled"
        ? schoolInfoResult.value.data
        : null,
    missions:
      missionsResult.status === "fulfilled"
        ? missionsResult.value.data || []
        : [],
    features:
      featuresResult.status === "fulfilled"
        ? featuresResult.value.data || []
        : [],
    testimonial:
      testimonialResult.status === "fulfilled"
        ? testimonialResult.value.data
        : null,
  };
}
