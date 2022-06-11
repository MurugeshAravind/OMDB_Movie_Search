import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
function App() {
  return (
      <Fragment>
        <Routes>
          <Route exact path="/OMDB_Movie_Search" element={<MovieList />} />\
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </Fragment>
  );
}

export default App;
