import React, { useState } from "react";
import { Select } from "antd";
import { AnimateAll, AnimateEaseInOut, AnimateMergeAndSlide } from "./pages";

import "./App.less";

export const App = () => {
  const [value, setValue] = useState<string>("default");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const renderContent = () => {
    switch (value) {
      case "all":
        return <AnimateAll />;
      case "merge-and-slide":
        return <AnimateMergeAndSlide />;
      default:
        return <AnimateEaseInOut />;
    }
  };

  const renderSelect = () => {
    return (
      <div className="form-item">
        <div className="form-item-label">Animation:</div>
        <div className="form-item-value">
          <Select defaultValue="default" onChange={handleChange} size="large">
            <Select.Option value="default">Scale In-Out</Select.Option>
            <Select.Option value="merge-and-slide">
              Slide and Merge
            </Select.Option>
            <Select.Option value="all">All</Select.Option>
          </Select>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {renderSelect()}
      {renderContent()}
    </div>
  );
};
