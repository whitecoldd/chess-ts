import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFiguresComponent: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="p-8  bg-amber-300 h-full">
      <h3>{title}</h3>
      <div  className="flex flex-row">
        {figures.map((figure) => (
          <div key={figure.id} >
            {figure.name}
            {figure.logo && (
              <img
                alt={figure.name}
                src={figure.logo}
                className="w-[56px] h-[56px] relative"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFiguresComponent;
