import React from 'react';
import { Point } from '../../models/Point';
import { Snake } from '../../models/Snake';
import './Game.css';
import Cell from './cell/Cell';
import Fruit from './fruit/Fruit';
import SnakeBody from './snake-body/SnakeBody';
import SnakeHead from './snake-head/SnakeHead';

interface GameProps {
  gridSize: number;
  snake: Snake;
  fruit: Point;
}

const Game: React.FC<GameProps> = ({ fruit, snake, gridSize }) => (
  <div className="Game">
    {Array.from({ length: gridSize })
      .map((value, index) => index)
      .map(osY => (
        <div className="OsX" key={osY}>
          {Array.from({ length: gridSize })
            .map((value, index) => index)
            .map(osX => {
              const snakeCellIndex = snake.body
                .findIndex(bodyPart => bodyPart.x === osX && bodyPart.y === osY);
              const snakeCell = snakeCellIndex >= 0;

              if (snakeCell) {
                if (snakeCellIndex === 0) {
                  return <SnakeHead />;
                }

                return <SnakeBody />;
              }

              if (osX === fruit.x && osY === fruit.y) {
                return (
                  <Fruit />
                );
              }

              return (
                <Cell key={osX} />
              );
            })
          }
        </div>
      ))
    }
  </div>
);

export default Game;
