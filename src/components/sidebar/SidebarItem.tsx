import {NavLink} from "react-router-dom";

export function SidebarItem({item, collapsed, onNavigate}: any) {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.href}
            onClick={onNavigate}
            className={({isActive}) =>
                `flex items-center gap-3 p-2 rounded-md transition
        ${isActive ? "bg-blue-100 text-blue-700" : "text-slate-600 hover:bg-slate-100"}
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
