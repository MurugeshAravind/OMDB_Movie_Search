import { useEffect, useState } from "react";
import styled from "styled-components";
import FetchData from "../Api/FetchData";
import * as AppConstants from "../../AppConstants";
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  flex: 0.5;
`;

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchResult, loaderStatus } = props;
  const handleSearch = (e) => {
    setTimeout(() => {
      const { value } = e.target;
      setSearchValue(value);
    }, 500);
  };
  useEffect(() => {
    if (searchValue) {
      async function fetchMovieList() {
        setIsLoading(true);
        const searchData = await FetchData(
          `${AppConstants.URL}${AppConstants.API_KEY}&s=${searchValue}&type=movie`
        )
          .then((res) => res)
        if (searchData.data.Response === "True") {
          const ids = searchData.data.Search.map((o) => o.imdbID);
          const filtered = searchData.data.Search.filter(
            ({ imdbID }, index) => !ids.includes(imdbID, index + 1)
          );
          setResult(filtered);
          setIsLoading(false);
        } else {
          setResult([]);
          setIsLoading(false);
        }
      }
      fetchMovieList();
    }
  }, [searchValue]);
  useEffect(() => {
    searchResult(result);
  }, [result, searchResult]);
  useEffect(() => {
    loaderStatus(isLoading);
  }, [isLoading, loaderStatus])
  return (
    <WrapperDiv>
      <Input placeholder="Enter your movie name" onChange={handleSearch} />
    </WrapperDiv>
  );
};
export default Search;
