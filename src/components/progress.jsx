//@ts-check
import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";

const Progress = ({ percent, setPercent, stopped, setStopped }) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      console.log({ percent });
      if (percent < 75) {
        setPercent(
          (percent) => percent + parseInt((Math.random() * 10).toFixed(0))
        );
      } else {
        clearTimeout(interval);
        setStopped(true);
        console.log({ percent });
      }
    }, 100);
    return () => {
      clearTimeout(interval);
      setStopped(false);
    };
  }, [percent]);

  return (
    <div className="progress">
      <h4>
        {stopped
          ? "Error preparing files for download"
          : "Preparing files for download"}
      </h4>
      <Line percent={percent} strokeWidth={2} trailWidth={2}></Line>
    </div>
  );
};

export default Progress;
