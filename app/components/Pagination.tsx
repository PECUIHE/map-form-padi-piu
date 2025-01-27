import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="text-black/80 flex items-center justify-between px-4 py-10">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="px-4 py-2 relative text-[14px]"
        disabled={currentPage === 1}
      >
        <FaChevronLeft className="absolute left-0 bottom-[30%] text-black/80" />
        Previous
      </button>

        {/* Page Number Buttons */}
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 border rounded-md ${
            currentPage === index + 1
              ? 'bg-green-500 text-white'
              : 'bg-white text-black/80'
          }`}
        >
          {index + 1}
        </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="px-4 py-2 relative text-[14px]"
        disabled={currentPage === totalPages}
      >
        Next
        <FaChevronRight className="absolute right-0 top-[30%] text-black/80" />
      </button>
    </div>
  );
};

export default Pagination;
