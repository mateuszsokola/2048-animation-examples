import React, { useState } from "react";
import { Button } from "antd";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { Board } from "../components/Board";
import { TileMeta } from "../models/Tile";

import "./style.less";

export const AnimateMergeAndSlide = () => {
  const [tiles, setTiles] = useState<TileMeta[]>([
    { position: [0, 1], value: 2, id: 1 },
    { position: [2, 1], value: 2, id: 2 },
  ]);

  const handleAnimateSlide = () => {
    setTiles([
      { position: [0, 1], value: 2, id: 1 },
      { position: [0, 1], value: 2, id: 2 },
    ]);
  };

  const handleAnimateMerge = () => {
    setTiles([{ position: [0, 1], value: 4, id: 1 }]);
  };

  const handleReset = () => {
    setTiles([
      { position: [0, 1], value: 2, id: 1 },
      { position: [2, 1], value: 2, id: 2 },
    ]);
  };

  return (
    <>
      <Board tiles={tiles} tileCount={3} />
      <div className="menu">
        <Button
          type="primary"
          size="large"
          onClick={handleAnimateSlide}
          icon={<BsFillPlayFill size="1.5em" />}
        >
          Animate Slide
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={handleAnimateMerge}
          icon={<BsFillPlayFill size="1.5em" />}
        >
          Animate Merge
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
