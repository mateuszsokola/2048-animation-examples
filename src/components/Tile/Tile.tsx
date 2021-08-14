import React, { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { usePrevProps } from "../../hooks/usePrevProps";
import { useTileContainer } from "../../hooks/useTileContainer";
import "./tile.less";

type Props = {
  value: number;
  position: [number, number];
  zIndex: number;
};

export const Tile = ({ value, position, zIndex }: Props) => {
  const [boardLength, tileCount] = useTileContainer();
  const [scale, setScale] = useState(1);

  const withinBoardBoundaries =
    position[0] < tileCount && position[1] < tileCount;
  invariant(withinBoardBoundaries, "Tile out of bound");

  const prevValue = usePrevProps<number>(value);
  const prevCoords = usePrevProps<[number, number]>(position);

  const isNew = prevCoords === undefined;
  const hasChanged = prevValue !== value;
  const shallAnimate = isNew || hasChanged;

  useEffect(() => {
    if (shallAnimate) {
      setScale(1.1);
      setTimeout(() => setScale(1), 250);
    }
  }, [shallAnimate, scale]);

  const positionToPixels = (position: number) => {
    return (position / tileCount) * (boardLength as number);
  };

  const style = {
    top: positionToPixels(position[1]),
    left: positionToPixels(position[0]),
    transform: `scale(${scale})`,
    zIndex,
  };

  return (
    <div className={`tile tile-${value}`} style={style}>
      {value}
    </div>
  );
};
