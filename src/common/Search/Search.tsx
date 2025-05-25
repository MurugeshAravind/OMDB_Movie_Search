import { useState } from 'react';
import styled from 'styled-components';
const WrapperDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input.attrs((props) => ({
  type: 'search',
  size: '1rem',
  value: props.value || '',
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

type SearchProps = {
  queryValue: (value: string) => void;
  page: (value: number) => void;
};

const Search = (props: SearchProps) => {
  const { queryValue, page } = props;
  console.log({ queryValue, page });
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
    <WrapperDiv>
      <Input
        placeholder="Enter your movie name"
        onChange={(e: any) => handleSearch(e)}
        value={searchValue}
        data-testid="search-input"
      />
    </WrapperDiv>
  );
};
export default Search;
