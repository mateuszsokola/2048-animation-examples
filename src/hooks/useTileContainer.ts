import { useContext } from "react";
import { TileContainerContext } from "../context/TileContainer";

/**
 * Returns the data of the Tile Container.
 *
 * @returns {number}
 */
export const useTileContainer = () => {
  const { length, tileCount } = useContext(TileContainerContext);

  return [length, tileCount] as [number, number];
};
