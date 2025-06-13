import {
  ContactInfo,
  OperationalHours,
  SchoolAddress,
  SocialLink,
} from "@/types/homepage";
import { supabase } from "./supabase";

interface ContactData {
  contact: ContactInfo | null;
  address: SchoolAddress | null;
  socialLink: SocialLink[];
  operationalHours: OperationalHours[];
}

export async function getContactData(): Promise<ContactData> {
  const results = await Promise.allSettled([
    supabase.from("contact").select("*").single(),
    supabase.from("address").select("*").single(),
    supabase.from("social_links").select("*"),
    supabase.from("operational_hours").select("*"),
  ]);

  const [
    contactResult,
    addressResult,
    socialLinksResult,
    operationalHoursResult,
  ] = results;

  return {
    contact:
      contactResult.status === "fulfilled" ? contactResult.value.data : null,
    address:
      addressResult.status === "fulfilled" ? addressResult.value.data : null,
    socialLink:
      socialLinksResult.status === "fulfilled"
        ? socialLinksResult.value.data || []
        : [],
    operationalHours:
      operationalHoursResult.status === "fulfilled"
        ? operationalHoursResult.value.data || []
        : [],
  };
}
