import type {ReactNode} from "react";

interface CategoryRadialCardProps {
    title: string;
    current: string;
    limit: string;
    percentage: number;
    icon: ReactNode;
    loading?: boolean;
    error?: string | null;
}

function getCategoryColor(percentage: number) {
    if (percentage <= 25) {
        return {
            stroke: "var(--color-success)",
            text: "text-success",
        };
    }

    if (percentage <= 50) {
        return {
            stroke: "var(--color-warning)",
            text: "text-warning",
        };
    }

    if (percentage <= 75) {
        return {
            stroke: "#ff9d00",
            text: "text-orange-500",
        };
    }

    return {
        stroke: "var(--color-danger)",
        text: "text-danger",
    };
}

function SkeletonCircle() {
    return (
        <div className="flex items-center gap-4 animate-pulse">
            <div className="w-40 h-40 rounded-full bg-slate-200 flex-shrink-0" />
            <div className="space-y-2 flex-1 hidden lg:block">
                <div className="h-3 bg-slate-200 rounded w-16" />
                <div className="h-3 bg-slate-200 rounded w-12" />
            </div>
        </div>
    );
}

export function CategoryRadialCard({
    title,
    current,
    limit,
    percentage,
    icon,
    loading = false,
    error,
}: CategoryRadialCardProps) {
    if (error) {
        return (
            <div className="w-full bg-card border border-border rounded-2xl p-4 shadow-sm flex items-center justify-center min-h-[160px]">
                <p className="text-sm text-danger">{error}</p>
            </div>
        );
    }

    if (loading) {
        return <SkeletonCircle />;
    }

    const {stroke, text} = getCategoryColor(percentage);

    return (
        <div className="w-full bg-card border border-border rounded-2xl p-4 shadow-sm">
            <div className="flex lg:flex-col items-center gap-4">
                <div className="relative w-40 h-40 flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="var(--color-border)"
                            strokeWidth="2.5"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={stroke}
                            strokeDasharray={`${percentage}, 100`}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                        <div className="text-primary text-2xl">{icon}</div>
                        <p
                            className={`text-xs uppercase tracking-[0.1em] ${text} font-bold opacity-80`}>
                            {title}
                        </p>
                        <span className="mt-3 text-lg font-bold text-foreground">
                            {percentage}%
                        </span>
                    </div>
                </div>

                <div className="flex lg:hidden gap-3 pl-4 border-l border-border">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted font-bold">
                            Current
                        </p>
                        <p className="text-lg font-bold text-foreground">
                            {current}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted font-bold">
                            Limit
                        </p>
                        <p className="text-lg font-bold text-foreground">
                            {limit}
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6 pt-4 mt-4 border-t border-border">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">
                        Current
                    </p>
                    <p className="mt-2 text-lg font-bold text-foreground">
                        {current}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">
                        Limit
                    </p>
                    <p className="mt-2 text-lg font-bold text-foreground">
                        {limit}
                    </p>
                </div>
            </div>
        </div>
    );
}
