import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import FetchData from "../Api/FetchData";
import Loader from "../Loader/Loader";
import * as AppConstants from "../../AppConstants";
const Heading = styled.h1`
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const Post = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  height: auto;
  alt: "Poster";
  float: left;
  border: solid 1px black;
  margin-right: 1rem;
  padding: 0.5rem;
  background-color: black;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
`;
const WrapperDiv = styled.div`
  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;
    margin: 40rem auto;
  }
`;
const MovieDetails = () => {
  const { id } = useParams("id");
  console.log(id)
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      let movieDetails = await FetchData(
        `${AppConstants.URL}${AppConstants.API_KEY}&i=${id}`
      )
        .then((res) => res)
        .then((res) => res.json());

      setIsLoading(false);
      if (
        movieDetails.Response === "True" &&
        Object.keys(movieDetails).length > 0
      ) {
        console.log("movieDetails", movieDetails);
        setMovieDetails(movieDetails);
      }
    }
    fetchMovieDetails();
  }, [id]);
  return !isLoading && movieDetails && Object.keys(movieDetails).length > 0 ? (
    <>
      <Link to="/" style={{ fontStyle: "unset", float: "left" }}>
        <big>
          <strong>Back</strong>
        </big>
      </Link>
      <Heading>
        {movieDetails.Title}
        <pre>
          <strong>{movieDetails.Year}</strong>* &nbsp;
          <strong>{movieDetails.Rated}</strong>* &nbsp;
          <strong>{movieDetails.Runtime}</strong>* &nbsp;
        </pre>
      </Heading>
      <Post src={movieDetails.Poster} />
      <WrapperDiv>
        <p>
          <strong>Genre:</strong>&nbsp;
          {movieDetails.Genre.split(",").map((x) => (
            <Button key={x}>{x}</Button>
          ))}
        </p>
        <p>
          <strong>Plot:</strong>&nbsp;{movieDetails.Plot}
        </p>
        <p>
          <strong>Actors:</strong>&nbsp;
          {movieDetails.Actors.split(",").map((x) => (
            <Button key={x}>{x}</Button>
          ))}
        </p>
        <p>
          <strong>Director:</strong>&nbsp;
          <Button>{movieDetails.Director}</Button>
        </p>
        <p>
          <strong>Writer/ Writers:</strong>&nbsp;
          {movieDetails.Writer.split(",").length ? (
            movieDetails.Writer.split(",").map((x) => (
              <Button key={x}>{x}</Button>
            ))
          ) : (
            <Button>{movieDetails.Writer}</Button>
          )}
        </p>
        <p>
          <strong>
            Rating:&nbsp;<Button>{movieDetails.imdbRating}</Button>
          </strong>
        </p>
        <p>
          <strong>
            Awards:&nbsp;<Button>{movieDetails.Awards}</Button>
          </strong>
        </p>
      </WrapperDiv>
    </>
  ) : (
    <Loader />
  );
};
export default MovieDetails;
