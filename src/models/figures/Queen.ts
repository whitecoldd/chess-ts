import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import black from "../../assets/black-queen.png";
import white from "../../assets/white-queen.png";
export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? black : white;
    this.name = FigureNames.QUEEN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isVerticalEmpty(target)) {
      return true;
    }
    if (this.cell.isHorizontalEmpty(target)) {
      return true;
    }
    if (this.cell.isDiagonalEmpty(target)) {
      return true;
    }
    return false;
  }
}
