import React, { useEffect, useState } from 'react';
import './App.css';

const GRID_SIZE = 50;
const TICK = 500;

enum DIRECTION {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

class Point {
  constructor(
    readonly x: number,
    readonly y: number,
  ) {}
}

class Snake {
  constructor(
    readonly body: Point[],
    readonly direction: DIRECTION = DIRECTION.RIGHT,
  ) {}

  public move(): Snake {
    switch (this.direction) {
      case DIRECTION.TOP:
        return new Snake(
          [
            new Point(this.body[0].x, this.body[0].y - 1),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case DIRECTION.BOTTOM:
        return new Snake(
          [
            new Point(this.body[0].x, this.body[0].y + 1),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case DIRECTION.LEFT:
        return new Snake(
          [
            new Point(this.body[0].x - 1, this.body[0].y),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case DIRECTION.RIGHT:
        return new Snake(
          [
            new Point(this.body[0].x + 1, this.body[0].y),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
    }

    return this;
  }

  public setDirection(direction: DIRECTION): Snake {
    return new Snake(
      this.body,
      direction,
    );
  }
}

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
      <div className="Grid">
        {Array.from({ length: GRID_SIZE })
          .map((value, index) => index)
          .map(osY => (
            <div className="GridRow">
              {Array.from({ length: GRID_SIZE })
                .map((value, index) => index)
                .map(osX => {
                  const snakeCell = snake.body.findIndex(bodyPart => bodyPart.x === osX && bodyPart.y === osY) >= 0;

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
    </div>
  );
};

export default App;
