import React from 'react'

const Badge = ({text, className}) => {
  return (
    <>
    <div className={`py-2 px-8 bg-[#262626] text-white font-bold text-center text-sm w-[92px] ${className}`}>{text}</div>
    </>
  )
}

export default Badge