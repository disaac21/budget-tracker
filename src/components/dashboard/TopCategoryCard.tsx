import type {LucideIcon} from "lucide-react";
import {IndicatorBar} from "../generic/IndicatorBar";

interface TopCategoryCardProps {
    title: string;
    amount: string;
    percentageUsed: number;
    icon: LucideIcon;
    loading?: boolean;
}

export function TopCategoryCard({
    title,
    amount,
    percentageUsed,
    icon: Icon,
    loading = false,
}: TopCategoryCardProps) {
    return (
        <div className="w-full h-full bg-primary rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative z-10">
                <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
                    Top Category
                </p>

                {loading ? (
                    <div className="mt-2 space-y-3 animate-pulse">
                        <div className="h-6 bg-white/20 rounded w-3/4" />
                        <div className="h-4 bg-white/20 rounded w-1/2" />
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold mt-2">{title}</h2>
                        <p className="mt-3 opacity-90">{amount} this month</p>
                    </>
                )}
            </div>

            <div className="relative z-10 mt-6">
                {loading ? (
                    <div className="h-2 bg-white/20 rounded-full animate-pulse" />
                ) : (
                    <IndicatorBar
                        value={percentageUsed}
                        label={`${percentageUsed}% OF BUDGET USED`}
                        color="white"
                        size="sm"
                    />
                )}
            </div>

            {!loading && <Icon className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10" />}
        </div>
    );
}
