import {
    Home,
    BarChart3,
    FileText,
    Bell,
    User,
    Settings,
    HelpCircle,
    LogOut,
} from "lucide-react";

export const navigationItems = [
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

export const logoutItem = {
    id: "logout",
    name: "Logout",
    icon: LogOut,
};
