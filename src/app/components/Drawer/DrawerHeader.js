import React from "react";

const DrawerHeader = (props) => {
  return (
    <div className=" text-white flex text-justify justify-center h-[4vh] 
    items-center capitalize font-mono font-semibold 
    md:font-bold lg:font-extrabold w-full text-sm md:text-2xl lg:text-4xl drawer-theme">
      {props.name}
    </div>
  );
};

export default DrawerHeader;
//