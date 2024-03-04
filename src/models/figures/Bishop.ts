import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import black from "../../assets/black-bishop.png";
import white from "../../assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? black : white;
    this.name = FigureNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isDiagonalEmpty(target)) {
      return true;
    }
    return false;
  }

  //  TODO
  // canAttackKing(target: Cell): boolean {
  //   if (this.cell.isDiagonalEmpty(target)) {
  //     return true;
  //   }
  //   return false;
  // }
}
