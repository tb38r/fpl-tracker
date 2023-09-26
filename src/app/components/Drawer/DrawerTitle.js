import React from 'react'

const DrawerTitle = (props) => {
  return (
    <div className="drawerTitle capitalize font-mono font-semibold md:font-bold lg:font-extrabold  flex text-justify justify-center m
         w-full text-base md:text-xl h-[2vh]">{props.name}</div>
  )
}

export default DrawerTitle