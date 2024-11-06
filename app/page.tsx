import ImageComparision from "@/components/ImageComparisionSlider/ImageComparision";
import ImageSlider from "@/components/ImageSlider";
import LightDarkMode from "@/components/LightDarkMode";
import LoadMoreButton from "@/components/LoadMoreButton";
import QrCodeGenrator from "@/components/QrCodeGenrator";
import RandomColor from "@/components/RandomColor";
import StarRating from "@/components/StarRating";
import TreeView from "@/components/TreeView/TreeView";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <RandomColor /> */}
      {/* <StarRating noOfStar={7} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreButton
        url={"https://dummyjson.com/products?"}
        limit={10}
        skip={10}
      /> */}
      {/* <TreeView  /> */}
      {/* <QrCodeGenrator /> */}
      {/* <LightDarkMode /> */}
      <ImageComparision
        image1={
          "https://images.unsplash.com/photo-1715929178877-eb915fca0fac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        image2={
          "https://plus.unsplash.com/premium_photo-1669867124806-f84dd1a9e87c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
}
