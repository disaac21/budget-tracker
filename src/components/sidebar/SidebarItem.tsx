import {NavLink} from "react-router-dom";
import type {NavigationItem} from "./navigation";

interface SidebarItemProps {
    item: NavigationItem;
    collapsed: boolean;
    onNavigate: () => void;
}

export function SidebarItem({item, collapsed, onNavigate}: SidebarItemProps) {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.href}
            onClick={onNavigate}
            className={({isActive}) =>
                `flex items-center gap-3 p-2 rounded-md transition
        ${isActive ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-100"}
        ${collapsed ? "justify-center" : ""}`
            }>
            <Icon className="w-4 h-4" />

            {!collapsed && (
                <div className="flex justify-between w-full">
                    <span className="text-sm">{item.name}</span>
                    {item.badge && (
                        <span className="text-xs bg-slate-200 px-2 rounded-full">
                            {item.badge}
                        </span>
                    )}
                </div>
            )}
        </NavLink>
    );
}
