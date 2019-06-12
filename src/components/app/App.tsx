import React, { useEffect, useState } from 'react';
import { GRID_SIZE, TICK } from '../../constans';
import { DIRECTION } from '../../enums';
import { Point } from '../../models/Point';
import { Snake } from '../../models/Snake';
import Game from '../game/Game';
import './App.css';

const App: React.FC = () => {
  const [snake, setSnake] = useState(
    new Snake(
      [
        new Point(GRID_SIZE / 2, GRID_SIZE / 2),
        new Point(GRID_SIZE / 2, GRID_SIZE / 2 + 1)
      ],
    ),
  );

  useEffect(() => {
    const handleKeyPressed = (e: any) => {
      if (e.keyCode === 38) { // up arrow
        setSnake(snake => snake.setDirection(DIRECTION.TOP));
      }
      else if (e.keyCode === 40) { // down arrow
        setSnake(snake => snake.setDirection(DIRECTION.BOTTOM));
      }
      else if (e.keyCode === 37) { // left arrow
        setSnake(snake => snake.setDirection(DIRECTION.LEFT));
      }
      else if (e.keyCode === 39) { // right arrow
        setSnake(snake => snake.setDirection(DIRECTION.RIGHT));
      }
    };

    document.onkeydown = handleKeyPressed;

    // #todo dlaczego to nie działa?
    // document.addEventListener("onkeydown", handleKeyPressed);
    //
    // return () => {
    //   document.removeEventListener("onkeydown", handleKeyPressed);
    // }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSnake(snake => snake.move());
    }, TICK);
  }, []);

  return (
    <div className="App">
      <Game gridSize={GRID_SIZE} snake={snake} />
    </div>
  );
};

export default App;
