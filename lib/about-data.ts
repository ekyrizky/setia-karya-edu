import { supabase } from "./supabase";
import type {
  SchoolInfo,
  Missions,
  SchoolFeature,
  Testimonial,
  Teachers,
  SchoolStatistic,
} from "@/types/homepage";

interface AboutData {
  schoolInfo: SchoolInfo | null;
  missions: Missions[];
  features: SchoolFeature[];
  testimonial: Testimonial | null;
}

interface VisiMisiData {
  schoolInfo: SchoolInfo | null;
  missions: Missions[];
}

interface TeachersData {
  teachers: Teachers[];
  statistics: SchoolStatistic[];
}

export async function getVisiMisiData(): Promise<VisiMisiData> {
  const results = await Promise.allSettled([
    supabase.from("school_info").select("*").single(),
    supabase.from("missions").select("*").order("order_index"),
  ]);

  const [schoolInfoResult, missionsResult] = results;

  return {
    schoolInfo:
      schoolInfoResult.status === "fulfilled"
        ? schoolInfoResult.value.data
        : null,
    missions:
      missionsResult.status === "fulfilled"
        ? missionsResult.value.data || []
        : [],
  };
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
    supabase
      .from("testimonials")
      .select("*")
      .eq("role", "Kepala Sekolah")
      .single(),
  ]);

  const [schoolInfoResult, missionsResult, featuresResult, testimonialResult] =
    results;

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

export async function getTeachersData(): Promise<TeachersData> {
  const results = await Promise.allSettled([
    supabase.from("teachers").select("*"),
    supabase.from("school_statistics").select("*").eq("page", "teacher"),
  ]);

  const [teachersResult, statisticsResult] = results;

  return {
    teachers:
      teachersResult.status === "fulfilled"
        ? teachersResult.value.data || []
        : [],
    statistics:
      statisticsResult.status === "fulfilled"
        ? statisticsResult.value.data || []
        : [],
  };
}
