import { MemoryRouter } from 'react-router-dom';
import Search from '../common/Search/Search';
import { fireEvent, render, screen } from '@testing-library/react';

const handleQueryVal = jest.fn();
const handlePageNumber = jest.fn();

describe('search component', () => {
  test('test the input box in search component', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true }}>
        <Search queryValue={handleQueryVal} page={handlePageNumber} />
      </MemoryRouter>,
    );
    let input = screen.getByTestId('search-input');
    expect(input).toBeDefined();
  });
  test('type test in the input search', () => {
    render(
      <MemoryRouter>
        <Search queryValue={handleQueryVal} page={handlePageNumber} />
      </MemoryRouter>,
    );
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeTruthy();
    fireEvent.input(inputSearch, {
      target: { value: 'test' },
    });
  });
  test('value as empty in input search', () => {
    render(
      <MemoryRouter>
        <Search queryValue={handleQueryVal} page={handlePageNumber} />
      </MemoryRouter>,
    );
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeTruthy();
    fireEvent.input(inputSearch, {
      target: { value: 'test' },
    });
    fireEvent.input(inputSearch, {
      target: { value: '' },
    });
  });
});
