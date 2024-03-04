import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  swapPlayer: () => void;
  currentPlayer: Player | null;
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  swapPlayer,
  currentPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell);
    }
    // if (cell.figure) setSelectedCell(cell);
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getBoardCopy();
    setBoard(newBoard);
  }

  return (
    <div className="flex flex-col items-center gap-3 my-3">
      <h3>Current Player: {currentPlayer?.color}</h3>
      <div className="w-[512px] h-[512px] flex flex-wrap">
        {board.cells.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((cell) => (
              <CellComponent
                click={click}
                key={cell.id}
                cell={cell}
                board={board}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
