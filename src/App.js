import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  return (
      <Fragment>
        <Routes>
          <Route path="/" element={<PageNotFound />} />
          <Route exact path="/OMDB_Movie_Search" element={<MovieList />} />
          <Route exact path="/OMDB_Movie_Search/:id" element={<MovieDetails />} />
        </Routes>
      </Fragment>
  );
}

export default App;
