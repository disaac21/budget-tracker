import type {LucideIcon} from "lucide-react";
import {
    Home,
    BarChart3,
    FileText,
    Bell,
    User,
    Settings,
    HelpCircle,
} from "lucide-react";

export interface NavigationItem {
    id: string;
    name: string;
    icon: LucideIcon;
    href: string;
    badge?: string;
}

export const navigationItems: NavigationItem[] = [
    {id: "dashboard", name: "Dashboard", icon: Home, href: "/"},
    {id: "analytics", name: "Analytics", icon: BarChart3, href: "/analytics"},
    {
        id: "documents",
        name: "Documents",
        icon: FileText,
        href: "/documents",
        badge: "3",
    },
    {
        id: "notifications",
        name: "Notifications",
        icon: Bell,
        href: "/notifications",
        badge: "12",
    },
    {id: "profile", name: "Profile", icon: User, href: "/profile"},
    {id: "settings", name: "Settings", icon: Settings, href: "/settings"},
    {id: "help", name: "Help", icon: HelpCircle, href: "/help"},
];
