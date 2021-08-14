import React from "react";
import { size } from "../models/Board";

export const TileContainerContext = React.createContext({
  length: 0,
  tileCount: size,
});

type Props = {
  length: number;
  tileCount: number;
  children: any;
};

export const TileContainer = ({
  children,
  length = 0,
  tileCount = size,
}: Props) => {
  return (
    <TileContainerContext.Provider value={{ length, tileCount }}>
      {children}
    </TileContainerContext.Provider>
  );
};
