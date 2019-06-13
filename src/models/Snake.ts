import { Direction } from '../enums';
import { Point } from './Point';

export class Snake {
  constructor(
    readonly body: Point[],
    readonly direction: Direction = Direction.RIGHT,
  ) {}

  public static initialSnake(gridSize: number): Snake {
    return new Snake(
      [
        new Point(gridSize / 2, gridSize / 2),
        new Point(gridSize / 2, gridSize / 2 + 1),
      ],
      Direction.LEFT,
    );
  }

  getHead(): Point {
    return this.body[0];
  }

  hasEatenSelf(): boolean {
    const [head, ...body] = this.body;

    return body.findIndex(bodyPart => bodyPart.equals(head)) >= 0;
  }

  feedSnake(): Snake {
    const tail = this.body[this.body.length - 1];

    switch (this.direction) {
      case Direction.TOP:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x, tail.y - 1),
          ],
          this.direction
        );
      case Direction.BOTTOM:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x, tail.y + 1),
          ],
          this.direction
        );
      case Direction.LEFT:
        return new Snake(
          [
            ...this.body,
            new Point(tail.x + 1, tail.y),
          ],
          this.direction
        );
      case Direction.RIGHT:
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
      case Direction.TOP:
        return new Snake(
          [
            new Point(this.body[0].x, this.body[0].y - 1),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case Direction.BOTTOM:
        return new Snake(
          [
            new Point(this.body[0].x, this.body[0].y + 1),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case Direction.LEFT:
        return new Snake(
          [
            new Point(this.body[0].x - 1, this.body[0].y),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case Direction.RIGHT:
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

  public setDirection(direction: Direction): Snake {
    if (this.canChangeDirection(direction)) {
      return new Snake(
        this.body,
        direction,
      );
    }

    return this;
  }

  private canChangeDirection(direction: Direction) {
    switch (direction) {
      case Direction.TOP: {
        return this.direction !== Direction.BOTTOM;
      }
      case Direction.BOTTOM: {
        return this.direction !== Direction.TOP;
      }
      case Direction.LEFT: {
        return this.direction !== Direction.RIGHT;
      }
      case Direction.RIGHT: {
        return this.direction !== Direction.LEFT;
      }
      default:
        return true;
    }
  }
}
