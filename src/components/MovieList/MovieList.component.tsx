import React from "react";
import { useState, useRef, useCallback } from "react";
import Navigation from "../../common/Navigation/Navigation";
import Search from "../../common/Search/Search";
import Card from "../../common/Card/Card";
import Loader from "../../common/Loader/Loader";
import useMovieSearch from "../../common/useMovieSearch";
const MovieList = () => {
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { movies, hasMore, loading, error } = useMovieSearch(query, pageNumber);
  const observer = useRef<any>();
  const lastBookElementRef = useCallback(
    (node: any) => {
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

  const getQueryValue = (value: string) => {
    setQuery(value);
  };
  const getPageNumber = (value: number) => {
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
