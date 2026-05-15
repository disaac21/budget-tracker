interface IndicatorBarProps {
    value: number;
    label?: string;
    colorClassName?: string;
    heightClassName?: string;
    showLabel?: boolean;
}

export function IndicatorBar({
    value,
    label,
    colorClassName,
    heightClassName,
    showLabel = true,
}: IndicatorBarProps) {
    return (
        <div className="w-full">
            <div
                className={`w-full ${heightClassName} ${colorClassName}/20 rounded-full overflow-hidden`}>
                <div
                    className={`h-full rounded-full transition-all duration-500 ${colorClassName}`}
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
