import { FC } from "react";
import { Cell } from "../models/Cell";

type CellProps = {
  cell: Cell;
};

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div
      className={`w-[64px] h-[64px] flex justify-center items-center bg-${cell.color}`}
    ></div>
  );
};

export default CellComponent;
