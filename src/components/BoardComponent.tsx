import React, { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="w-[512px] h-[512px] flex flex-wrap">
      {board.cells.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
