import { AppSidebar } from "@/components/navigation/sidebar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {

    return (
        <>
            <AppSidebar />
            <main className="bg-bg-default p-2 w-full">
                {children}
            </main>
        </>
    );
}