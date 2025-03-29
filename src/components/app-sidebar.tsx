"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BetaLabel from "./beta-label";
import logo from "../../public/logo/global.png";
import {
  FilePlus,
  CheckSquare,
  Clipboard,
  FileText,
  LogOut,
} from "lucide-react";

// Define your navigation items
const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: FilePlus },
  { title: "Apply Loan", url: "/apply-loan", icon: FilePlus },
  { title: "Active Loan", url: "/active-loan", icon: CheckSquare },
  { title: "Previous Loan", url: "/previous-loan", icon: Clipboard },
  { title: "Documentations", url: "/documentations", icon: FileText },
  { title: "Logout", url: "/logout", icon: LogOut },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="px-5 pt-5 flex-row gap-4">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <p className="text-5xl">Mifos</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="h-full">
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="h-full">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={pathname === item.url} asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
