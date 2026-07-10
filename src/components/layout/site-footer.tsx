import { ArrowUpRight, AtSign, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navigation, siteContact } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="bg-[#18271f] text-white">
      <div className="site-shell py-14 md:py-20">
        <div className="grid gap-12 border-b border-white/12 pb-14 md:grid-cols-[1.1fr_1.5fr_1fr] md:pb-20">
          <div>
            <Image
              src="/brand/logo-mae-divina.png"
              alt="Logo Mãe Divina Yôga"
              width={124}
              height={124}
              className="h-28 w-28 object-contain"
            />
            <p className="mt-5 max-w-xs font-display text-2xl leading-8 text-[#fffaf5]">
              Uma casa para respirar, cuidar e pertencer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between border-b border-white/10 py-3 text-xs font-semibold uppercase text-white/68 transition-colors hover:text-white"
              >
                {item.label}
                <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="space-y-5 text-sm text-white/66">
            <a
              href={siteContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>
                {siteContact.addressLine}
                <br />
                {siteContact.addressDetail}
              </span>
            </a>
            <a
              href={whatsappUrl("Olá! Vim pelo site da Mãe Divina Yôga e gostaria de mais informações.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <MessageCircle size={18} className="shrink-0 text-gold" />
              {siteContact.whatsappDisplay}
            </a>
            <a
              href={siteContact.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <AtSign size={18} className="shrink-0 text-gold" />
              {siteContact.instagramHandle}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[0.65rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mãe Divina Yôga. Todos os direitos reservados.</p>
          <p>Yoga · meditação · vivências conscientes</p>
        </div>
      </div>
    </footer>
  );
}
