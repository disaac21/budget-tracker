import {IndicatorBar} from "../generic/IndicatorBar";

interface StatsOverviewCardProps {
    netFlow: string;
    expenses: string;
    transactions: number;
    percentageUsed: number;
}

export function StatsOverviewCard({
    netFlow,
    expenses,
    transactions,
    percentageUsed,
}: StatsOverviewCardProps) {
    return (
        <div className="w-full flex-1 bg-white border border-slate-200 rounded-2xl p-4 sm:p-4 shadow-sm flex flex-col justify-between">
            {" "}
            <div className="relative z-10">
                {/* Header and Net Flow */}
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold opacity-70">
                    This Month's Balance
                </p>

                <h2 className="text-xl sm:text-3xl font-extrabold text-blue-600 mt-2 break-words">
                    {netFlow}
                </h2>

                {/* Percentage Used */}
                <div className="relative z-10 mt-6">
                    <IndicatorBar
                        value={percentageUsed}
                        label={`${percentageUsed}% OF BUDGET USED`}
                        bgClassName="bg-blue-600/25"
                        fillClassName="bg-blue-600"
                        heightClassName="h-4"
                    />
                </div>
            </div>
            <div className="relative z-10 mt-2">
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200">
                    <div>
                        <p className="text-xs text-slate-400 uppercase font-semibold opacity-70">
                            Total Expenses
                        </p>
                        <p className="font-bold text-red-500 mt-0">
                            {expenses}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400 uppercase font-semibold opacity-70">
                            Transactions
                        </p>
                        <p className="font-bold text-blue-600 mt-0">
                            {transactions}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
