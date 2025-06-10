function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    // Genera botones de página (máximo 7 para simplicidad visual)
    const getPageNumbers = () => {
        const pages = [];
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, currentPage + 2);

        if (currentPage <= 3) end = Math.min(5, totalPages);
        if (currentPage >= totalPages - 2) start = Math.max(1, totalPages - 4);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex gap-1 justify-center my-6">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1 rounded border bg-gray-300 dark:bg-gray-800 disabled:opacity-50"
            >
                &lt;
            </button>
            {getPageNumbers().map((n) => (
                <button
                    key={n}
                    onClick={() => onPageChange(n)}
                    className={`px-3 py-1 rounded border transition-colors duration-200
      ${n === currentPage
                            ? "bg-indigo-600 text-white font-bold shadow"
                            : "bg-gray-300 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                        }`}
                >
                    {n}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-1 rounded border bg-gray-300 dark:bg-gray-800 disabled:opacity-50"
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;