import React, { KeyboardEvent, useEffect, useState } from 'react';
import { GRID_SIZE, INITIAL_SPEED } from '../../constans';
import { Direction, GameState } from '../../enums';
import { Point } from '../../models/Point';
import { Snake } from '../../models/Snake';
import Game from '../game/Game';
import './App.css';
import GameContext from '../game/GameContext';

let moveInterval = setInterval(() => {}, 1000000);

const App: React.FC = () => {
  const [gameState, setGameState] = useState(GameState.PLAY);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [fruit, setFruit] = useState(Point.random(GRID_SIZE));
  const [snake, setSnake] = useState(Snake.initialSnake(GRID_SIZE));

  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent) => {
      if (e.keyCode === 38 || e.keyCode === 87) { // up arrow
        setSnake(snake => snake.setDirection(Direction.TOP));
      }
      else if (e.keyCode === 40 || e.keyCode === 83) { // down arrow
        setSnake(snake => snake.setDirection(Direction.BOTTOM));
      }
      else if (e.keyCode === 37 || e.keyCode === 65) { // left arrow
        setSnake(snake => snake.setDirection(Direction.LEFT));
      }
      else if (e.keyCode === 39 || e.keyCode === 68) { // right arrow
        setSnake(snake => snake.setDirection(Direction.RIGHT));
      }
      else if (e.keyCode === 27) { // right arrow
        if (gameState === GameState.PLAY) {
          setGameState(GameState.MENU);
        }
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
  }, [gameState]);

  useEffect(() => {
    clearInterval(moveInterval);
    moveInterval = setInterval(() => {
      if (gameState === GameState.PLAY) {
        setSnake(snake => {
          const movedSnake = snake.move();
          const snakeEatenSelf = movedSnake.hasEatenSelf();

          console.log(['snakeEatenSelf'], snakeEatenSelf)

          return movedSnake;
        });
      }
    }, speed);
  }, [gameState, speed]);

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
      <GameContext.Provider value={{
        state: gameState,
        onStateChange: setGameState,
      }}>
        <Game gridSize={GRID_SIZE} snake={snake} fruit={fruit} state={gameState} />
      </GameContext.Provider>
    </div>
  );
};

export default App;
