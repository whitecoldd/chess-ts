import { FC } from "react";
import { Cell } from "../models/Cell";

type CellProps = {
  cell: Cell;
};

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div
      className={`w-[64px] h-[64px] flex justify-center items-center bg-${
        cell.color === "black" ? "gray-600" : "white"
      }`}
    >
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
