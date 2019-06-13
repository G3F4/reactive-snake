import React from 'react';
import { render } from '@testing-library/react';
import SnakeHead from '../SnakeHead';

it('renders without crashing', () => {
  const { container } = render(
    <SnakeHead />,
  );

  // @ts-ignore
  expect(container.firstChild.classList.contains('SnakeHead')).toBeTruthy();
});
