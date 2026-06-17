type IndicatorColor = "blue" | "white";
type IndicatorSize = "sm" | "md" | "lg";

interface IndicatorBarProps {
    value: number;
    label?: string;
    showLabel?: boolean;
    color?: IndicatorColor;
    size?: IndicatorSize;
}

const colorMap: Record<IndicatorColor, {bg: string; fill: string}> = {
    blue: {bg: "bg-primary/25", fill: "bg-primary"},
    white: {bg: "bg-card/25", fill: "bg-card"},
};

const sizeMap: Record<IndicatorSize, string> = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
};

export function IndicatorBar({
    value,
    label,
    showLabel = true,
    color = "blue",
    size = "md",
}: IndicatorBarProps) {
    const {bg: bgClass, fill: fillClass} = colorMap[color];
    const heightClass = sizeMap[size];

    return (
        <div className="w-full">
            <div
                className={`w-full ${heightClass} ${bgClass} rounded-full overflow-hidden`}>
                <div
                    className={`h-full rounded-full transition-all duration-500 ${fillClass}`}
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
