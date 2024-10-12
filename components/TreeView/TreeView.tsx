import React from "react";
import MenuList from "./MenuList";
import { BiMinus, BiPlus } from "react-icons/bi";
import menus from "@/utils/constant";

type MenuItem = {
  label: string;
  to: string;
  children?: MenuItem[];
};
type MenuStructure = MenuItem[];

const TreeView = () => {
  return (
    <div className="w-1/4 bg-blue-400 h-screen py-5">
      <MenuList lists={menus} />
    </div>
  );
};

export default TreeView;
