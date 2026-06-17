import {useMemo} from "react";
import {Film, Home, UtensilsCrossed} from "lucide-react";
import type {LucideIcon} from "lucide-react";

export interface BudgetCategory {
    title: string;
    current: string;
    limit: string;
    percentage: number;
    icon: LucideIcon;
}

export function useBudgetCategories() {
    return useMemo(
        () => ({
            data: [
                {
                    title: "Housing",
                    current: "$252.00",
                    limit: "$4,200.00",
                    percentage: 94,
                    icon: Home,
                },
                {
                    title: "Food & Dining",
                    current: "$450.00",
                    limit: "$600.00",
                    percentage: 75,
                    icon: UtensilsCrossed,
                },
                {
                    title: "Entertainment",
                    current: "$80.00",
                    limit: "$200.00",
                    percentage: 20,
                    icon: Film,
                },
            ] satisfies BudgetCategory[],
            loading: false as const,
            error: null as string | null,
        }),
        [],
    );
}
