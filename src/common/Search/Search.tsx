import React, {useState} from "react";
import styled from "styled-components";
const WrapperDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input.attrs((props) => ({
  type: "search",
  size: props.size || "1rem",
  value: props.value || "",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Search = (props: { queryValue: any; page: any; }) => {
  const {queryValue, page} = props
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: { target: { value: string; }; }) => {
    if (e.target.value) {
      setSearchValue(e.target.value)
      queryValue(e.target.value)
      page(1)
    } else {
      setSearchValue("")
      queryValue("")
    }  
  };
  return (
    <WrapperDiv data-testid="search">
      <Input
        placeholder="Enter your movie name"
        onChange={(e: any) => handleSearch(e)}
        value={searchValue}
      />
    </WrapperDiv>
  );
};
export default Search;
