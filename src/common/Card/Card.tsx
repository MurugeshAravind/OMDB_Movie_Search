import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AppConstants from '../../AppConstants';
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const CardContent = styled.div`
  text-align: center;
  color: white;
  background-color: DimGray;
  margin: 1rem;
  @media only screen and (max-width: 600px) {
    flex: auto;
  }
`;
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
      <CardContent>
        {
          <>
            <Link to={`/${card.imdbID}`} style={{ color: 'white' }}>
              <h3>
                <strong>{card.Title}</strong>
              </h3>
              <img
                src={
                  card.Poster !== 'N/A'
                    ? card.Poster
                    : AppConstants.DUMMY_IMAGE_PATH
                }
                alt="poster"
                width="300px"
                height="400px"
                img-fluid="true"
              ></img>
              <p>
                <big>
                  <strong>{card.Year}</strong>
                </big>
              </p>
            </Link>
          </>
        }
      </CardContent>
    );
  };
  const uniquePosters = props.poster.filter(
    (card, index, self) =>
      index === self.findIndex((t) => t.imdbID === card.imdbID),
  );
  return uniquePosters.length > 0 ? (
    <>
      {
        <CardWrapper>
          {uniquePosters.map((card, index) => {
            if (uniquePosters.length === index + 1) {
              return (
                <div
                  data-testid="movie-item"
                  key={card.imdbID}
                  ref={props.letRef}
                >
                  {returnCard(card)}
                </div>
              );
            } else {
              return (
                <div data-testid="movie-item" key={card.imdbID}>
                  {returnCard(card)}
                </div>
              );
            }
          })}
        </CardWrapper>
      }
    </>
  ) : null;
};
export default Card;
