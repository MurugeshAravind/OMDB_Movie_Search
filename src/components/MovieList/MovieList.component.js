import React from "react";
import { useState, useRef, useCallback } from "react";
import Navigation from "../../common/Navigation/Navigation";
import Search from "../../common/Search/Search";
import Card from "../../common/Card/Card";
import Loader from "../../common/Loader/Loader";
import useMovieSearch from "../../common/useMovieSearch";
const MovieList = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, hasMore, loading, error } = useMovieSearch(query, pageNumber);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !error) {
          setPageNumber((previousPageNumber) => previousPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, error]
  );

  const getQueryValue = (value) => {
    setQuery(value);
  };
  const getPageNumber = (value) => {
    setPageNumber(value);
  };
  return (
    <>
      <Navigation />
      <Search queryValue={getQueryValue} page={getPageNumber} />
      {loading ? <Loader /> : null}
      {movies.length > 0 ? (
        <Card letRef={lastBookElementRef} poster={movies} />
      ) : null}
    </>
  );
};
export default MovieList;
