import React from 'react';
import { Snake } from '../../models/Snake';
import './Game.css';
import Cell from './cell/Cell';

interface GameProps {
  gridSize: number;
  snake: Snake;
}

const Game: React.FC<GameProps> = ({ snake, gridSize }) => (
  <div className="Game">
    {Array.from({ length: gridSize })
      .map((value, index) => index)
      .map(osY => (
        <div className="OsX">
          {Array.from({ length: gridSize })
            .map((value, index) => index)
            .map(osX => {
              const snakeCell = snake.body
                .findIndex(bodyPart => bodyPart.x === osX && bodyPart.y === osY) >= 0;

              return (
                <Cell snakeCell={snakeCell} />
              );
            })
          }
        </div>
      ))
    }
  </div>
);

export default Game;
