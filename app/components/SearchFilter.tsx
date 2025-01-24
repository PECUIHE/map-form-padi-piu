import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
  }

const SearchFilter: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  sortOption,
  setSortOption,
}) => {

  return (
    <div className="py-8 flex flex-col md:flex-row gap-4 mb-6">
      <div className='relative w-full'>
        <input
          type="text"
          placeholder="Search Templates"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-4 border outline-none rounded-md flex-1 text-black/80 placeholder:text-[14px]"
        />
        <FaSearch className='absolute right-5 top-[30%] text-gray-500' />
      </div>

      <div className='w-full flex items-center justify-between gap-5'>
        <span className='font-medium'>Category: </span>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="block w-full p-2 border outline-none rounded-md"
        >
          <option className='hover:bg-gray-500' value="All">Default</option>
          <option className='hover:bg-gray-500' value="E-commerce">E-commerce</option>
          <option className='hover:bg-gray-500' value="Education">Education</option>
          <option className='hover:bg-gray-500' value="Health">Health</option>
          {/* Add more categories as needed */}
        </select>

        <span className='font-medium'>Sort By: </span>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="block w-full p-2 border outline-none rounded-md"
        >
          <option className='hover:bg-gray-500' value="Default">Default</option>
          <option className='hover:bg-gray-500' value="Alphabetical">Alphabetical</option>
          <option className='hover:bg-gray-500' value="Date Created">Date Created</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
