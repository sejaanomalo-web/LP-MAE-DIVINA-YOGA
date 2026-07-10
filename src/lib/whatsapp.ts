import { siteContact } from "@/data/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
