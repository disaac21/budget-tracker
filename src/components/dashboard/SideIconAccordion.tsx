import {ChevronDown} from "lucide-react";
import type {ReactNode} from "react";
import {useId, useState} from "react";

export interface AccordionItem {
    title: string;
    icon: ReactNode;
    content: ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export function SideIconAccordion({items}: AccordionProps) {
    const uid = useId();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const contentId = `accordion-${uid}-content-${index}`;
                const triggerId = `accordion-${uid}-trigger-${index}`;

                return (
                    <div key={index} className="border-b border-border">
                        <button
                            id={triggerId}
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                            aria-controls={contentId}
                            className="flex items-center justify-between w-full py-4 px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                            <div className="flex items-center gap-3">
                                <span className="size-5 text-muted flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-medium text-foreground">
                                    {item.title}
                                </span>
                            </div>
                            <ChevronDown
                                className={`size-4 text-muted transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        <div
                            id={contentId}
                            role="region"
                            aria-labelledby={triggerId}
                            className={`grid transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div className="overflow-hidden">
                                <div className="py-3 text-sm text-muted">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
