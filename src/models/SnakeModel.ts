import { Direction } from '../enums';
import { PointModel } from './PointModel';

export class SnakeModel {
  constructor(
    readonly body: PointModel[],
    readonly direction: Direction = Direction.RIGHT,
  ) {}

  public static initialSnake(gridSize: number): SnakeModel {
    return new SnakeModel(
      [
        new PointModel(gridSize / 2, gridSize / 2),
        new PointModel(gridSize / 2, gridSize / 2 + 1),
      ],
      Direction.LEFT,
    );
  }

  getHead(): PointModel {
    return this.body[0];
  }

  hasEatenSelf(): boolean {
    const [head, ...body] = this.body;

    return body.findIndex(bodyPart => bodyPart.equals(head)) >= 0;
  }

  hasLeftGrid(gridSize: number): boolean {
    const [head] = this.body;

    return head.x < 0 || head.y < 0 || head.x > gridSize - 1 || head.y > gridSize - 1;
  }

  feedSnake(): SnakeModel {
    const tail = this.body[this.body.length - 1];

    switch (this.direction) {
      case Direction.TOP:
        return new SnakeModel(
          [
            ...this.body,
            new PointModel(tail.x, tail.y - 1),
          ],
          this.direction
        );
      case Direction.BOTTOM:
        return new SnakeModel(
          [
            ...this.body,
            new PointModel(tail.x, tail.y + 1),
          ],
          this.direction
        );
      case Direction.LEFT:
        return new SnakeModel(
          [
            ...this.body,
            new PointModel(tail.x + 1, tail.y),
          ],
          this.direction
        );
      case Direction.RIGHT:
        return new SnakeModel(
          [
            ...this.body,
            new PointModel(tail.x - 1, tail.y - 1),
          ],
          this.direction
        );
    }

    return this;
  }

  public move(): SnakeModel {
    switch (this.direction) {
      case Direction.TOP:
        return new SnakeModel(
          [
            new PointModel(this.body[0].x, this.body[0].y - 1),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case Direction.BOTTOM:
        return new SnakeModel(
          [
            new PointModel(this.body[0].x, this.body[0].y + 1),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case Direction.LEFT:
        return new SnakeModel(
          [
            new PointModel(this.body[0].x - 1, this.body[0].y),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
      case Direction.RIGHT:
        return new SnakeModel(
          [
            new PointModel(this.body[0].x + 1, this.body[0].y),
            ...this.body.slice(0, this.body.length - 1),
          ],
          this.direction
        );
    }

    return this;
  }

  public setDirection(direction: Direction): SnakeModel {
    if (this.canChangeDirection(direction)) {
      return new SnakeModel(
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
