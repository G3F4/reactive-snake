export class PointModel {
  constructor(
    readonly x: number,
    readonly y: number,
  ) {}

  public equals(point: PointModel): boolean {
    return this.x === point.x && this.y === point.y;
  }

  public static random(gridSize: number): PointModel {
    return new PointModel(Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize));
  }
}
