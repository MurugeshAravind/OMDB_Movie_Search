import React from "react";
import { useRoutes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  const RouteWrapper = () => {
    const routes = useRoutes([
      { path: "/", element: <MovieList /> },
      { path: "/OMDB_Movie_Search", element: <MovieList /> },
      { path: "/:id", element: <MovieDetails /> },
      { path: "*", element: <PageNotFound /> },
    ]);
    return routes;
  };
  return <RouteWrapper />;
}

export default App;
