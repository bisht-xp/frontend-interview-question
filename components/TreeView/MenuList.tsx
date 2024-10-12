import React from "react";
import MenuItem from "./MenuItem";
// import MenuItem from "./MenuItem";

type MenuItem = {
  label: string;
  to: string;
  children?: MenuItem[];
};

type MenuStructure = MenuItem[];

interface MenuListProps {
  lists: MenuStructure;
}

const MenuList: React.FC<MenuListProps> = ({ lists }) => {
  return (
    <div className="px-5">
      {lists && lists.length !== 0
        ? lists.map((item) => (
            <MenuItem label={item.label} to={item.to} children={item?.children} />
          ))
        : null}
    </div>
  );
};

export default MenuList;
