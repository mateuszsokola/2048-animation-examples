import React, { useState } from "react";
import { Button } from "antd";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { Board } from "../components/Board";
import { TileMeta } from "../models/Tile";

import "./style.less";

export const AnimateEaseInOut = () => {
  const [tiles, setTiles] = useState<TileMeta[]>([]);

  const handleAnimate = () => {
    setTiles([{ position: [1, 1], value: 2, id: 1 }]);
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
          onClick={handleAnimate}
          icon={<BsFillPlayFill size="1.5em" />}
        >
          Animate
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
