interface CategoryRadialCardProps {
    title: string;
    current: string;
    limit: string;
    percentage: number;
    icon: React.ReactNode;
}

function getCategoryColor(percentage: number) {
    if (percentage <= 25) {
        return {
            stroke: "#22c55e", // green
            text: "text-green-500",
        };
    }

    if (percentage <= 50) {
        return {
            stroke: "#f1da09", // yellow
            text: "text-yellow-500",
        };
    }

    if (percentage <= 75) {
        return {
            stroke: "#ff9d00", // orange
            text: "text-orange-500",
        };
    }

    return {
        stroke: "#ef4444", // red
        text: "text-red-500",
    };
}

export function CategoryRadialCard({
    title,
    current,
    limit,
    percentage,
    icon,
}: CategoryRadialCardProps) {
    const {stroke, text} = getCategoryColor(percentage);

    return (
        <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm transition-all flex flex-col lg:flex-col items-center gap-4">
            {/* MOBILE/MD: radial + info lado a lado, centrados */}
            <div className="flex lg:hidden w-full items-center justify-center gap-4">
                {/* RADIAL */}
                <div className="flex items-center justify-center w-40 h-40 flex-shrink-0">
                    <div className="relative w-full h-full">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#e5e7eb"
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
                            <div className="text-blue-600 text-2xl">{icon}</div>
                            <p
                                className={`text-xs uppercase tracking-[0.1em] ${text} font-bold opacity-80`}>
                                {title}
                            </p>
                            <span className="mt-1 text-lg font-bold text-slate-800">
                                {percentage}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* INFO a la derecha */}
                <div className="flex flex-col gap-3 pl-4 border-l border-slate-200">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                            Current
                        </p>
                        <p className="text-lg font-bold text-slate-800">
                            {current}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                            Limit
                        </p>
                        <p className="text-lg font-bold text-slate-800">
                            {limit}
                        </p>
                    </div>
                </div>
            </div>

            {/* DESKTOP: radial arriba */}
            <div className="hidden lg:flex items-center justify-center w-full">
                <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
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
                        <div className="text-blue-600 text-2xl">{icon}</div>
                        <p
                            className={`text-xs uppercase tracking-[0.1em] ${text} font-bold opacity-80`}>
                            {title}
                        </p>
                        <span className="mt-1 text-lg font-bold text-slate-800">
                            {percentage}%
                        </span>
                    </div>
                </div>
            </div>

            {/* DESKTOP FOOTER */}
            <div className="hidden lg:block w-full pt-4 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                            Current
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-800">
                            {current}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                            Limit
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-800">
                            {limit}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
