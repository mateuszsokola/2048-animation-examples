import { pixelSize } from "./Board";

export type TileMeta = {
  id: number;
  position: [number, number];
  value: number;
  mergeWith?: number;
};

export const tileMargin = 2 * pixelSize;

export const tileMultiplier = 12.5;

export const tileSize = pixelSize * tileMultiplier + tileMargin;
