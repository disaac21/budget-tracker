import {Home, LayoutGrid, MinusCircle, PlusCircle} from "lucide-react";

import {StatsOverviewCard} from "../components/dashboard/StatsOverviewCard";
import {TopCategoryCard} from "../components/dashboard/TopCategoryCard";
import {BigButton} from "../components/dashboard/BigButton";
import {CategoryRadialCard} from "../components/dashboard/CategoryRadialCard";
import {TransactionsTable} from "../components/dashboard/TransactionsTable";
import {
    SideIconAccordion,
    type AccordionItem,
} from "../components/dashboard/SideIconAccordion";

const AccordionItems: AccordionItem[] = [
    {
        title: "Top Spending Categories",
        icon: <LayoutGrid className="w-5 h-5" />,
        content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-2">
                <CategoryRadialCard
                    title="Housing"
                    current="$252.00"
                    limit="$4,200.00"
                    percentage={94}
                    icon={<Home className="w-6 h-6" />}
                />

                <CategoryRadialCard
                    title="Food & Dining"
                    current="$450.00"
                    limit="$600.00"
                    percentage={75}
                    icon={<Home className="w-6 h-6" />}
                />

                <CategoryRadialCard
                    title="Entertainment"
                    current="$80.00"
                    limit="$200.00"
                    percentage={20}
                    icon={<Home className="w-6 h-6" />}
                />
            </div>
        ),
    },
    {
        title: "Recent Transactions",
        icon: <LayoutGrid className="w-5 h-5" />,
        content: (
            <div className="pt-2">
                <TransactionsTable
                    transactions={[
                        {
                            id: 1,
                            date: "Oct 24, 2023 10:15 AM",
                            description: "Whole Foods Market",
                            amount: "-$184.20",
                            type: "expense",
                        },
                        {
                            id: 2,
                            date: "Oct 22, 2023 2:30 PM",
                            description: "Payroll Deposit",
                            amount: "+$6,225.00",
                            type: "income",
                        },
                        {
                            id: 3,
                            date: "Oct 20, 2023 6:45 PM",
                            description: "Spotify Subscription",
                            amount: "-$9.99",
                            type: "expense",
                        },
                        {
                            id: 4,
                            date: "Oct 18, 2023 11:00 AM",
                            description: "Amazon Purchase",
                            amount: "-$45.50",
                            type: "expense",
                        },
                        {
                            id: 5,
                            date: "Oct 15, 2023 9:00 AM",
                            description: "Freelance Project",
                            amount: "+$1,200.00",
                            type: "income",
                        },
                    ]}
                />
            </div>
        ),
    },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#faf9fa] text-[#1b1c1d]">
            <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-x-hidden">
                {/* HEADER */}
                <section className="mb-6 sm:mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-5">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                                Budget Tracker
                            </h1>

                            <p className="text-sm sm:text-base text-slate-500 mt-2">
                                All your transactions. One clear view of your
                                finances.
                            </p>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-8">
                    <div className="lg:w-2/3 flex flex-col">
                        <StatsOverviewCard
                            netFlow="+$4,282.50"
                            percentageUsed={65}
                            expenses="-$8,167.50"
                            transactions={34}
                        />
                    </div>
                    <div className="lg:w-1/3 flex flex-col">
                        <TopCategoryCard
                            title="Housing & Rent"
                            amount="$2,800.00"
                            percentageUsed={85}
                            icon={Home}
                        />
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                    <BigButton
                        title="Income"
                        icon={PlusCircle}
                        color="bg-green-600"
                        onClick={() => console.log("INCOME")}
                    />

                    <BigButton
                        title="Expense"
                        icon={MinusCircle}
                        color="bg-red-600"
                        onClick={() => console.log("EXPENSE")}
                    />
                </section>

                <section className="mt-8">
                    <SideIconAccordion items={AccordionItems} />
                </section>
            </main>
        </div>
    );
}
