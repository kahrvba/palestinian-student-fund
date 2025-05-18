"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, GraduationCap, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.programs"), href: "/programs" },
    { name: t("nav.success"), href: "/success-stories" },
    { name: t("nav.apply"), href: "/apply" },
    { name: t("nav.activities"), href: "/activities" },
    { 
      name: t("nav.testimonials"), 
      href: "/testimonials",
      dropdown: true,
      items: [
        { name: "Students", href: "/testimonials?type=students" },
        { name: "Influencers", href: "/testimonials?type=influencers" }
      ]
    },
    { name: t("nav.contact"), href: "/contact" },
  ]

  // Check if we're on the activities page
  const isActivitiesPage = pathname.includes('/activities')

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isScrolled || isMobileMenuOpen) {
      return "text-foreground dark:text-foreground"
    } else if (isActivitiesPage) {
      return "text-gray-900 dark:text-foreground" // Dark text for activities page
    } else {
      return "text-white" // White text for other pages
    }
  }

  // Determine icon button styling
  const getIconButtonClass = () => {
    if (isScrolled) {
      return ""
    } else if (isActivitiesPage) {
      return "text-gray-900 hover:text-gray-900 hover:bg-gray-200/20 dark:text-foreground"
    } else {
      return "text-white hover:text-white hover:bg-white/20"
    }
  }

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: 0 }} initial={{ scaleX: 0 }} />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-background backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image src="/logo.png" alt="pssf logo" className="w-50 mt-5" width={80} height={80} priority />
            <span className={`text-xl font-bold ${getTextColor()}`}>
              PSSF
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <NavigationMenu key={item.href}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-md font-medium transition-colors bg-transparent hover:bg-transparent data-[state=open]:bg-transparent ${
                          pathname === item.href
                            ? "text-primary dark:text-primary"
                            : isScrolled
                              ? "text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary"
                              : isActivitiesPage
                                ? "text-gray-900 hover:text-[#34a853] dark:text-foreground dark:hover:text-primary"
                                : "text-white hover:text-primary-foreground"
                        }`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                          {item.items?.map((dropdownItem) => (
                            <li key={dropdownItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={dropdownItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{dropdownItem.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-md font-medium transition-colors ${
                    pathname === item.href
                      ? "text-primary dark:text-primary"
                      : isScrolled
                        ? "text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary"
                        : isActivitiesPage
                          ? "text-gray-900 hover:text-[#34a853] dark:text-foreground dark:hover:text-primary"
                          : "text-white hover:text-primary-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={getIconButtonClass()}
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  <span className={language === "en" ? "font-bold" : ""}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")}>
                  <span className={language === "ar" ? "font-bold" : ""}>العربية</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("tr")}>
                  <span className={language === "tr" ? "font-bold" : ""}>Türkçe</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={getIconButtonClass()}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button> */}

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${getIconButtonClass()}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background pt-20 px-4 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 text-lg font-medium border-b ${
                      pathname === item.href ? "text-primary border-primary" : "border-border"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

