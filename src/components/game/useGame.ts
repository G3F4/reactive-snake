import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { GRID_SIZE, INITIAL_SPEED } from '../../constans';
import { Direction, GameState } from '../../enums';
import { PointModel } from '../../models/PointModel';
import { SnakeModel } from '../../models/SnakeModel';

let moveInterval = setInterval(() => {}, 1000000);

export default () => {
  const [gameState, setGameState] = useState(GameState.PLAY);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [fruit, setFruit] = useState(PointModel.random(GRID_SIZE));
  const [snake, setSnake] = useState(SnakeModel.initialSnake(GRID_SIZE));

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
          const snakeLeftGrid = movedSnake.hasLeftGrid(GRID_SIZE);

          if (snakeEatenSelf || snakeLeftGrid) {
            setGameState(GameState.END);

            return snake;
          }

          return movedSnake;
        });
      }
    }, speed);
  }, [gameState, speed]);

  useEffect(() => {
    const fruitEaten = snake.getHead().equals(fruit);

    if (fruitEaten) {
      setSnake(snake => snake.feedSnake());
      setFruit(PointModel.random(GRID_SIZE));
      setSpeed(s => Math.ceil(s * 0.7));
    }
  }, [snake, fruit]);

  const handleResetGame = useCallback(() => {
    setGameState(GameState.PLAY);
    setSnake(SnakeModel.initialSnake(GRID_SIZE));
  }, []);

  return {
    snake,
    fruit,
    gameState,
    setGameState,
    handleResetGame,
  }
}
