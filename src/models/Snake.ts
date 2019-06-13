import { DIRECTION } from '../enums';
import { Point } from './Point';

export class Snake {
  constructor(
    readonly body: Point[],
    readonly direction: DIRECTION = DIRECTION.RIGHT,
  ) {}

  public static initialSnake(gridSize: number): Snake {
    return new Snake(
      [
        new Point(gridSize / 2, gridSize / 2),
        new Point(gridSize / 2, gridSize / 2 + 1),
      ],
      DIRECTION.LEFT,
    );
  }

  getHead(): Point {
    return this.body[0];
  }

  feedSnake(): Snake {
    const tail = this.body[this.body.length - 1];

    switch (this.direction) {
      case DIRECTION.TOP:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x, tail.y - 1),
          ],
          this.direction
        );
      case DIRECTION.BOTTOM:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x, tail.y + 1),
          ],
          this.direction
        );
      case DIRECTION.LEFT:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x + 1, tail.y),
          ],
          this.direction
        );
      case DIRECTION.RIGHT:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x - 1, tail.y - 1),
          ],
          this.direction
        );
    }

    return this;
  }

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
