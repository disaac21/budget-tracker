import type {LucideIcon} from "lucide-react";

interface BigButtonProps {
    icon: LucideIcon;
    title: string;
    color?: string;
    onClick?: () => void;
}

export function BigButton({
    icon: Icon,
    title,
    color = "bg-blue-600",
    onClick,
}: BigButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                w-full h-15 sm:h-20 text-center
                ${color}
                text-white
                rounded-2xl p-4 sm:p-4
                relative overflow-hidden shadow-xl
                flex items-center justify-center
                transition-all duration-200
                hover:scale-[1.01] hover:shadow-2xl
                active:scale-[0.99]
                focus:outline-none focus:ring-2 focus:ring-white/40
            `}>
            <div className="relative z-10 text-center">
                <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
                    {title}
                </p>
            </div>

            <Icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 opacity-10" />
        </button>
    );
}
