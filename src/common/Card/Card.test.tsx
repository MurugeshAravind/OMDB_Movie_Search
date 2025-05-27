import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

// Mock AppConstants
jest.mock('../../AppConstants', () => ({
  DUMMY_IMAGE_PATH: 'dummy.jpg',
}));

// Mock Link from react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...rest }: any) => (
    <a href={to} {...rest}>
      {children}
    </a>
  ),
}));

describe('Card component', () => {
  const posters = [
    { imdbID: '1', Title: 'Movie 1', Poster: 'poster1.jpg', Year: '2020' },
    { imdbID: '2', Title: 'Movie 2', Poster: 'poster2.jpg', Year: '2021' },
    { imdbID: '1', Title: 'Movie 1', Poster: 'poster1.jpg', Year: '2020' }, // duplicate
  ];

  it('renders unique cards only', () => {
    render(<Card poster={posters} letRef={undefined} />);
    // Only 2 unique imdbIDs
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  it('renders nothing if poster array is empty', () => {
    const { container } = render(<Card poster={[]} letRef={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders DUMMY_IMAGE_PATH if Poster is "N/A"', () => {
    const postersWithNA = [
      { imdbID: '3', Title: 'Movie 3', Poster: 'N/A', Year: '2022' },
    ];
    render(<Card poster={postersWithNA} letRef={undefined} />);
    const img = screen.getByAltText('poster') as HTMLImageElement;
    expect(img.src).toContain('dummy.jpg');
  });

  it('renders correct image src if Poster is valid', () => {
    render(<Card poster={[posters[0]]} letRef={undefined} />);
    const img = screen.getByAltText('poster') as HTMLImageElement;
    expect(img.src).toContain('poster1.jpg');
  });

  it('attaches ref to the last card', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card poster={posters} letRef={ref} />);
    // The last card should have the ref attached
    expect(ref.current).not.toBeNull();
    // The last card should contain the correct movie title
    expect(ref.current?.textContent).toContain('Movie 2');
  });

  it('renders correct year for each card', () => {
    render(<Card poster={posters} letRef={undefined} />);
    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  it('renders correct link for each card', () => {
    render(<Card poster={posters} letRef={undefined} />);
    expect(screen.getByText('Movie 1').closest('a')).toHaveAttribute(
      'href',
      '/1',
    );
    expect(screen.getByText('Movie 2').closest('a')).toHaveAttribute(
      'href',
      '/2',
    );
  });
});
