import {useMemo, useState} from "react";
import {CreditCard} from "lucide-react";

interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: string;
    type: "income" | "expense";
}

interface TransactionsTableProps {
    transactions: Transaction[];
    loading?: boolean;
    error?: string | null;
}

const ROWS_PER_PAGE = 5;

export function TransactionsTable({transactions, loading = false, error}: TransactionsTableProps) {
    const [page, setPage] = useState(1);

    const totalPages = Math.max(1, Math.ceil(transactions.length / ROWS_PER_PAGE));
    const currentPage = Math.min(page, totalPages);

    const paginated = useMemo(() => {
        const start = (currentPage - 1) * ROWS_PER_PAGE;
        return transactions.slice(start, start + ROWS_PER_PAGE);
    }, [currentPage, transactions]);

    return (
        <section className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h3 className="text-lg font-bold text-foreground">
                        Transactions Overview
                    </h3>
                    <p className="text-sm text-muted">
                        A quick glance at your recent financial activity.
                    </p>
                </div>

                <button className="text-sm font-semibold text-primary hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded">
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                {error ? (
                    <div className="p-12 text-center">
                        <p className="text-danger font-semibold">Failed to load transactions</p>
                        <p className="text-sm text-muted mt-1">{error}</p>
                    </div>
                ) : loading ? (
                    <div className="p-6 space-y-4">
                        {Array.from({length: 4}).map((_, i) => (
                            <div key={i} className="flex items-center gap-3 animate-pulse">
                                <div className="w-9 h-9 rounded-full bg-slate-200" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 bg-slate-200 rounded w-1/3" />
                                    <div className="h-3 bg-slate-200 rounded w-2/3" />
                                </div>
                                <div className="h-3 bg-slate-200 rounded w-16" />
                            </div>
                        ))}
                    </div>
                ) : transactions.length === 0 ? (
                    <div className="p-12 text-center">
                        <CreditCard className="w-12 h-12 text-muted mx-auto mb-3" />
                        <p className="text-foreground font-semibold">No transactions yet</p>
                        <p className="text-sm text-muted mt-1">
                            Your recent transactions will appear here.
                        </p>
                    </div>
                ) : (
                    <table className="w-full min-w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="px-3 sm:px-6 py-4 text-left text-xs uppercase tracking-wider text-muted font-bold w-[120px] sm:w-[160px]">
                                    Date
                                </th>

                                <th className="px-3 sm:px-6 py-4 text-left text-xs uppercase tracking-wider text-muted font-bold">
                                    Description
                                </th>

                                <th className="px-3 sm:px-6 py-4 text-right text-xs uppercase tracking-wider text-muted font-bold w-[120px] sm:w-[160px]">
                                    Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginated.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="border-t border-border hover:bg-slate-50 transition-colors">
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-secondary">
                                        <span className="block truncate">
                                            {transaction.date}
                                        </span>
                                    </td>

                                    <td className="px-3 sm:px-6 py-4">
                                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-muted" />
                                            </div>

                                            <span className="text-xs sm:text-sm font-semibold text-foreground truncate">
                                                {transaction.description}
                                            </span>
                                        </div>
                                    </td>

                                    <td
                                        className={`px-3 sm:px-6 py-4 text-right text-xs sm:text-sm font-bold whitespace-nowrap ${
                                            transaction.type === "income"
                                                ? "text-success"
                                                : "text-danger"
                                        }`}>
                                        {transaction.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {!loading && !error && transactions.length > 0 && (
                <div className="p-4 border-t border-border bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-sm text-muted">
                        Showing {paginated.length} of {transactions.length} latest
                        transactions
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                            className="px-3 py-2 rounded-lg border border-border bg-card text-sm font-medium text-secondary hover:bg-slate-100 transition disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            Previous
                        </button>

                        <button
                            aria-label={`Page ${currentPage}`}
                            className="w-9 h-9 rounded-lg bg-primary text-white text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            {currentPage}
                        </button>

                        <button
                            onClick={() =>
                                setPage((p) => Math.min(p + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                            aria-label="Next page"
                            className="px-3 py-2 rounded-lg border border-border bg-card text-sm font-medium text-secondary hover:bg-slate-100 transition disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            Next
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
