interface IndicatorBarProps {
    value: number;
    label?: string;
    bgClassName?: string;
    fillClassName?: string;
    heightClassName?: string;
    showLabel?: boolean;
}

export function IndicatorBar({
    value,
    label,
    bgClassName,
    fillClassName,
    heightClassName,
    showLabel = true,
}: IndicatorBarProps) {
    return (
        <div className="w-full">
            {/* background */}
            <div
                className={`w-full ${heightClassName} ${bgClassName} rounded-full overflow-hidden`}>
                {/* fill */}
                <div
                    className={`h-full rounded-full transition-all duration-500 ${fillClassName}`}
                    style={{width: `${value}%`}}
                />
            </div>

            {showLabel && (
                <p className="text-xs opacity-70 mt-2">
                    {label ?? `${value}%`}
                </p>
            )}
        </div>
    );
}
