"use client"

import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">PSSF</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">{t("footer.programs")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary">
                  Undergraduate Programs
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary">
                  Graduate Programs
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary">
                  Research Programs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">{t("footer.about")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Gaza, Palestine</li>
              <li>
                <a href="mailto:info@palestinianstudentfund.org" className="text-muted-foreground hover:text-primary">
                  Palestinian.pssf@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905394300726" className="text-muted-foreground hover:text-primary">
                  +90 5394300726
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Palestinian Student Support Fund. {t("footer.rights")}
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

