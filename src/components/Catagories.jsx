import React, { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";

const Catagories = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubmenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [subMenu2, setSubmenu2] = useState(false);
  return (
    <>
      <div className="py-5">
        <h3 className={"font-bold text-xl text-[#262626] pb-5"}>
          Shop by Category
        </h3>

        <div className="border-b border-b-[#d3d3d3] py-4">
          <button className={"cursor-pointer"} onClick={() => setMenu(!menu)}>
            <div className="flex items-center justify-between w-[370px]">
              <p className={"font-normal text-base text-[#767676] pb-1"}>
                Category 1
              </p>

              {menu ? (
                <FaArrowDownLong className={"text-[#767676] text-[12px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[12px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-3 
              ${menu ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu(!subMenu)}
            >
              <div className="flex justify-between items-center w-[358px]">
                <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu ? (
                  <HiOutlineMinusSm className={"text-[#767676]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>

        {/* =======2======== */}
        <div className="border-b border-b-[#d3d3d3] py-4">
          <button className={"cursor-pointer"} onClick={() => setMenu2(!menu2)}>
            <div className="flex items-center justify-between w-[370px]">
              <p className={"font-normal text-base text-[#767676] pb-1"}>
                Category 2
              </p>

              {menu2 ? (
                <FaArrowDownLong className={"text-[#767676] text-[12px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[12px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-3 
              ${menu2 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu2(!subMenu2)}
            >
              <div className="flex justify-between items-center w-[358px]">
                <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu2 ? (
                  <HiOutlineMinusSm className={"text-[#767676]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu2 ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>

        {/* ===========3========== */}
        <div className="border-b border-b-[#d3d3d3] py-4">
          <button className={"cursor-pointer"} onClick={() => setMenu2(!menu2)}>
            <div className="flex items-center justify-between w-[370px]">
              <p className={"font-normal text-base text-[#767676] pb-1"}>
                Category 2
              </p>

              {menu2 ? (
                <FaArrowDownLong className={"text-[#767676] text-[12px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[12px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-3 
              ${menu2 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu2(!subMenu2)}
            >
              <div className="flex justify-between items-center w-[358px]">
                <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu2 ? (
                  <HiOutlineMinusSm className={"text-[#767676]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu2 ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-base text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagories;
