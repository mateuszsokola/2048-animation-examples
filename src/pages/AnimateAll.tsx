import React, { useState } from "react";
import { Button } from "antd";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { Board } from "../components/Board";
import { TileMeta } from "../models/Tile";

import "./style.less";

export const AnimateAll = () => {
  const [tiles, setTiles] = useState<TileMeta[]>([]);

  const handleInit = () => {
    setTiles([
      { position: [0, 1], value: 2, id: 1 },
      { position: [2, 1], value: 2, id: 2 },
    ]);
  };

  const handleAnimateSlide = () => {
    if (tiles.length === 0) {
      return;
    }

    setTiles([
      { position: [0, 1], value: 2, id: 1 },
      { position: [0, 1], value: 2, id: 2 },
    ]);
  };

  const handleAnimateMerge = () => {
    if (tiles.length === 0) {
      return;
    }

    setTiles([{ position: [0, 1], value: 4, id: 1 }]);
  };

  const handleReset = () => {
    setTiles([]);
  };

  return (
    <>
      <Board tiles={tiles} tileCount={3} />
      <div className="menu">
        <Button
          type="primary"
          size="large"
          onClick={handleInit}
          icon={<BsFillPlayFill size="1.5em" />}
        >
          Init (1)
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={handleAnimateSlide}
          icon={<BsFillPlayFill size="1.5em" />}
        >
          Slide (2)
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={handleAnimateMerge}
          icon={<BsFillPlayFill size="1.5em" />}
        >
          Merge (3)
        </Button>
        <Button
          size="large"
          onClick={handleReset}
          icon={<BsFillStopFill size="1.5em" />}
        >
          Reset
        </Button>
      </div>
    </>
  );
};
