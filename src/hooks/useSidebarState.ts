import {useEffect, useState} from "react";

export function useSidebarState() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("sidebar");
        if (saved) setIsCollapsed(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebar", JSON.stringify(isCollapsed));
    }, [isCollapsed]);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {isCollapsed, setIsCollapsed, isOpen, setIsOpen};
}
