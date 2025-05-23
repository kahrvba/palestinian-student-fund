"use client"

import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10 font-playfair">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold font-playfair">IFPPS</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground font-playfair">
              Empowering Palestinian students worldwide through educational opportunities, financial support, and
              academic resources.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider font-playfair">{t("footer.programs")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary font-playfair">
                  Undergraduate Programs
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary font-playfair">
                  Graduate Programs
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary font-playfair">
                  Research Programs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider font-playfair">{t("footer.about")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary font-playfair">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary font-playfair">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary font-playfair">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider font-playfair">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground font-playfair">Kayabaşı Mah. Adnan Menderes Blv. A4 Blok No:7A Kapı No:11 Başakşehir/İstanbul</li>
              <li>
                <a href="mailto:info@palestinianstudentfund.org" className="text-muted-foreground hover:text-primary font-playfair">
                  info@palssf.org
                </a>
              </li>
              <li>
                <a href="tel:+905394300726" className="text-muted-foreground hover:text-primary font-playfair">
                  +90 5394300726
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground font-playfair">
              &copy; {new Date().getFullYear()} Isnad Foundation. {t("footer.rights")}
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary font-playfair">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary font-playfair">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

