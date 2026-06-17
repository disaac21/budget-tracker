import {useMemo} from "react";

export interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: string;
    type: "income" | "expense";
}

export function useTransactions() {
    return useMemo(
        () => ({
            data: [
                {
                    id: 1,
                    date: "Oct 24, 2023 10:15 AM",
                    description: "Whole Foods Market",
                    amount: "-$184.20",
                    type: "expense" as const,
                },
                {
                    id: 2,
                    date: "Oct 22, 2023 2:30 PM",
                    description: "Payroll Deposit",
                    amount: "+$6,225.00",
                    type: "income" as const,
                },
                {
                    id: 3,
                    date: "Oct 20, 2023 6:45 PM",
                    description: "Spotify Subscription",
                    amount: "-$9.99",
                    type: "expense" as const,
                },
                {
                    id: 4,
                    date: "Oct 18, 2023 11:00 AM",
                    description: "Amazon Purchase",
                    amount: "-$45.50",
                    type: "expense" as const,
                },
                {
                    id: 5,
                    date: "Oct 15, 2023 9:00 AM",
                    description: "Freelance Project",
                    amount: "+$1,200.00",
                    type: "income" as const,
                },
            ],
            loading: false as const,
            error: null as string | null,
        }),
        [],
    );
}
