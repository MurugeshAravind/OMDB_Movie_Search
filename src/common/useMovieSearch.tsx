import { useEffect, useState } from "react";
import axios from "axios";
import * as AppConstants from "../AppConstants";

export default function useMovieSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setMovies([])
    setLoading(false)
  }, [query])
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({
      method: "GET",
      url: `${AppConstants.URL}${AppConstants.API_KEY}&s=${query}&type=movie`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovies(res.data.Search.filter((data: object, index: number) => res.data.Search.indexOf(data) === index));
        setHasMore(res.data.totalResults.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setLoading(false)
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return {
    loading,
    error,
    movies,
    hasMore,
  };
}
