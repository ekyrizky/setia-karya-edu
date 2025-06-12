import { News } from "@/types/homepage";
import { supabase } from "./supabase";

interface Newsdata {
  news: News[];
}

export async function getNewsData(): Promise<Newsdata> {
  const results = await Promise.allSettled([
    supabase.from("news").select("*").order("date"),
  ]);

  const [newsResult] = results;

  return {
    news: newsResult.status === "fulfilled" ? newsResult.value.data || [] : [],
  };
}

export async function getNewsById(id: string): Promise<News | null> {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function getRelatedNews(currentId: string, category: string, limit: number = 5): Promise<News[]> {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", category)
    .neq("id", currentId)
    .order("date", { ascending: false })
    .limit(limit);

  if (error || !data) {
    return [];
  }

  return data;
}
