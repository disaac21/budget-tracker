import {Menu, ChevronLeft, ChevronRight, LogOut} from "lucide-react";
import {navigationItems} from "./navigation";
import {SidebarItem} from "./SidebarItem";
import {useSidebarState} from "../../hooks/useSidebarState";

export function Sidebar() {
    const {isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen} =
        useSidebarState();

    const showLabels = isMobileOpen || !isCollapsed;

    return (
        <>
            {/* Mobile button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className={`fixed bottom-5 left-5 z-50 md:hidden p-2.5 rounded-lg bg-card shadow-md border border-border hover:bg-slate-50 transition ${
                    isMobileOpen ? "opacity-0 pointer-events-none" : ""
                }`}>
                <Menu className="w-5 h-5 text-slate-700" />
            </button>

            {/* Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden z-30"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 z-40
                    h-[100dvh] flex flex-col
                    bg-card border-r border-border shadow-sm
                    transition-all duration-300 ease-in-out overflow-x-hidden
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                    w-50 ${!isMobileOpen && isCollapsed ? "md:w-25" : "md:w-50"}`}>
                {/* HEADER */}
                <div className="p-4 flex items-center justify-between border-b border-border bg-slate-50/60">
                    {showLabels ? (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <span className="font-semibold text-foreground">
                                Acme
                            </span>
                        </div>
                    ) : (
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold mx-auto" />
                    )}

                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex p-1.5 rounded-md hover:bg-slate-100 transition">
                        {isCollapsed ? (
                            <ChevronRight className="w-4 h-4 text-slate-600" />
                        ) : (
                            <ChevronLeft className="w-4 h-4 text-slate-600" />
                        )}
                    </button>
                </div>

                {/* NAV */}
                <nav className="flex-1 overflow-y-auto p-3 space-y-1">
                    {navigationItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            item={item}
                            collapsed={!showLabels}
                            onNavigate={() => setIsMobileOpen(false)}
                        />
                    ))}
                </nav>

                {/* FOOTER */}
                <div className="border-t border-border bg-slate-50/40 p-3">
                    <button
                        className={`flex items-center w-full text-danger hover:bg-red-50 hover:text-red-700 transition rounded-md p-2
                            ${!showLabels ? "justify-center" : "gap-3"}`}>
                        <LogOut className="w-4 h-4" />
                        {showLabels && (
                            <span className="text-sm font-medium">Logout</span>
                        )}
                    </button>
                </div>
            </aside>
        </>
    );
}
