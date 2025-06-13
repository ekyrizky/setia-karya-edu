import {
  AcademicCurriculum,
  AcademicProgram,
  ExtracurricularCategory,
  SchoolStatistic,
  NavigationItem,
  SchoolFeature,
} from "@/types/homepage";
import { supabase } from "./supabase";

interface AcademicData {
  kurikulum: AcademicCurriculum;
  programs: AcademicProgram[];
  ekstrakurikuler: ExtracurricularCategory[];
  statistics: SchoolStatistic[];
  navigation: NavigationItem[];
}

export async function getAcademicData(): Promise<AcademicData> {
  const results = await Promise.allSettled([
    supabase.from("academic_curriculum").select("*").single(),
    supabase.from("academic_programs").select("*"),
    supabase.from("extracurricular_categories").select(`
      *,
      activities:extracurricular_activities(*)
    `),
    supabase
      .from("school_statistics")
      .select("*")
      .eq("page", "academic")
      .order("display_order"),
    supabase
      .from("navigation_menu")
      .select("*")
      .eq("page", "academic")
      .order("display_order"),
  ]);

  const [
    curriculumResult,
    programsResult,
    extracurricularResult,
    statisticsResult,
    navigationResult,
  ] = results;

  return {
    kurikulum:
      curriculumResult.status === "fulfilled"
        ? curriculumResult.value.data || null
        : null,
    programs:
      programsResult.status === "fulfilled"
        ? programsResult.value.data || []
        : [],
    ekstrakurikuler:
      extracurricularResult.status === "fulfilled"
        ? extracurricularResult.value.data || []
        : [],
    statistics:
      statisticsResult.status === "fulfilled"
        ? statisticsResult.value.data || []
        : [],
    navigation:
      navigationResult.status === "fulfilled"
        ? navigationResult.value.data || []
        : [],
  };
}

interface Achievement {
  id: string;
  name: string;
  category: string;
  year: string;
  organizer: string;
}

interface EkstrakurikulerData {
  ekstrakurikuler: ExtracurricularCategory[];
  highlights: SchoolFeature[];
  achievements: Achievement[];
}

export async function getEkstrakurikulerData(): Promise<EkstrakurikulerData> {
  const results = await Promise.allSettled([
    supabase.from("extracurricular_categories").select(`
      *,
      activities:extracurricular_activities(*)
    `),
    supabase
      .from("school_features")
      .select("*")
      .eq("page", "extracurricular")
      .order("display_order"),
    supabase.from("achievements").select("*").order("year", { ascending: false }),
  ]);

  const [extracurricularResult, highlightsResult, achievementsResult] = results;

  return {
    ekstrakurikuler:
      extracurricularResult.status === "fulfilled"
        ? extracurricularResult.value.data || []
        : [],
    highlights:
      highlightsResult.status === "fulfilled"
        ? highlightsResult.value.data || []
        : [],
    achievements:
      achievementsResult.status === "fulfilled"
        ? achievementsResult.value.data || []
        : [],
  };
}
