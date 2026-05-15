import {Menu, X, ChevronLeft, ChevronRight, LogOut} from "lucide-react";
import {navigationItems} from "./navigation";
import {SidebarItem} from "./SidebarItem";
import {useSidebarState} from "../../hooks/useSidebarState";

export function Sidebar() {
    const {isCollapsed, setIsCollapsed, isOpen, setIsOpen} = useSidebarState();

    return (
        <>
            {/* Mobile button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-5 left-5 z-50 md:hidden p-2.5 rounded-lg bg-white shadow-md border border-slate-200 hover:bg-slate-50 transition">
                {isOpen ? (
                    <X className="w-5 h-5 text-slate-700" />
                ) : (
                    <Menu className="w-5 h-5 text-slate-700" />
                )}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 z-40
        h-screen flex flex-col
        bg-white border-r border-slate-200 shadow-sm
        transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isCollapsed ? "w-25" : "w-50"}`}>
                {/* HEADER */}
                <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
                    {!isCollapsed ? (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <span className="font-semibold text-slate-800">
                                Acme
                            </span>
                        </div>
                    ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mx-auto" />
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

                {/* NAV (THIS is the key fix) */}
                <nav className="flex-1 overflow-y-auto p-3 space-y-1">
                    {navigationItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            item={item}
                            collapsed={isCollapsed}
                            onNavigate={() => setIsOpen(false)}
                        />
                    ))}
                </nav>

                {/* FOOTER (NOW STICKS PROPERLY) */}
                <div className="border-t border-slate-100 bg-slate-50/40 p-3">
                    <button
                        className={`flex items-center w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition rounded-md p-2
              ${isCollapsed ? "justify-center" : "gap-3"}`}>
                        <LogOut className="w-4 h-4" />
                        {!isCollapsed && (
                            <span className="text-sm font-medium">Logout</span>
                        )}
                    </button>
                </div>
            </aside>
        </>
    );
}
