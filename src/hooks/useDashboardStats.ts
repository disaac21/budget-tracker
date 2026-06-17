import {useMemo} from "react";

export interface DashboardStats {
    netFlow: string;
    percentageUsed: number;
    expenses: string;
    transactions: number;
}

export function useDashboardStats() {
    return useMemo(
        () => ({
            data: {
                netFlow: "+$4,282.50",
                percentageUsed: 65,
                expenses: "-$8,167.50",
                transactions: 34,
            } satisfies DashboardStats,
            loading: false as const,
            error: null as string | null,
        }),
        [],
    );
}
