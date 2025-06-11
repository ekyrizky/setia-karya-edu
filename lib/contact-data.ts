import { ContactInfo, OperationalHours, SchoolAddress } from "@/types/homepage";
import { supabase } from "./supabase";

interface ContactData {
  contact: ContactInfo | null;
  address: SchoolAddress | null;
  operationalHours: OperationalHours[];
}

export async function getContactData(): Promise<ContactData> {
  const results = await Promise.allSettled([
    supabase.from("contact").select("*").single(),
    supabase.from("address").select("*").single(),
    supabase.from("operational_hours").select("*"),
  ]);

  const [contactResult, addressResult, operationalHoursResult] = results;

  return {
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
