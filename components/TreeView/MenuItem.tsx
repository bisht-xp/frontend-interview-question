"use client";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import MenuList from "./MenuList";

type MenuItemList = {
  label: string;
  to: string;
  children?: MenuItemList[];
};

interface MenuItemProps {
  label: string;
  to: string;
  children?: MenuItemList[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to, children }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="mb-5">
      <div className="flex justify-start items-center gap-5">
        <p className="text-white font-semibold text-xl">{label}</p>
        {children && children.length !== 0 && (
          <div>
            {!isSelected ? (
              <BiPlus
                onClick={() => setIsSelected(true)}
                size={22}
                className="text-white"
              />
            ) : (
              <BiMinus
                onClick={() => setIsSelected(false)}
                size={22}
                className="text-white"
              />
            )}
          </div>
        )}
      </div>
      {isSelected && children && children?.length !== 0 && (
        <div className="">
          <MenuList lists={children} />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
