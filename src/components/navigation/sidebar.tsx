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
import { 
    LayoutDashboard,
    FileSpreadsheet,
    FilePlus,
    CheckSquare,
    Clipboard,
    Settings,
    Calculator,
    LogOut,
    Edit2
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo/global.png";

// Define your navigation items
const navItems = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Apply Loan", url: "/apply-loan", icon: FilePlus },
    { title: "Loan Section", url: "/loans", icon: CheckSquare },
    { title: "Repayments", url: "/repayments", icon: CheckSquare },
    { title: "Loan Statements", url: "/loans/statements", icon: Clipboard },
    { title: "Support & Settings", url: "/settings", icon: Settings },
    { title: "EMI Calculator", url: "/calculator", icon: Calculator },
    { title: "Logout", url: "/logout", icon: LogOut }
];

export function AppSidebar() {
    const pathname = usePathname();
    

    return (
        <Sidebar variant="inset">
            <SidebarHeader className="px-5 pt-5 flex items-center justify-between">
            <Image src={logo} alt="Logo" width={80} height={80} />
            <h1 className="text-2xl">Jayesh Savaliya</h1>
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