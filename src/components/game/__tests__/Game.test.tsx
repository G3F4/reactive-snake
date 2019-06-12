import React from 'react';
import { render } from '@testing-library/react';
import { Point } from '../../../models/Point';
import { Snake } from '../../../models/Snake';
import Game from '../Game';

it('renders without crashing', () => {
  // given
  const gridSize = 10;
  const snake = new Snake([
    new Point(gridSize / 2, gridSize / 2),
    new Point(gridSize / 2, gridSize / 2 + 1),
  ]);

  // when
  const { container } = render(
    <Game gridSize={gridSize} snake={snake} />,
  );

  //then
  // @ts-ignore
  expect(container.firstChild.classList.contains('Game')).toBeTruthy();
});
