import React, {useState} from "react";
import styled from "styled-components";
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
  value: props.value || "",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  flex: 0.5;
`;

const Search = (props) => {
  const {queryValue, page} = props
  const [searchValue, setSearchValue] = useState("");
  const [pageValue, setPageValue] = useState("");
  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchValue(e.target.value)
    } else {
      setSearchValue("")
    }
  };
  searchValue && queryValue(searchValue)
  pageValue && page(pageValue)
  return (
    <WrapperDiv data-testid="search">
      <Input
        placeholder="Enter your movie name"
        onChange={(e) => handleSearch(e)}
        value={searchValue}
      />
    </WrapperDiv>
  );
};
export default Search;
