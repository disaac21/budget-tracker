import {useMemo} from "react";
import {Home} from "lucide-react";
import type {LucideIcon} from "lucide-react";

export interface TopCategory {
    title: string;
    amount: string;
    percentageUsed: number;
    icon: LucideIcon;
}

export function useTopCategory() {
    return useMemo(
        () => ({
            data: {
                title: "Housing & Rent",
                amount: "$2,800.00",
                percentageUsed: 85,
                icon: Home,
            } satisfies TopCategory,
            loading: false as const,
            error: null as string | null,
        }),
        [],
    );
}
