import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FetchData from '../../common/Api/FetchData';
import Loader from '../../common/Loader/Loader';
import * as AppConstants from '../../AppConstants';

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
    [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      let movieDetails = await FetchData({
        method: 'GET',
        url: `${AppConstants.URL}${AppConstants.API_KEY}&i=${id}`,
      });
      setIsLoading(false);
      if (
        movieDetails?.data.Response === 'True' &&
        Object.keys(movieDetails?.data).length > 0
      ) {
        setMovieDetails(movieDetails?.data);
      }
    }
    fetchMovieDetails();
  }, [id]);

  return !isLoading && movieDetails && Object.keys(movieDetails).length > 0 ? (
    <div data-testid="details">
      <div className="block m-8 text-center">
        <Link
          to="/OMDB_Movie_Search/"
          className="text-blue-600 hover:underline text-lg font-bold"
        >
          Home
        </Link>
        <h1 className="text-center text-[2rem] text-silver font-bold mt-4 mb-8">
          {movieDetails?.Title}
        </h1>
      </div>
      <div className="block m-8 text-center">
        <img
          src={
            movieDetails?.Poster !== 'N/A'
              ? movieDetails?.Poster
              : AppConstants.DUMMY_IMAGE_PATH
          }
          alt="Poster"
          className="mx-auto bg-black border border-black rounded-lg w-[300px] max-w-full sm:w-[175px]"
        />
      </div>
      <div className="block m-8 text-center">
        <p>
          <strong>Year:</strong>&nbsp;
          <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
            {movieDetails?.Year}
          </span>
        </p>
        <p>
          <strong>Rated:</strong>&nbsp;
          <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
            {movieDetails?.Rated}
          </span>
        </p>
        <p>
          <strong>Genre:</strong>&nbsp;
          {movieDetails?.Genre?.split(',').length > 0 ? (
            movieDetails?.Genre?.split(',').map((x: any) => (
              <span
                key={x}
                className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2"
              >
                {x}
              </span>
            ))
          ) : (
            <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
              {movieDetails?.Genre}
            </span>
          )}
        </p>
        <p>
          <strong>Plot:</strong>&nbsp;{movieDetails?.Plot}
        </p>
        <p>
          <strong>Actors:</strong>&nbsp;
          {movieDetails?.Actors?.split(',').length > 0 ? (
            movieDetails?.Actors?.split(',').map((x: any) => (
              <span
                key={x}
                className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2"
              >
                {x}
              </span>
            ))
          ) : (
            <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
              {movieDetails?.Actors}
            </span>
          )}
        </p>
        <p>
          <strong>Director/ Directors:</strong>&nbsp;
          {movieDetails?.Director?.split(',').length > 0 ? (
            movieDetails?.Director?.split(',').map((x: any) => (
              <span
                key={x}
                className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2"
              >
                {x}
              </span>
            ))
          ) : (
            <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
              {movieDetails?.Director}
            </span>
          )}
        </p>
        <p>
          <strong>Writer/ Writers:</strong>&nbsp;
          {movieDetails?.Writer?.split(',').length > 0 ? (
            movieDetails?.Writer?.split(',').map((x: any) => (
              <span
                key={x}
                className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2"
              >
                {x}
              </span>
            ))
          ) : (
            <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
              {movieDetails?.Writer}
            </span>
          )}
        </p>
        <p>
          <strong>
            Awards:&nbsp;
            <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
              {movieDetails?.Awards}
            </span>
          </strong>
        </p>
        <p>
          <strong>OMDB Rating:</strong>
          <span className="inline-block bg-gray-300 text-black px-4 py-2 rounded-2xl m-2">
            <meter
              id="rating"
              min=""
              low={3}
              high={9}
              max={10}
              value={movieDetails?.imdbRating}
            ></meter>
            &nbsp;{`${movieDetails?.imdbRating}`}
          </span>
        </p>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
