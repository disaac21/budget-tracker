import type {LucideIcon} from "lucide-react";
import {IndicatorBar} from "../generic/IndicatorBar";

interface TopCategoryCardProps {
    title: string;
    amount: string;
    percentageUsed: number;
    icon: LucideIcon;
}

export function TopCategoryCard({
    title,
    amount,
    percentageUsed,
    icon: Icon,
}: TopCategoryCardProps) {
    return (
        <div className="w-full h-full bg-blue-600 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative z-10">
                <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
                    Top Category
                </p>

                <h2 className="text-3xl font-bold mt-2">{title}</h2>

                <p className="mt-3 opacity-90">{amount} this month</p>
            </div>

            <div className="relative z-10 mt-6">
                <IndicatorBar
                    value={percentageUsed}
                    label={`${percentageUsed}% OF BUDGET USED`}
                    bgClassName="bg-white/25"
                    fillClassName="bg-white"
                    heightClassName="h-2"
                />
            </div>

            <Icon className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10" />
        </div>
    );
}
