import React from 'react'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <>
    <Link to={"/"}>
        <div className="bg-[url(/src/assets/banner.png)] h-[600px] bg-no-repeat bg-center bg-cover">
        
        </div>
    </Link>
    </>
  )
}

export default Banner