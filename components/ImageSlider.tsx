"use client";
import React, { useEffect, useState } from "react";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircle,
} from "react-icons/io5";

type Props = {
  url: string;
  page: string;
  limit: string;
};

interface ImageType {
  id: string;
  author: string;
  download_url: string;
  height: number;
  url: string;
  width: number;
}

const ImageSlider = ({ url, page, limit }: Props) => {
  const [imagesData, setImagesData] = useState<Array<ImageType>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [currentSlider, setCurrentSlider] = useState<number>(5);

  const getData = async (getUrl: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        console.log("data: ", data);
        setImagesData(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error: ", error);
      setError("Something went wrong!!!!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") getData(url);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl text-blue-500 text-center mt-2 font-black mb-10 ">
        Image Slider
      </h1>
      {isLoading && (
        <div className="font-semibold text-2xl text-center">
          <span>Loading....</span>
        </div>
      )}
      {error && error.length !== 0 && (
        <div className="font-semibold text-2xl text-center">
          <span>{error}</span>
        </div>
      )}
      <div className="relative w-[50%] h-[50%] mt-10 z-0">
        <div className="flex items-center justify-between w-full relative">
          <IoChevronBackCircleSharp
            className="text-black absolute z-10 left-5 "
            size={30}
            onClick={() => {
              console.log("currentSlider: ", currentSlider);
              currentSlider >= 0 &&
                setCurrentSlider((prev) =>
                  prev === 0 ? imagesData.length - 1 : prev - 1
                );
            }}
          />
          {imagesData && imagesData.length !== 0
            ? imagesData.map((image, index) => (
                <div
                  key={image?.id}
                  className={`${
                    currentSlider === index ? "block z-0" : "hidden z-0"
                  }`}
                >
                  <img
                    src={image?.download_url}
                    alt={`image-${image?.id}`}
                    className="z-0"
                  />
                </div>
              ))
            : null}
          <IoChevronForwardCircle
            className="text-black z-20 absolute right-5"
            size={30}
            onClick={() =>
              currentSlider < imagesData.length - 1 &&
              setCurrentSlider((prev) => prev + 1)
            }
          />
          <div className="flex justify-center items-center absolute bottom-4 left-0 right-0 text-center">
            {imagesData &&
              imagesData.length !== 0 &&
              imagesData.map((image, index) => (
                <div
                  className={`w-3 h-3 rounded-full ml-2 ${
                    currentSlider === index ? "bg-black" : "bg-black/30"
                  }`}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
