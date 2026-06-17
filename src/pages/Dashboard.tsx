import {LayoutGrid, MinusCircle, PlusCircle} from "lucide-react";

import {useDashboardStats} from "../hooks/useDashboardStats";
import {useTopCategory} from "../hooks/useTopCategory";
import {useBudgetCategories} from "../hooks/useBudgetCategories";
import {useTransactions} from "../hooks/useTransactions";

import {StatsOverviewCard} from "../components/dashboard/StatsOverviewCard";
import {TopCategoryCard} from "../components/dashboard/TopCategoryCard";
import {BigButton} from "../components/dashboard/BigButton";
import {CategoryRadialCard} from "../components/dashboard/CategoryRadialCard";
import {TransactionsTable} from "../components/dashboard/TransactionsTable";
import {
    SideIconAccordion,
    type AccordionItem,
} from "../components/dashboard/SideIconAccordion";
import {useMemo} from "react";

export function Dashboard() {
    const {
        data: stats,
        loading: statsLoading,
        error: statsError,
    } = useDashboardStats();
    const {
        data: topCategory,
        loading: topLoading,
        error: topError,
    } = useTopCategory();
    const {
        data: categories,
        loading: categoriesLoading,
        error: categoriesError,
    } = useBudgetCategories();
    const {
        data: transactions,
        loading: transactionsLoading,
        error: transactionsError,
    } = useTransactions();

    const accordionItems: AccordionItem[] = useMemo(
        () => [
            {
                title: "Top Spending Categories",
                icon: <LayoutGrid className="w-5 h-5" />,
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-2">
                        {categories?.map((cat) => (
                            <CategoryRadialCard
                                key={cat.title}
                                title={cat.title}
                                current={cat.current}
                                limit={cat.limit}
                                percentage={cat.percentage}
                                icon={<cat.icon className="w-6 h-6" />}
                                loading={categoriesLoading}
                                error={categoriesError}
                            />
                        ))}
                    </div>
                ),
            },
            {
                title: "Recent Transactions",
                icon: <LayoutGrid className="w-5 h-5" />,
                content: (
                    <div className="pt-2">
                        {transactions && (
                            <TransactionsTable
                                transactions={transactions}
                                loading={transactionsLoading}
                                error={transactionsError}
                            />
                        )}
                    </div>
                ),
            },
        ],
        [
            categories,
            categoriesLoading,
            categoriesError,
            transactions,
            transactionsLoading,
            transactionsError,
        ],
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-x-hidden">
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

                <section className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-8">
                    <div className="lg:w-2/3 flex flex-col">
                        {stats && (
                            <StatsOverviewCard
                                netFlow={stats.netFlow}
                                percentageUsed={stats.percentageUsed}
                                expenses={stats.expenses}
                                transactions={stats.transactions}
                                loading={statsLoading}
                                error={statsError}
                            />
                        )}
                    </div>
                    <div className="lg:w-1/3 flex flex-col">
                        {topCategory && (
                            <TopCategoryCard
                                title={topCategory.title}
                                amount={topCategory.amount}
                                percentageUsed={topCategory.percentageUsed}
                                icon={topCategory.icon}
                                loading={topLoading}
                                error={topError}
                            />
                        )}
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                    <BigButton
                        title="Income"
                        icon={PlusCircle}
                        variant="income"
                        onClick={() => console.log("INCOME")}
                    />

                    <BigButton
                        title="Expense"
                        icon={MinusCircle}
                        variant="expense"
                        onClick={() => console.log("EXPENSE")}
                    />
                </section>

                <section className="mt-8">
                    <SideIconAccordion items={accordionItems} />
                </section>
            </main>
        </div>
    );
}
