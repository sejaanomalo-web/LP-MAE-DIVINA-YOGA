"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

function isExternal(href: string) {
  return href.startsWith("http");
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(28,45,36,0.94)] text-white backdrop-blur-xl">
      <div className="site-shell flex h-[82px] items-center justify-between gap-5">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex min-w-0 items-center gap-3"
          aria-label="Mãe Divina Yôga - início"
        >
          <Image
            src="/brand/logo-mae-divina.png"
            alt=""
            width={62}
            height={62}
            className="h-[58px] w-[58px] object-contain"
            priority
          />
          <div className="hidden min-w-0 sm:block">
            <span className="block font-display text-[1.3rem] font-semibold leading-none text-[#fffaf5]">
              Mãe Divina
            </span>
            <span className="mt-1 block text-[0.56rem] font-semibold uppercase text-white/52">
              Yôga · Cascavel
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.items ? item.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(item.items ? item.label : null)}
            >
              <Link
                href={item.href}
                className="flex h-12 items-center gap-1.5 px-2.5 text-[0.67rem] font-semibold uppercase text-white/78 transition-colors hover:text-white 2xl:px-3"
                aria-haspopup={item.items ? "menu" : undefined}
                aria-expanded={item.items ? openMenu === item.label : undefined}
              >
                {item.label}
                {item.items ? <ChevronDown size={13} aria-hidden="true" /> : null}
              </Link>

              <AnimatePresence>
                {item.items && openMenu === item.label ? (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.99 }}
                    transition={{ duration: 0.18 }}
                    className={`absolute left-1/2 top-[calc(100%+14px)] -translate-x-1/2 border border-ink/10 bg-[#fffaf5] p-3 text-ink shadow-[0_24px_70px_rgba(16,24,19,0.22)] ${
                      item.items.length > 5 ? "w-[490px]" : "w-[340px]"
                    }`}
                  >
                    <div className={item.items.length > 5 ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          role="menuitem"
                          target={isExternal(subItem.href) ? "_blank" : undefined}
                          rel={isExternal(subItem.href) ? "noreferrer" : undefined}
                          className="group flex min-h-12 items-start justify-between gap-3 border border-transparent px-3 py-2.5 transition-colors hover:border-terracotta/15 hover:bg-paper"
                        >
                          <span>
                            <span className="block text-[0.72rem] font-semibold text-ink">{subItem.label}</span>
                            {subItem.description ? (
                              <span className="mt-1 block text-[0.64rem] leading-4 text-ink-soft">
                                {subItem.description}
                              </span>
                            ) : null}
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="mt-0.5 shrink-0 text-terracotta opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#aula-gratis" className="button-light hidden !min-h-10 !px-4 lg:inline-flex">
            Aula grátis
            <ArrowUpRight size={15} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white xl:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={21} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] min-h-screen overflow-y-auto bg-forest"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-[82px] items-center justify-between border-b border-white/10 px-5">
              <span className="font-display text-2xl text-[#fffaf5]">Mãe Divina Yôga</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-white/20"
                aria-label="Fechar menu"
              >
                <X size={21} />
              </button>
            </div>

            <nav className="px-5 pb-32 pt-5" aria-label="Navegação mobile">
              {navigation.map((item, index) => {
                const expanded = mobileSection === item.label;
                return (
                  <div key={item.label} className="border-b border-white/12">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-5 font-display text-[1.9rem] font-medium text-[#fffaf5] sm:text-[2.5rem]"
                      >
                        <span className="mr-3 align-middle font-sans text-[0.58rem] text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                      {item.items ? (
                        <button
                          type="button"
                          onClick={() => setMobileSection(expanded ? null : item.label)}
                          className="flex h-12 w-12 items-center justify-center text-white/70"
                          aria-label={`${expanded ? "Fechar" : "Abrir"} opções de ${item.label}`}
                          aria-expanded={expanded}
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      ) : null}
                    </div>
                    <AnimatePresence initial={false}>
                      {item.items && expanded ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-1 pb-5 pl-8">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                target={isExternal(subItem.href) ? "_blank" : undefined}
                                rel={isExternal(subItem.href) ? "noreferrer" : undefined}
                                className="py-2 text-sm text-white/68 hover:text-white"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
