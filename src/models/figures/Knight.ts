import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import black from "../../assets/black-knight.png";
import white from "../../assets/white-knight.png";
export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? black : white;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dy === 1 && dx === 2);
  }
  canAttackKing(target: Cell): boolean {
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dy === 1 && dx === 2);
  }
}
