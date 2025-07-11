import React from 'react'
import { GrCaretNext } from "react-icons/gr";

const NextArrw = (props) => {

    const { onClick } = props;
  return (
    <div
      className={"text-black text-3xl absolute right-2 top-1/2 -translate-y-1/2 z-20"}
      onClick={onClick}
    ><GrCaretNext/></div>
  )
}

export default NextArrw