import React from 'react'

const DrawerHeader = (props) => {
  return (
    <div className="flex text-justify justify-center h-[4vh] items-center capitalize font-mono font-semibold md:font-bold lg:font-extrabold w-full text-base md:text-xl">{props.name}</div>

  )
}

export default DrawerHeader