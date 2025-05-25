import { render } from '@testing-library/react';
import Navigation from '../common/Navigation/Navigation';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
describe('navigation test', () => {
  test('nav snapshot test', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true }}>
        <Navigation />
      </MemoryRouter>,
    );
    expect(document.querySelector('nav')).toBeDefined();
  });
});
