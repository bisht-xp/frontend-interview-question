"use client"
import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Image  from "next/image";

interface Props {
  image1: string;
  image2: string;
  width?: string;
  height?: string;
}

const ImageComparision: React.FC<Props> = ({
  image1,
  image2,
  width = "500px",
  height = "400px",
}) => {
  const dimension = {
    width: "500px",
    height: "400px",
  };
  const [isStart, setIsStart] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const mouseDown = () => {
    setIsStart(true);
  }
  const mouseUp = () => {
    setIsStart(false);
  }

  const onMouseMove = (e: MouseEvent) => {
    if(!isStart) return;
    
    if(!overlayRef.current || !sliderRef.current) return;
    
    let pos = getCursorPos(e);

    const imageSides = imageRef.current ? imageRef.current.getBoundingClientRect() : 0;

    if(pos < 0) pos = 0;
    if(pos > imageSides.width) pos = imageSides.width;

    slideImage(pos);

  }


  function slideImage(pos: number) {
    overlayRef.current.style.width = `${pos}px`;
    sliderRef.current.style.left = `${pos}px`;
  }




  // console.log(imageRef.current.getBoundingClientRect());

  const getCursorPos = (e: MouseEvent) => {
    let imageSides = imageRef.current ? imageRef.current.getBoundingClientRect() : 0;
    let Xpos = e.pageX - imageSides.left;

    // console.log(pageWidth);
    return Xpos;
  }
  
  useEffect(() => {
    window.addEventListener('mouseup', mouseUp, false);
    window.addEventListener('mousemove', onMouseMove, false);
    
    return () => {
      window.removeEventListener('mouseup', mouseUp, false);
      window.removeEventListener('mousemove', onMouseMove, false);
    }
  }, [isStart]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-32 mt-5">Image Comparision Slider</h1>

      <div className="relative">
        <div className="">
          <img src={image1} ref={imageRef} alt="image1" style={dimension}  />
        </div>
        <div className="overlay" style={{ width: "50%" }} ref={overlayRef}>
          <img src={image2} alt="image2" style={{width, height, objectFit: "cover"}} />
        </div>
        <div ref={sliderRef} onMouseDown={mouseDown} onTouchStart={mouseDown} className="w-[40px] h-[40px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize text-white"></div>
      </div>
    </div>
  );
};

export default ImageComparision;
