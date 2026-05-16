import {Home, MinusCircle, PlusCircle} from "lucide-react";
import {StatsOverviewCard} from "../components/dashboard/StatsOverviewCard";
import {TopCategoryCard} from "../components/dashboard/TopCategoryCard";
import {BigButton} from "../components/dashboard/BigButton";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#faf9fa] text-[#1b1c1d]">
            <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-x-hidden">
                {/* HEADER */}
                <section className="mb-6 sm:mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-5">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                                Budget Dashboard
                            </h1>

                            <p className="text-sm sm:text-base text-slate-500 mt-2">
                                Monitor your financial flow with precision and
                                transparency.
                            </p>
                        </div>
                    </div>
                </section>

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
            </main>
        </div>
    );
}
