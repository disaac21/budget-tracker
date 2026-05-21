import {useMemo, useState} from "react";

interface Transaction {
    id: number;
    date: string;
    description: string;
    // category: string;
    // account: string;
    // mandatory: boolean;
    amount: string;
    type: "income" | "expense";
}

interface TransactionsTableProps {
    transactions: Transaction[];
}

const ROWS_PER_PAGE = 5;

export function TransactionsTable({transactions}: TransactionsTableProps) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(transactions.length / ROWS_PER_PAGE);

    const paginated = useMemo(() => {
        const start = (page - 1) * ROWS_PER_PAGE;
        return transactions.slice(start, start + ROWS_PER_PAGE);
    }, [page, transactions]);

    return (
        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* HEADER (unchanged) */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        Transactions Overview
                    </h3>
                    <p className="text-sm text-slate-500">
                        A quick glance at your recent financial activity.
                    </p>
                </div>

                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
                    View All
                </button>
            </div>

            {/* TABLE (ONLY CHANGE: map paginated instead of transactions) */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="px-3 sm:px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 font-bold w-[120px] sm:w-[160px]">
                                Date
                            </th>

                            <th className="px-3 sm:px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 font-bold">
                                Description
                            </th>

                            <th className="px-3 sm:px-6 py-4 text-right text-xs uppercase tracking-wider text-slate-400 font-bold w-[120px] sm:w-[160px]">
                                Amount
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginated.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-slate-700">
                                    <span className="block truncate">
                                        {transaction.date}
                                    </span>
                                </td>

                                <td className="px-3 sm:px-6 py-4">
                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                        <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                            <span className="text-xs sm:text-sm">
                                                💳
                                            </span>
                                        </div>

                                        <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                                            {transaction.description}
                                        </span>
                                    </div>
                                </td>

                                <td
                                    className={`px-3 sm:px-6 py-4 text-right text-xs sm:text-sm font-bold whitespace-nowrap ${
                                        transaction.type === "income"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}>
                                    {transaction.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* FOOTER (ONLY LOGIC ADDED) */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-slate-500">
                    Showing {paginated.length} of {transactions.length} latest
                    transactions
                </p>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-100 transition disabled:opacity-50">
                        Previous
                    </button>

                    <button className="w-9 h-9 rounded-lg bg-blue-600 text-white text-sm font-bold">
                        {page}
                    </button>

                    <button
                        onClick={() =>
                            setPage((p) => Math.min(p + 1, totalPages))
                        }
                        disabled={page === totalPages}
                        className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-100 transition disabled:opacity-50">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
