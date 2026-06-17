import type {ReactNode} from "react";
import {Sidebar} from "../sidebar/Sidebar";

interface AppLayoutProps {
    children: ReactNode;
}

export function AppLayout({children}: AppLayoutProps) {
    return (
        <div className="h-screen bg-background flex">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
    );
}
