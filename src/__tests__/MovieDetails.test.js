import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails.component";
const history = createMemoryHistory();

const MovieDetailsComponentInstance = () => {
  return <Router location={history.location} navigator={history}>
    <MovieDetails data-testid="details" />
  </Router>
}

describe("movie details test cases", () => {
  test("test the movie details app", () => {
    render(MovieDetailsComponentInstance);
    expect(MovieDetailsComponentInstance).toBeTruthy();
    const dummyData = {
      Title: "Beta Test",
      Year: "2016",
      Rated: "Not Rated",
      Released: "22 Jul 2016",
      Runtime: "88 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Nicholas Gyeney",
      Writer: "Nicholas Gyeney, André Kirkman",
      Actors: "Manu Bennett, Larenz Tate, Linden Ashby",
      Plot: "Champion gamer Max Troy discovers events in a new video game are being mirrored in the real world, and must join forces with the game's protagonist, Orson Creed, to unravel the conspiracy before the game's sinister plot overwhelms...",
      Language: "English",
      Country: "United States",
      Awards: "N/A",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODdlMjU0MDYtMWQ1NC00YjFjLTgxMDQtNDYxNTg2ZjJjZDFiXkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg",
      Ratings: [{ Source: "Internet Movie Database", Value: "5.8/10" }],
      Metascore: "N/A",
      imdbRating: "5.8",
      imdbVotes: "22,503",
      imdbID: "tt4244162",
      Type: "movie",
      DVD: "02 Aug 2016",
      BoxOffice: "$10,104",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    };
    global.fetch = jest.fn(() => Promise.resolve(dummyData));
  });
});
