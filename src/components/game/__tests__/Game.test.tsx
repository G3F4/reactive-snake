import React from 'react';
import { render } from '@testing-library/react';
import { PointModel } from '../../../models/PointModel';
import { SnakeModel } from '../../../models/SnakeModel';
import Game from '../Game';

it('renders without crashing', () => {
  // given
  const gridSize = 10;
  const snake = new SnakeModel([
    new PointModel(gridSize / 2, gridSize / 2),
    new PointModel(gridSize / 2, gridSize / 2 + 1),
  ]);

  // when
  const { container } = render(
    <Game gridSize={gridSize} snake={snake} />,
  );

  //then
  // @ts-ignore
  expect(container.firstChild.classList.contains('Game')).toBeTruthy();
});
