import React from 'react'

const Badge = ({text, className}) => {
  return (
    <>
    <div className={`py-0.5 md:py-2 px-2 md:px-8 bg-[#262626] text-white font-bold text-center text-[10px] md:text-sm md:w-[92px] ${className}`}>{text}</div>
    </>
  )
}

export default Badge