import React from 'react'
import { GrCaretNext } from "react-icons/gr";

const NextArrw = (props) => {

    const { onClick } = props;
  return (
    <div
      className={"text-red"}
      onClick={onClick}
    ><GrCaretNext/></div>
  )
}

export default NextArrw