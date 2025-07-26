interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages?: number; 
  pageSize?: number; 
}

const PaginationControls = ({
  currentPage,
  onPageChange,
  totalPages = 66,
  pageSize = 20,
}: Props) => {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-1">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-2 py-1 text-sm border rounded disabled:opacity-50"
        >
          &lt; Previous
        </button>

        {pages.map((p, i) =>
          typeof p === 'number' ? (
            <button
              key={i}
              onClick={() => onPageChange(p)}
              className={`px-3 py-1 text-sm rounded border ${
                p === currentPage
                  ? 'bg-black text-white font-bold'
                  : 'bg-white'
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={i} className="px-2 text-gray-500 text-sm">
              ...
            </span>
          )
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-2 py-1 text-sm border rounded disabled:opacity-50"
        >
          Next &gt;
        </button>
      </div>

      <div className="mt-2 text-sm text-gray-600">
        Page {currentPage} of {totalPages} ({pageSize} Pokémon shown)
      </div>
    </div>
  );
};

export default PaginationControls;
