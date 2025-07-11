import React from 'react'
import { GrCaretPrevious } from "react-icons/gr";

const PrevArrw = (props) => {

    const {onClick } = props;
  return (
    <div
      className={"bg-red-800 text-center text-white"}
      onClick={onClick}
    ><GrCaretPrevious/></div>
  )
}

export default PrevArrw