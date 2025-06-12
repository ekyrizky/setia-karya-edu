import { supabase } from "./supabase";

// Types based on the database schema
export interface AdmissionTimeline {
  id: number;
  wave: number;
  name: string;
  period: string;
  status: string;
  discount?: string;
  created_at: string;
}

export interface AdmissionRequirement {
  id: number;
  type: string; // 'general' or 'documents'
  requirement: string;
  order_index: number;
  created_at: string;
}

export interface AdmissionFee {
  id: number;
  category: string;
  subcategory?: string;
  amount: number;
  note?: string;
  created_at: string;
}

export interface RegistrationFlow {
  id: number;
  step: number;
  title: string;
  description: string;
  duration?: string;
  created_at: string;
}

export interface StudyProgram {
  id: number;
  code: string;
  name: string;
  description?: string;
  quota: number;
  created_at: string;
  updated_at: string;
}

interface AdmissionData {
  timeline: AdmissionTimeline[];
  requirements: AdmissionRequirement[];
  fees: AdmissionFee[];
  registrationFlow: RegistrationFlow[];
  studyPrograms: StudyProgram[];
}

export async function getAdmissionData(): Promise<AdmissionData> {
  const results = await Promise.allSettled([
    supabase.from("admission_timeline").select("*").order("wave"),
    supabase.from("admission_requirements").select("*").order("order_index"),
    supabase.from("admission_fees").select("*"),
    supabase.from("registration_flow").select("*").order("step"),
    supabase.from("study_programs").select("*").order("code"),
  ]);

  const [timelineResult, requirementsResult, feesResult, flowResult, programsResult] = results;

  return {
    timeline:
      timelineResult.status === "fulfilled" ? timelineResult.value.data || [] : [],
    requirements:
      requirementsResult.status === "fulfilled" ? requirementsResult.value.data || [] : [],
    fees:
      feesResult.status === "fulfilled" ? feesResult.value.data || [] : [],
    registrationFlow:
      flowResult.status === "fulfilled" ? flowResult.value.data || [] : [],
    studyPrograms:
      programsResult.status === "fulfilled" ? programsResult.value.data || [] : [],
  };
}

// Helper functions to get specific data
export async function getActiveAdmissionWave(): Promise<AdmissionTimeline | null> {
  const { data, error } = await supabase
    .from("admission_timeline")
    .select("*")
    .eq("status", "active")
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function getAdmissionRequirementsByType(type: string): Promise<AdmissionRequirement[]> {
  const { data, error } = await supabase
    .from("admission_requirements")
    .select("*")
    .eq("type", type)
    .order("order_index");

  if (error || !data) {
    return [];
  }

  return data;
}

export async function getAdmissionFeesByCategory(category: string): Promise<AdmissionFee[]> {
  const { data, error } = await supabase
    .from("admission_fees")
    .select("*")
    .eq("category", category);

  if (error || !data) {
    return [];
  }

  return data;
}