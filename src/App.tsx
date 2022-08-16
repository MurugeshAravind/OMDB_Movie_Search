import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList.component";
import MovieDetails from "./components/MovieDetails/MovieDetails.component";
import PageNotFound from "./common/PageNotFound/PageNotFound";
export const App = () => {
  return (
    <div data-testid="app">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/OMDB_Movie_Search" element={<MovieList />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

