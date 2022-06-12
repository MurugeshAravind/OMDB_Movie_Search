import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import Search from "../common/Search/Search";

const history = createMemoryHistory();
const SearchComponentInstance = () => {
  <Router history={history.location} navigator={history}>
    <Search dummyData={dummyData} />
  </Router>;
};
describe("search component", () => {
  test("check search", () => {
    render(SearchComponentInstance);
    expect(SearchComponentInstance).toBeTruthy();
  });
  test("dummy data", () => {
    render(SearchComponentInstance);
    const dummyData = {
        Search: [
          {
            Title: "Beta Test",
            Year: "2016",
            imdbID: "tt4244162",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BODdlMjU0MDYtMWQ1NC00YjFjLTgxMDQtNDYxNTg2ZjJjZDFiXkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg",
          },
          {
            Title: "The Beta Test",
            Year: "2021",
            imdbID: "tt11738830",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOTE4ZjI4ZjMtMzJhOS00Y2U5LTg3YTAtZjcyZmU1NjAyNjRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
          },
          {
            Title: "Test Pilot",
            Year: "1938",
            imdbID: "tt0030848",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNzQ2MmU5MGMtYWFhOC00YmY0LWE3NDctM2RkYTdiMDc3Y2JmXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg",
          },
          {
            Title: "Test",
            Year: "2013",
            imdbID: "tt2407380",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMTQwMDU5NDkxNF5BMl5BanBnXkFtZTcwMjk5OTk4OQ@@._V1_SX300.jpg",
          },
          {
            Title: "The Test",
            Year: "2012",
            imdbID: "tt1986180",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMTYwNTgzMjM5M15BMl5BanBnXkFtZTcwNDUzMTE1OA@@._V1_SX300.jpg",
          },
          {
            Title: "The Test",
            Year: "2013",
            imdbID: "tt2616114",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMjMzMDQwMzM2M15BMl5BanBnXkFtZTcwMzA1OTg1OQ@@._V1_SX300.jpg",
          },
          {
            Title: "This Is Not a Test",
            Year: "1962",
            imdbID: "tt0183884",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOTU5MDkwNDAzOV5BMl5BanBnXkFtZTgwNjE4NDgwMzE@._V1_SX300.jpg",
          },
          {
            Title: "Rabbit Test",
            Year: "1978",
            imdbID: "tt0078133",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BYmMyYzYxNmYtMGU4OC00MDFlLWJiYmQtZTJmNTMwZjg1ZTkwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg",
          },
          {
            Title: "Test Pattern",
            Year: "2019",
            imdbID: "tt10121508",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOGIyYTBiYjQtNDg4Ny00MTVhLThhNzYtN2U0NTJhNDRjNjQ5XkEyXkFqcGdeQXVyMjQ5MzM4NzE@._V1_SX300.jpg",
          },
          {
            Title: "Sound Test for Blackmail",
            Year: "1929",
            imdbID: "tt0249159",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BYzhlZDJjZWItMThlMi00ZGJlLWI2OTQtZjViYTQ4ZWNkOGRmXkEyXkFqcGdeQXVyMjA3NDg2Mzg@._V1_SX300.jpg",
          },
        ],
        totalResults: "790",
        Response: "True",
      };
      global.fetch = jest.fn(() => Promise.resolve(dummyData));
  })
});
