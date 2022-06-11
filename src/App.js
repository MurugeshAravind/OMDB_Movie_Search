import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
function App() {
  return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </Fragment>
  );
}

export default App;
