import React, { useState } from "react";
import { Button } from "antd";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { Board } from "../components/Board";
import { TileMeta } from "../models/Tile";

import "./style.less";

const tileCountPerRowColumn = 4;

export const AnimateIndexes = () => {
  const [tiles, setTiles] = useState<TileMeta[]>([]);
  const [locked, setLock] = useState(false);

  const handleAnimateRow = () => {
    initializeAnimation();

    for (let index = 0; index < tileCountPerRowColumn; index += 1) {
      const timeout = index * 1000;
      setTimeout(() => {
        setTiles([
          ...tiles,
          { position: [index, 0], value: index, id: index + 1 },
        ]);
      }, timeout);
    }
  };

  const handleAnimateColumn = () => {
    initializeAnimation();

    for (let index = 0; index < tileCountPerRowColumn; index += 1) {
      const timeout = index * 1000;
      setTimeout(() => {
        setTiles([
          ...tiles,
          { position: [0, index], value: index, id: index + 1 },
        ]);
      }, timeout);
    }
  };

  const handleReset = () => {
    setTiles([]);
  };

  const initializeAnimation = () => {
    handleReset();
    setLock(true);

    const timeout = tileCountPerRowColumn * 1000;
    setTimeout(() => {
      setLock(false);
    }, timeout);
  };

  return (
    <>
      <Board tiles={tiles} tileCount={tileCountPerRowColumn} />
      <div className="menu">
        <Button
          type="primary"
          size="large"
          onClick={handleAnimateRow}
          icon={<BsFillPlayFill size="1.5em" />}
          disabled={locked}
        >
          Row
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={handleAnimateColumn}
          icon={<BsFillPlayFill size="1.5em" />}
          disabled={locked}
        >
          Column
        </Button>
        <Button
          size="large"
          onClick={handleReset}
          icon={<BsFillStopFill size="1.5em" />}
          disabled={locked}
        >
          Reset
        </Button>
      </div>
    </>
  );
};
