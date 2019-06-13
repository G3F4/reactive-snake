import React, { KeyboardEvent, useEffect, useState } from 'react';
import { GRID_SIZE, INITIAL_SPEED } from '../../constans';
import { DIRECTION } from '../../enums';
import { Point } from '../../models/Point';
import { Snake } from '../../models/Snake';
import Game from '../game/Game';
import './App.css';

let moveInterval = setInterval(() => {}, 1000000);

const App: React.FC = () => {
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [fruit, setFruit] = useState(Point.random(GRID_SIZE));
  const [snake, setSnake] = useState(
    new Snake(
      [
        new Point(GRID_SIZE / 2, GRID_SIZE / 2),
        new Point(GRID_SIZE / 2, GRID_SIZE / 2 + 1),
      ],
    ),
  );

  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent) => {
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

    // @ts-ignore
    document.onkeydown = handleKeyPressed;

    // #todo dlaczego to nie działa?
    // document.addEventListener("onkeydown", handleKeyPressed);
    //
    // return () => {
    //   document.removeEventListener("onkeydown", handleKeyPressed);
    // }
  }, []);

  useEffect(() => {
    clearInterval(moveInterval);
    moveInterval = setInterval(() => {
      setSnake(snake => snake.move());
    }, speed);
  }, [speed]);

  useEffect(() => {
    const fruitEaten = snake.getHead().equals(fruit);

    if (fruitEaten) {
      setSnake(snake => snake.feedSnake());
      setFruit(Point.random(GRID_SIZE));
      setSpeed(s => Math.ceil(s * 0.7));
    }
  }, [snake, fruit]);

  return (
    <div className="App">
      <Game gridSize={GRID_SIZE} snake={snake} fruit={fruit} />
    </div>
  );
};

export default App;
