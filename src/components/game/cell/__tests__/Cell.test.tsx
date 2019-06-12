import React from 'react';
import { render } from '@testing-library/react';
import Cell from '../Cell';

it('renders without crashing', () => {
  const { container } = render(
    <Cell />,
  );

  // @ts-ignore
  expect(container.firstChild.classList.contains('Cell')).toBeTruthy();
});
