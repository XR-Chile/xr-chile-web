"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NavigationMenu className="rounded-none border-0 border-b-4 justify-between md:px-[120px] py-[14px] sticky top-0 z-20">
      {/* Logo */}
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <span className="text-2xl">XR-CHILE</span>
        </NavigationMenuLink>
      </Link>

      {/* Menú para pantallas grandes */}
      <NavigationMenuList className="hidden md:flex space-x-10">
        <NavigationMenuItem>
          <Link href="/consultoria" legacyBehavior passHref>
            <Button className="duration-150">
              <span className="text-text">Consultoría</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <Button className="duration-150">
              <span className="text-text">Blog</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        {/* DE MOMENTO SE MANTIENE OCULTO PROYECTOS, EQUIPAMIENTO E INTERVENCIONES
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <Button className="duration-150">
              <span className="text-text">Proyectos</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/equipment" legacyBehavior passHref>
            <Button className="duration-150">
              <span className="text-text">Equipamiento</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/interventions" legacyBehavior passHref>
            <Button className="duration-150">
              <span className="text-text">Intervenciones</span>
              </Button>
              </Link>
              </NavigationMenuItem>
              */}
      </NavigationMenuList>

      {/* Ícono de hamburguesa para móviles */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú móvil (se muestra solo en pantallas pequeñas) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-main border-b-4 border-border z-50">
          <div className="flex flex-col space-y-4 p-4">
            <NavigationMenuItem>
              <Link href="/consultoria" legacyBehavior passHref>
                <Button
                  className="w-full duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-text">Consultoría</span>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <Button
                  className="w-full duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-text">Blog</span>
                </Button>
              </Link>
            </NavigationMenuItem>
            {/* DE MOMENTO SE MANTIENE OCULTO PROYECTOS, EQUIPAMIENTO E INTERVENCIONES
                  <NavigationMenuItem>
                    <Link href="/equipment" legacyBehavior passHref>
                      <Button
                        className="w-full duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-text">Equipamiento</span>
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/proyectos" legacyBehavior passHref>
                      <Button
                        className="w-full duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-text">Proyectos</span>
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/interventions" legacyBehavior passHref>
                      <Button
                        className="w-full duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-text">Intervenciones</span>
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                   */}
          </div>
        </div>
      )}
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent block text-mtext select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder",
            className,
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
