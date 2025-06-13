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
        ? curriculumResult.value.data || {
            id: "",
            title: "Kurikulum SMK Revisi 2023",
            description:
              "Kurikulum berbasis industri dengan link and match untuk program TKRO dan OTKP",
            features: [
              "Pembelajaran berbasis praktik industri",
              "Sertifikasi kompetensi nasional",
              "Magang industri (Prakerin)",
              "Teaching factory",
            ],
          }
        : {
            id: "",
            title: "Kurikulum SMK Revisi 2023",
            description:
              "Kurikulum berbasis industri dengan link and match untuk program TKRO dan OTKP",
            features: [
              "Pembelajaran berbasis praktik industri",
              "Sertifikasi kompetensi nasional",
              "Magang industri (Prakerin)",
              "Teaching factory",
            ],
          },
    programs:
      programsResult.status === "fulfilled"
        ? programsResult.value.data || []
        : [],
    ekstrakurikuler:
      extracurricularResult.status === "fulfilled"
        ? extracurricularResult.value.data || []
        : [],
    statistics:
      statisticsResult.status === "fulfilled" && statisticsResult.value.data
        ? statisticsResult.value.data
        : [
            {
              id: "1",
              icon: "users",
              value: "216",
              label: "Total Siswa",
              category: "academic",
            },
            {
              id: "2",
              icon: "graduationCap",
              value: "2",
              label: "Program Keahlian",
              category: "academic",
            },
            {
              id: "3",
              icon: "award",
              value: "95%",
              label: "Tingkat Kelulusan",
              category: "academic",
            },
            {
              id: "4",
              icon: "building",
              value: "50+",
              label: "Mitra Industri",
              category: "academic",
            },
          ],
    navigation:
      navigationResult.status === "fulfilled" && navigationResult.value.data
        ? navigationResult.value.data
        : [
            {
              id: "1",
              title: "Kurikulum",
              description: "Struktur kurikulum SMK Revisi 2023",
              href: "/akademik/kurikulum",
              icon: "bookOpen",
            },
            {
              id: "2",
              title: "TKRO",
              description: "Teknik Kendaraan Ringan Otomotif",
              href: "/akademik/tkro",
              icon: "wrench",
            },
            {
              id: "3",
              title: "OTKP",
              description: "Otomatisasi dan Tata Kelola Perkantoran",
              href: "/akademik/otkp",
              icon: "computer",
            },
            {
              id: "4",
              title: "Ekstrakurikuler",
              description: "Kegiatan pengembangan bakat dan minat",
              href: "/akademik/ekstrakurikuler",
              icon: "users",
            },
            {
              id: "5",
              title: "Kalender Akademik",
              description: "Jadwal kegiatan sepanjang tahun",
              href: "/akademik/kalender",
              icon: "calendar",
            },
          ],
  };
}

interface EkstrakurikulerData {
  ekstrakurikuler: ExtracurricularCategory[];
  highlights: SchoolFeature[];
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
  ]);

  const [extracurricularResult, highlightsResult] = results;

  return {
    ekstrakurikuler:
      extracurricularResult.status === "fulfilled"
        ? extracurricularResult.value.data || []
        : [],
    highlights:
      highlightsResult.status === "fulfilled"
        ? highlightsResult.value.data || []
        : [],
  };
}
