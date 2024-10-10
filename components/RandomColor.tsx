"use client";
import React, { useState } from "react";

type Props = {};

type ColorType = "Hex" | "RGB";

interface ColorState {
  value: string;
  colorType: ColorType;
}

const RandomColor = (props: Props) => {
  const [colorState, setColorState] = useState<ColorState>({
    value: "#225251",
    colorType: "Hex",
  });

  const handleColorType = (type: ColorType) => {
    setColorState((prev) => ({ ...prev, colorType: type }));
  };

  const generateHexColor = function () {
    const maxVal = 0xffffff;
    const randomColor = Math.floor(Math.random() * maxVal)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    return `#${randomColor}`;
  };

  const generateRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  const generateRandomColor = () => {
    const newColor =
      colorState.colorType === "Hex" ? generateHexColor() : generateRGBColor();
    setColorState((prev) => ({ ...prev, value: newColor }));
  };

  return (
    <div
      style={{ backgroundColor: colorState.value }}
      className={`h-screen w-screen  pt-10`}
    >
      <div className="mb-5">
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleColorType("Hex")}
            className="bg-white px-7 py-3 mx-10 rounded-xl font-semibold"
          >
            Create HEX Color
          </button>
          <button
            onClick={() => handleColorType("RGB")}
            className="bg-white px-7 py-3 mx-10 rounded-xl font-semibold"
          >
            Create RGB Color
          </button>
          <button
            onClick={generateRandomColor}
            className="bg-white px-7 py-3 mx-10 rounded-xl font-semibold"
          >
            Generate Random Color
          </button>
        </div>
      </div>

      <div className="mt-28">
        <h3 className="text-center text-7xl font-bold text-white">
          {colorState.colorType} Color
        </h3>
      </div>
      <div className="mt-28">
        <h1 className="text-center text-9xl font-bold text-black">{colorState.value}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
