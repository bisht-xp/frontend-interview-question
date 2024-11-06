"use client";

import React, { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";

type Props = {};

const QrCodeGenrator = (props: Props) => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	}

	const handleClick = () => {
		setQrCode(input);
	}

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-10">
        <h1 className="text-3xl font-bold ">Qr code Generator</h1>
      </div>
      <div className="flex justify-between items-center gap-5 w-1/2">
        <input placeholder="Type anything here" onChange={handleInput} className="border p-3 w-full rounded-lg" />
        <button className="px-10 py-3 bg-black text-white rounded-lg" onClick={handleClick}>
          Generate
        </button>
      </div>
      <div className="w-1/2 h-1/2 mt-10">
        <QRCode
          size={256}
          value={qrCode}
          viewBox={`0 0 256 256`}
          className="h-1/2 w-1/2 mx-auto"
        />
      </div>
    </div>
  );
};

export default QrCodeGenrator;
