import {IndicatorBar} from "../generic/IndicatorBar";

interface StatsOverviewCardProps {
    netFlow: string;
    expenses: string;
    transactions: number;
    percentageUsed: number;
    loading?: boolean;
    error?: string | null;
}

export function StatsOverviewCard({
    netFlow,
    expenses,
    transactions,
    percentageUsed,
    loading = false,
    error,
}: StatsOverviewCardProps) {
    if (error) {
        return (
            <div className="w-full flex-1 bg-card border border-border rounded-2xl p-4 shadow-sm flex items-center justify-center">
                <div className="text-center">
                    <p className="text-sm font-semibold text-danger">Failed to load stats</p>
                    <p className="text-xs text-muted mt-1">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex-1 bg-card border border-border rounded-2xl p-4 sm:p-4 shadow-sm flex flex-col justify-between">
            <div className="relative z-10">
                <p className="text-xs uppercase tracking-wider text-muted font-semibold opacity-70">
                    This Month's Balance
                </p>

                {loading ? (
                    <div className="mt-2 space-y-3 animate-pulse">
                        <div className="h-8 bg-slate-200 rounded w-1/2" />
                        <div className="h-4 bg-slate-200 rounded w-full" />
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl sm:text-3xl font-extrabold text-primary mt-2">
                            {netFlow}
                        </h2>

                        <div
                            className="relative z-10 mt-6"
                            role="progressbar"
                            aria-valuenow={percentageUsed}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${percentageUsed}% of budget used`}>
                            <IndicatorBar
                                value={percentageUsed}
                                label={`${percentageUsed}% OF BUDGET USED`}
                                color="blue"
                                size="lg"
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="relative z-10 mt-2">
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                    {loading ? (
                        <div className="col-span-2 flex justify-between animate-pulse">
                            <div className="space-y-2">
                                <div className="h-3 bg-slate-200 rounded w-20" />
                                <div className="h-5 bg-slate-200 rounded w-16" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 bg-slate-200 rounded w-20" />
                                <div className="h-5 bg-slate-200 rounded w-12" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div>
                                <p className="text-xs text-muted uppercase font-semibold opacity-70">
                                    Total Expenses
                                </p>
                                <p className="font-bold text-danger mt-0">
                                    {expenses}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted uppercase font-semibold opacity-70">
                                    Transactions
                                </p>
                                <p className="font-bold text-primary mt-0">
                                    {transactions}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
