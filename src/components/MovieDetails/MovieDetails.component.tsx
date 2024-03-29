import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import FetchData from "../../common/Api/FetchData";
import Loader from "../../common/Loader/Loader";
import * as AppConstants from "../../AppConstants";
const Heading = styled.h1`
  text-align: center;
  color: silver;
`;
const Post = styled.img.attrs((props) => ({
  src: props.src || AppConstants.DUMMY_IMAGE_PATH,
}))`
  alt: "Poster";
  background-color: black;
  border: solid 1px black;
  @media screen and (max-width: 600px) {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 175px;
  }
`;
const Button = styled.button`
  background-color: #ccc;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0.5rem;
  border-radius: 16px;
  clear: right;
  @media screen and (max-width: 600px) {
    display: block;
    margin: 1rem auto;
  }
  @media screen and (min-width: 600px) {
    display: block;
    margin: 1rem auto;
  }
`;
const WrapperDiv = styled.div`
  display: block;
  margin: 2rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;
  }
  @media screen and (min-width: 600px) {
    display: block;
    text-align: center;
  }
`;
interface MovieDetailsInterface {
  Title?: string;
  Poster?: string;
  Year?: string;
  Rated?: string;
  Genre?: string;
  Actors?: string;
  Director?: string;
  Writer?: string;
  imdbRating?: string;
  Plot?: string;
  Awards?: string;
}
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsInterface | any>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      let movieDetails = await FetchData({
        method: "GET",
        url: `${AppConstants.URL}${AppConstants.API_KEY}&i=${id}`,
      });
      setIsLoading(false);
      if (
        movieDetails.data.Response === "True" &&
        Object.keys(movieDetails.data).length > 0
      ) {
        setMovieDetails(movieDetails.data);
      }
    }
    fetchMovieDetails();
  }, [id]);
  return !isLoading && movieDetails && Object.keys(movieDetails).length > 0 ? (
    <div data-testid="details">
      <WrapperDiv>
        <Link to={{ pathname: "/OMDB_Movie_Search" }}>
          <big>
            <strong>Home</strong>
          </big>
        </Link>
        <Heading>{movieDetails.Title}</Heading>
      </WrapperDiv>
      <WrapperDiv>
        <Post
          src={
            movieDetails.Poster !== "N/A"
              ? movieDetails.Poster
              : AppConstants.DUMMY_IMAGE_PATH
          }
        />
      </WrapperDiv>

      <WrapperDiv>
        <p>
          <strong>Year:</strong>&nbsp;
          {<Button key={movieDetails.Year}>{movieDetails.Year}</Button>}
        </p>
        <p>
          <strong>Rated:</strong>&nbsp;
          {<Button key={movieDetails.Rated}>{movieDetails.Rated}</Button>}
        </p>
        <p>
          <strong>Genre:</strong>&nbsp;
          {movieDetails.Genre.split(",").length > 0 ? (
            movieDetails.Genre.split(",").map((x: any) => (
              <Button key={x}>{x}</Button>
            ))
          ) : (
            <Button>{movieDetails.Genre}</Button>
          )}
        </p>
        <p>
          <strong>Plot:</strong>&nbsp;{movieDetails.Plot}
        </p>
        <p>
          <strong>Actors:</strong>&nbsp;
          {movieDetails.Actors.split(",").length > 0 ? (
            movieDetails.Actors.split(",").map((x: any) => (
              <Button key={x}>{x}</Button>
            ))
          ) : (
            <Button>{movieDetails.Actors}</Button>
          )}
        </p>
        <p>
          <strong>Director/ Directors:</strong>&nbsp;
          {movieDetails.Director.split(",").length > 0 ? (
            movieDetails.Director.split(",").map((x: any) => (
              <Button key={x}>{x}</Button>
            ))
          ) : (
            <Button>{movieDetails.Director}</Button>
          )}
        </p>
        <p>
          <strong>Writer/ Writers:</strong>&nbsp;
          {movieDetails?.Writer.split(",").length > 0 ? (
            movieDetails?.Writer.split(",").map((x: any) => (
              <Button key={x}>{x}</Button>
            ))
          ) : (
            <Button>{movieDetails.Writer}</Button>
          )}
        </p>
        <p>
          <strong>
            Awards:&nbsp;<Button>{movieDetails?.Awards}</Button>
          </strong>
        </p>
        <p>
          <strong>OMDB Rating:</strong>
          <Button>
            <meter
              id="rating"
              min=""
              low={3}
              high={9}
              max={10}
              value={movieDetails?.imdbRating}
            ></meter>
            &nbsp;{`${movieDetails?.imdbRating}`}
          </Button>
        </p>
      </WrapperDiv>
    </div>
  ) : (
    <Loader />
  );
};
export default MovieDetails;
