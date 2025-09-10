// pages/search/index.tsx
import SearchBar from "@/components/SearchBar";
import JobList from "@/components/jobs/JobListing";

const SearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-b from-blue-500 to-purple-700 px-4 md:px-8">
      <SearchBar />
    </div>
  );
};

export default SearchPage;

