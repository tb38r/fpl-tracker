import React from "react";

const DrawerTitle = (props) => {
  return (
    <div
      className="drawer-theme drawerTitle capitalize font-mono md:font-bold lg:font-extrabold  flex text-justify justify-center m
         w-full text-base md:text-xl h-[2vh] text-white"
    >
      {props.name}
    </div>
  );
};

export default DrawerTitle;
