import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    startGame();
  }, []);

  function startGame() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.putFigures()
    setBoard(newBoard);
  }
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <BoardComponent board={board} setBoard={setBoard} />
      </div>
    </>
  );
}

export default App;
