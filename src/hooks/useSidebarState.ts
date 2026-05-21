import {useEffect, useState} from "react";

export function useSidebarState() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("sidebar-collapsed");
        if (saved) setIsCollapsed(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
    }, [isCollapsed]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen};
}
