import React from 'react';
import { Link } from 'react-router-dom';
import * as AppConstants from '../../AppConstants';

const Card = (props: {
  poster: any[];
  letRef: React.LegacyRef<HTMLDivElement> | undefined;
}) => {
  const returnCard = (card: {
    imdbID: any;
    Title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    Poster: string | undefined;
    Year:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    return (
      <div className="text-center text-white bg-gray-600 m-4 p-4 rounded shadow">
        <Link to={`/${card.imdbID}`} className="text-white hover:underline">
          <h3 className="font-bold text-lg mb-2">{card.Title}</h3>
          <img
            src={
              card.Poster !== 'N/A'
                ? card.Poster
                : AppConstants.DUMMY_IMAGE_PATH
            }
            alt="poster"
            width="300"
            height="400"
            className="mx-auto mb-2 object-cover rounded"
          />
          <p>
            <span className="text-xl font-semibold">{card.Year}</span>
          </p>
        </Link>
      </div>
    );
  };

  const uniquePosters = props.poster.filter(
    (card, index, self) =>
      index === self.findIndex((t) => t.imdbID === card.imdbID),
  );

  return uniquePosters.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
      {uniquePosters.map((card, index) => {
        if (uniquePosters.length === index + 1) {
          return (
            <div
              data-testid="movie-item"
              key={card.imdbID}
              ref={props.letRef}
              className="flex"
            >
              {returnCard(card)}
            </div>
          );
        } else {
          return (
            <div data-testid="movie-item" key={card.imdbID} className="flex">
              {returnCard(card)}
            </div>
          );
        }
      })}
    </div>
  ) : null;
};

export default Card;
