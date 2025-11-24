"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

// --- LOGO COMPONENT ---
const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center gap-4 select-none" {...props}>
      {/* 1. Icono (Birrete) */}
      <img 
        src="/birrete.png" 
        alt="Logo Graduación" 
        className="w-12 h-12 object-contain drop-shadow-sm" 
      />

      {/* 2. Separador Vertical (Estilo de la imagen) */}
      {/* Usamos bg-primary para que se adapte al tema, o un color fijo si prefieres */}
      <div className="h-10 w-[3px] bg-[#0f3036] dark:bg-primary rounded-full opacity-90" />

      {/* 3. Textos */}
      <div className="flex flex-col justify-center -space-y-0.5">
        <span className="text-xl font-bold tracking-tight text-foreground leading-none">
          Invitación
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          Evento de Graduación
        </span>
      </div>
    </div>
  );
};

// --- HAMBURGER ICON ---
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// --- TYPES ---
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar01NavLink[];
  onSignInClick?: () => void; // Dejamos esto por si quieres usarlo luego
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: "/", label: "Home" },
];

// --- MAIN COMPONENT ---
export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks = defaultNavigationLinks,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const location = useLocation(); 

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md px-4 md:px-6 shadow-sm",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side: Logo & Nav */}
          <div className="flex items-center gap-2">
            
            {/* Mobile Menu Trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground mr-2"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <Link
                            to={link.href}
                            className={cn(
                              "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline",
                              location.pathname === link.href
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80"
                            )}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}

            {/* Logo Link */}
            <Link
              to={logoHref}
              className="flex items-center space-x-2 transition-opacity hover:opacity-90 no-underline outline-none"
            >
              {logo}
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <NavigationMenu className="flex ml-8">
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <Link
                        to={link.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                          location.pathname === link.href
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/60 hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>
      </header>
    );
  }
);
Navbar01.displayName = "Navbar01";
export { Logo, HamburgerIcon };