import ImageSlider from "@/components/ImageSlider";
import LoadMoreButton from "@/components/LoadMoreButton";
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
      <TreeView  />
    </div>
  );
}
