import { supabase } from "@/lib/supabase";
import { Program, ProgramSubject, ProgramFacility, ProgramAdvantage, ProgramCareerPath, ProgramCertification, ProgramSoftwareSkill } from "@/types/homepage";

export async function getProgramByCode(code: string) {
  try {
    const results = await Promise.allSettled([
      supabase
        .from("programs")
        .select("*")
        .eq("code", code)
        .single(),
      supabase
        .from("program_subjects")
        .select("*")
        .eq("program_code", code)
        .order("order_index"),
      supabase
        .from("program_facilities")
        .select("*")
        .eq("program_code", code)
        .order("order_index"),
      supabase
        .from("program_advantages")
        .select("*")
        .eq("program_code", code)
        .order("order_index"),
      supabase
        .from("program_career_paths")
        .select("*")
        .eq("program_code", code)
        .order("order_index"),
      supabase
        .from("program_certifications")
        .select("*")
        .eq("program_code", code)
        .order("order_index"),
      supabase
        .from("program_software_skills")
        .select("*")
        .eq("program_code", code)
        .order("order_index"),
    ]);

    const [
      programResult,
      subjectsResult,
      facilitiesResult,
      advantagesResult,
      careerPathsResult,
      certificationsResult,
      softwareSkillsResult,
    ] = results;

    // Handle program data
    let program: Program | null = null;
    if (programResult.status === "fulfilled" && programResult.value.data) {
      program = programResult.value.data;
    }

    // Handle subjects
    let subjects: ProgramSubject[] = [];
    if (subjectsResult.status === "fulfilled" && subjectsResult.value.data) {
      subjects = subjectsResult.value.data;
    }

    // Handle facilities
    let facilities: ProgramFacility[] = [];
    if (facilitiesResult.status === "fulfilled" && facilitiesResult.value.data) {
      facilities = facilitiesResult.value.data;
    }

    // Handle advantages (keunggulan)
    let advantages: ProgramAdvantage[] = [];
    if (advantagesResult.status === "fulfilled" && advantagesResult.value.data) {
      advantages = advantagesResult.value.data;
    }

    // Handle career paths
    let careerPaths: ProgramCareerPath[] = [];
    if (careerPathsResult.status === "fulfilled" && careerPathsResult.value.data) {
      careerPaths = careerPathsResult.value.data;
    }

    // Handle certifications
    let certifications: ProgramCertification[] = [];
    if (certificationsResult.status === "fulfilled" && certificationsResult.value.data) {
      certifications = certificationsResult.value.data;
    }

    // Handle software skills
    let softwareSkills: ProgramSoftwareSkill[] = [];
    if (softwareSkillsResult.status === "fulfilled" && softwareSkillsResult.value.data) {
      softwareSkills = softwareSkillsResult.value.data;
    }

    return {
      program,
      subjects,
      facilities,
      advantages,
      careerPaths,
      certifications,
      softwareSkills,
    };
  } catch (error) {
    console.error("Error fetching program data:", error);
    
    return {
      program: null,
      subjects: [],
      facilities: [],
      advantages: [],
      careerPaths: [],
      certifications: [],
      softwareSkills: [],
    };
  }
}