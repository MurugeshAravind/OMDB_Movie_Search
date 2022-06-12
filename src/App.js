import React from "react";
import { useRoutes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList.component";
import MovieDetails from "./components/MovieDetails/MovieDetails.component";
import PageNotFound from "./common/PageNotFound/PageNotFound";
function App() {
  return useRoutes([
    { path: "/", element: <MovieList /> },
    { path: "/OMDB_Movie_Search", element: <MovieList /> },
    { path: "/:id", element: <MovieDetails /> },
    { path: "*", element: <PageNotFound /> },
  ]);
}

export default App;
