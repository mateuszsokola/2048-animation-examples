import React, { useEffect, useRef, useState } from "react";
import { TileContainer } from "../../context/TileContainer";
import { boardMargin, size } from "../../models/Board";
import { TileMeta, tileSize } from "../../models/Tile";
import { Grid } from "../Grid";
import { Tile } from "../Tile";
import "./board.less";

type Props = {
  tiles: TileMeta[];
  tileCount: number;
};

export const Board = ({ tiles, tileCount = size }: Props) => {
  const tileManagerRef = useRef<HTMLDivElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (tileManagerRef.current !== null) {
      setLength((tileManagerRef.current as HTMLDivElement).offsetWidth);
    }
  }, []);

  const renderTiles = () => {
    if (length === 0) {
      return null;
    }

    const tileList = tiles.map(({ id, ...restProps }) => (
      <Tile key={`tile-${id}`} {...restProps} zIndex={id} />
    ));

    return <>{tileList}</>;
  };

  const width = tileSize * tileCount + boardMargin;

  return (
    <div className="board" style={{ width }}>
      <TileContainer length={length} tileCount={tileCount}>
        <div className="tile-container" ref={tileManagerRef}>
          {renderTiles()}
        </div>
      </TileContainer>
      <Grid tileCount={tileCount} />
    </div>
  );
};
