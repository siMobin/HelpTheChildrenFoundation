"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-18 max-h-18 min-h-18 border-b bg-sky-900/95 backdrop-blur supports-[backdrop-filter]hover:bg-background/60 p-2 px-8 shadow border-none">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/icon.svg" className="h-12" alt="Help" />
          <img src="/logo_text.svg" className="h-8 " alt="Help" />
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu className="bg-white p-2 rounded-full shadow-md">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <Link
                        className="bg-transparent hover:bg-transparent"
                        href="/"
                      >
                        <div className="mb-2 text-lg font-medium">
                          <img src="/icon.svg" alt="" className="" />
                        </div>
                        <img src="/logo_text_bottom_color.svg" alt="" />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about" title="Our Story">
                    Learn about our mission and vision.
                  </ListItem>
                  <ListItem href="/team" title="Our Team">
                    Meet the people behind HCF.
                  </ListItem>
                  <ListItem href="/impact" title="Our Impact">
                    See the difference we make.
                  </ListItem>
                  <ListItem href="/faq" title="FAQ">
                    Find answers to common questions.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <ListItem href="/education" title="Education Program">
                    Providing quality education to underprivileged children.
                  </ListItem>
                  <ListItem href="/health" title="Health & Nutrition">
                    Ensuring well-being for our students.
                  </ListItem>
                  <ListItem href="/empowerment" title="Youth Empowerment">
                    Building future leaders.
                  </ListItem>
                  <ListItem href="/volunteer" title="Volunteer Program">
                    Join us and make a difference.
                  </ListItem>
                  <ListItem href="/gallery" title="Gallery">
                    Explore our moments and milestones.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/donate" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Donate
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/sponsor-a-child" className="capitalize">
          <Button className="font-bold ping">Be a Sponsor</Button>
        </Link>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
