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
    { 
      name: t("nav.programs"), 
      href: "/programs",
      dropdown: true,
      items: [
        { 
          name: "Undergraduate Scholarships",
          href: "/programs#undergraduate-scholarships",
          items: [
            { name: "Pulse of Life Scholarship", href: "/programs#pulse-of-life" },
            { name: "Excellence Scholarship", href: "/programs#excellence" }
          ]
        },
        { 
          name: "Graduate Scholarships",
          href: "/programs#graduate-scholarships",
          items: [
            { name: "Sustainability Scholarship", href: "/programs#sustainability" },
            { name: "Ibn Khaldun Scholarship Program", href: "/programs#ibn-khaldun" },
            { name: "Research Excellence Scholarship", href: "/programs#research-excellence" }
          ]
        }
      ]
    },
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image 
              src="/logo.png" 
              alt="ifpps logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mt-2 sm:mt-3 md:mt-4" 
              width={80} 
              height={80} 
              priority 
            />
            <span className={`text-lg sm:text-xl md:text-2xl font-bold ml-2 ${getTextColor()}`}>
              IFPPS
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
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
                        <ul className="grid w-[400px] gap-3 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                          {item.items?.map((dropdownItem) => (
                            <li key={dropdownItem.href} className="row-span-3">
                              <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                                <div className="text-sm font-medium leading-none mb-2">{dropdownItem.name}</div>
                                {dropdownItem.items && (
                                  <div className="mt-2 space-y-1">
                                    {dropdownItem.items.map((subItem) => (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className="block text-sm text-muted-foreground hover:text-accent-foreground pl-2 py-1 rounded-md hover:bg-accent/50"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] bg-white dark:bg-background z-40 lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <div key={item.href} className="space-y-2">
                      <div className="font-medium text-lg">{item.name}</div>
                      <div className="pl-4 space-y-4">
                        {item.items?.map((dropdownItem) => (
                          <div key={dropdownItem.href} className="space-y-2">
                            <div className="text-base font-medium text-muted-foreground">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.items && (
                              <div className="pl-4 space-y-2">
                                {dropdownItem.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="block text-sm text-muted-foreground hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "text-primary dark:text-primary"
                          : "text-foreground hover:text-primary dark:text-foreground dark:hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

