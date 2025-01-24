'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { fetchTemplates } from './redux/templateSlice';
import TemplateCard from './components/TemplateCard';
import Loading from './components/Loading';
import ErrorHandler from './components/ErrorHandler';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchFilter';
import { HiOutlineInformationCircle } from 'react-icons/hi2';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { templates, loading, error } = useSelector((state: RootState) => state.templates);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Default');
  const templatesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  // Filter and sort templates
  const filteredTemplates = templates
    .filter((template) =>
      template.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((template) =>
      categoryFilter === 'All' || template.category?.includes(categoryFilter)
    )
    .sort((a, b) => {
      if (sortOption === 'Alphabetical') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'Date Created') {
        return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
      }
      return 0; // Default sorting
    });

  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);
  const currentTemplates = filteredTemplates.slice(
    (currentPage - 1) * templatesPerPage,
    currentPage * templatesPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 text-black/80 p-8">

      {/* Search and Filters */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Informational Banner */}
      <div className="flex items-center justify-center gap-4 bg-orange-100 text-gray-900 p-2 rounded mb-8">
        <HiOutlineInformationCircle className='text-orange-600 text-4xl md:text-3xl' />
        <p className='text-xs text-center'>
          Tada! Get started with a free template. Can't find what you are looking for? Search from the
          1000+ available templates.
        </p>
      </div>

      <div className='p-4 flex items-center justify-between'>
        {/* Templates based on Category */}
        <p className="mb-4">
          {categoryFilter} Templates
        </p>
        {/* No of Templates Found in Each Category */}
        <p className="mb-4">
          {filteredTemplates.length} Templates Found
        </p>
      </div>

      {/* Display Templates */}
      {loading && <Loading />}
      {error && <ErrorHandler message={error} />}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                name={template.name}
                description={template.description}
                category={template.category}
                dateCreated={template.dateCreated}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
