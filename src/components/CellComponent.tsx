import { FC } from "react";
import { Cell } from "../models/Cell";
import { Board } from "../models/Board";

type CellProps = {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
  board: Board;
};

const CellComponent: FC<CellProps> = ({ cell, selected, click, board }) => {
  return (
    <div
      onClick={() => click(cell)}
      className={`w-[64px] h-[64px] flex justify-center items-center ${
        cell.color === "black" ? "bg-gray-600" : "bg-white"
      } ${selected ? " bg-orange-400" : ""} ${
        cell.available && cell.figure ? "bg-green-700" : ""
      }  ${
        cell.figure && cell.figure?.isUnderAttack(board.cells)
          ? "bg-red-800"
          : ""
      }`}
    >
      {!cell.figure && cell.available && (
        <div className="w-4 h-4 rounded-full bg-green-300 absolute z-10" />
      )}
      {cell.figure?.logo && (
        <img
          src={cell.figure.logo}
          alt={cell.figure.name}
          className="w-[56px] h-[56px] relative"
        />
      )}
    </div>
  );
};

export default CellComponent;
