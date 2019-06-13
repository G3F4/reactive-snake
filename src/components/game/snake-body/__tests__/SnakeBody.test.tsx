import React from 'react';
import { render } from '@testing-library/react';
import SnakeBody from '../SnakeBody';

it('renders without crashing', () => {
  const { container } = render(
    <SnakeBody />,
  );

  // @ts-ignore
  expect(container.firstChild.classList.contains('SnakeBody')).toBeTruthy();
});
