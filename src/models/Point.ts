export class Point {
  constructor(
    readonly x: number,
    readonly y: number,
  ) {}

  public equals(point: Point): boolean {
    return this.x === point.x && this.y === point.y;
  }

  public static random(gridSize: number): Point {
    return new Point(Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize));
  }
}
