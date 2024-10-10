"use client";
import React, { useEffect, useState } from "react";

type Props = {
  url: string;
  limit: number;
  skip: number;
};

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const LoadMoreButton = ({ url, limit, skip }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [skipPage, setSkipPage] = useState(skip);

  const getProducts = async (getUrl: string, skip: number) => {
    try {
      setIsLoading(true);

      console.log("skip and limit: ", skip, limit);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail`
      );
      const data = await response.json();
      if (data) {
        console.log("data: ", data.products);
        setProducts((prev) => [...prev, ...data.products]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("errorMessgae: ", error);
      setErrorMsg("Something went wrong!");
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    const localSkip = skipPage + 10;
    setSkipPage((prev) => prev + 10);
    // console.log("")
    getProducts(url, localSkip);
  };

  useEffect(() => {
    if (url !== "" && skip !== null) {
      getProducts(url, skip);
    }
  }, []);

  console.log("setProduct: ", typeof products);
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-5">
        {products && products.length !== 0
          ? products.map((product, index) => (
              <div key={product.id} className="border-2 border-black w-full h-fit">
                <img src={product.thumbnail} alt={product.title} />
                <div className="text-center font-medium text-xl mb-3">{product.title}</div>
                <p className="text-center font-semibold text-2xl mb-3">{product.price}</p>
              </div>
            ))
          : null}
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <button onClick={handleClick} disabled={products.length >= 30} className="px-3 py-2 bg-black text-white rounded-lg mt-10">Load More</button>
        {products.length >= 30 && <p>100 items loaded</p>}
      </div>
    </div>
  );
};

export default LoadMoreButton;
