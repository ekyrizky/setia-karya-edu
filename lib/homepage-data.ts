import { supabase } from "./supabase";

export async function getHomepageData() {
  const results = await Promise.allSettled([
    supabase.from("school_profile").select("*").single(),
    supabase
      .from("school_statistics")
      .select("*")
      .eq("page", "home")
      .order("display_order"),
    supabase.from("academic_programs").select("*").order("display_order"),
    supabase.from("testimonials").select("*").order("display_order").limit(3),
    supabase.from("quick_info").select("*").order("display_order"),
    supabase
      .from("school_features")
      .select("*")
      .eq("page", "home")
      .order("display_order"),
    supabase.from("contact").select("*").single(),
    supabase.from("address").select("*").single(),
    supabase.from("operational_hours").select("*"),
  ]);

  const [
    profileResult,
    statisticsResult,
    programsResult,
    testimonialsResult,
    quickInfoResult,
    featuresResult,
    contactResult,
    addressResult,
    operationalHoursResult,
  ] = results;

  return {
    profile:
      profileResult.status === "fulfilled" ? profileResult.value.data : null,
    statistics:
      statisticsResult.status === "fulfilled"
        ? statisticsResult.value.data || []
        : [],
    programs:
      programsResult.status === "fulfilled"
        ? programsResult.value.data || []
        : [],
    testimonials:
      testimonialsResult.status === "fulfilled"
        ? testimonialsResult.value.data || []
        : [],
    quickInfo:
      quickInfoResult.status === "fulfilled"
        ? quickInfoResult.value.data || []
        : [],
    features:
      featuresResult.status === "fulfilled"
        ? featuresResult.value.data || []
        : [],
    contact:
      contactResult.status === "fulfilled" ? contactResult.value.data : null,
    address:
      addressResult.status === "fulfilled" ? addressResult.value.data : null,
    operationalHours:
      operationalHoursResult.status === "fulfilled"
        ? operationalHoursResult.value.data || []
        : [],
  };
}
