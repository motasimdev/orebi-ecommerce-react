import React from 'react'
import { GrCaretPrevious } from "react-icons/gr";

const PrevArrw = (props) => {

    const {onClick } = props;
  return (
    <div
      className={"text-black text-3xl absolute left-2 top-1/2 -translate-y-1/2 z-20"}
      onClick={onClick}
    ><GrCaretPrevious/></div>
  )
}

export default PrevArrw