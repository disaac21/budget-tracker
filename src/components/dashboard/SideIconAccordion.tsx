import {ChevronDown} from "@gravity-ui/icons";
import type {ReactNode} from "react";
import {useState} from "react";

export interface AccordionItem {
    title: string;
    icon: ReactNode;
    content: ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export function SideIconAccordion({items}: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={index} className="border-b border-slate-200">
                        <button
                            onClick={() => toggle(index)}
                            className="flex items-center justify-between w-full py-4 px-0">
                            <div className="flex items-center gap-3">
                                <span className="size-5 text-slate-500 flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-medium text-slate-800">
                                    {item.title}
                                </span>
                            </div>
                            <ChevronDown
                                className={`size-4 text-slate-500 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div className="overflow-hidden">
                                <div className="py-3 text-sm text-slate-500">
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
