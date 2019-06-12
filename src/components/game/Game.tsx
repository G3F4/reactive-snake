import React from 'react';
import { Snake } from '../../models/Snake';

interface GameProps {
  gridSize: number;
  snake: Snake;
}

const Game: React.FC<GameProps> = ({ snake, gridSize }) => (
  <div className="Grid">
    {Array.from({ length: gridSize })
      .map((value, index) => index)
      .map(osY => (
        <div className="GridRow">
          {Array.from({ length: gridSize })
            .map((value, index) => index)
            .map(osX => {
              const snakeCell = snake.body
                .findIndex(bodyPart => bodyPart.x === osX && bodyPart.y === osY) >= 0;

              if (snakeCell) {
                return (
                  <div className="SnakePart" />
                );
              }

              return (
                <div className="GridCell" />
              );
            })
          }
        </div>
      ))
    }
  </div>
);

export default Game;
