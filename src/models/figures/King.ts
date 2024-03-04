import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import black from "../../assets/black-king.png";
import white from "../../assets/white-king.png";
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? black : white;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    if (
      (dx === 1 && dy === 1) ||
      (dy === 1 && dx === 0) ||
      (dy === 0 && dx === 1)
    ) {
      return true;
    }
    return false;
  }

  isUnderAttack(board: Cell[][]): boolean {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const cell = board[i][j];
        if (cell.figure && cell.figure.color !== this.color) {
          if (cell.figure.canAttackKing(this.cell)) {
            console.log("KING IS UNDER ATTACK");
            return true;
          }
        }
      }
    }
    return false;
  }
}
