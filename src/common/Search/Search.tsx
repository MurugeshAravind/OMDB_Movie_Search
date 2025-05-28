import { useState } from 'react';

type SearchProps = {
  queryValue: (value: string) => void;
  page: (value: number) => void;
};

const Search = (props: SearchProps) => {
  const { queryValue, page } = props;
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (value && value.length > 0) {
      setSearchValue(value);
      queryValue(value);
      page(1);
    } else {
      setSearchValue('');
      queryValue('');
      page(1);
    }
  };
  return (
    <div className="grid justify-center items-center">
      <input
        type="search"
        placeholder="Enter your movie name"
        onChange={handleSearch}
        value={searchValue}
        data-testid="search-input"
        className="border-2 border-pink-300 m-4 p-4 rounded focus:outline-none focus:border-pink-500 transition"
      />
    </div>
  );
};
export default Search;
