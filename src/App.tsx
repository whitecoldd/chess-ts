import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFiguresComponent from "./components/LostFiguresComponent";
import TimerComponent from "./components/TimerComponent";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    startGame();
    setCurrentPlayer(whitePlayer);
  }, []);

  function startGame() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.putFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="flex justify-center w-[100vw] h-[100vh] relative">
      <TimerComponent startGame={startGame} currentPlayer={currentPlayer}/>
      <div className=" h-full flex justify-center items-center">
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
      </div>
      <div className="flex justify-center absolute right-0 inset-y-0 m-auto max-h-[512px]">
        <div className="flex flex-col justify-center h-full w-[512px]">
          <LostFiguresComponent
            title={"Black's lost figures"}
            figures={board.lostBlackFigures}
          />
          <LostFiguresComponent
            title={"White's lost figures"}
            figures={board.lostWhiteFigures}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
