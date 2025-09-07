import React, { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";

const Catagories = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubmenu] = useState(false);

  const [menu2, setMenu2] = useState(false);
  const [subMenu2, setSubmenu2] = useState(false);

  const [menu3, setMenu3] = useState(false);
  const [subMenu3, setSubmenu3] = useState(false);

  const [menu4, setMenu4] = useState(false);
  const [subMenu4, setSubmenu4] = useState(false);

  const [menu5, setMenu5] = useState(false);
  const [subMenu5, setSubmenu5] = useState(false);
  return (
    <>
      <div className="py-3 hidden lg:block">
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
          <button className={"cursor-pointer"} onClick={() => setMenu3(!menu3)}>
            <div className="flex items-center justify-between w-[370px]">
              <p className={"font-normal text-base text-[#767676] pb-1"}>
                Category 3
              </p>

              {menu3 ? (
                <FaArrowDownLong className={"text-[#767676] text-[12px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[12px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-3 
              ${menu3 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu3(!subMenu3)}
            >
              <div className="flex justify-between items-center w-[358px]">
                <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu3 ? (
                  <HiOutlineMinusSm className={"text-[#767676]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu3 ? "block" : "hidden"}`}
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

        {/* ======== 4 ========== */}
        <div className="border-b border-b-[#d3d3d3] py-4">
          <button className={"cursor-pointer"} onClick={() => setMenu4(!menu4)}>
            <div className="flex items-center justify-between w-[370px]">
              <p className={"font-normal text-base text-[#767676] pb-1"}>
                Category 4
              </p>

              {menu4 ? (
                <FaArrowDownLong className={"text-[#767676] text-[12px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[12px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-3 
              ${menu4 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu4(!subMenu4)}
            >
              <div className="flex justify-between items-center w-[358px]">
                <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu4 ? (
                  <HiOutlineMinusSm className={"text-[#767676]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu4 ? "block" : "hidden"}`}
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

        {/* ========= 5 ======= */}
        <div className="border-b border-b-[#d3d3d3] py-4">
          <button className={"cursor-pointer"} onClick={() => setMenu5(!menu5)}>
            <div className="flex items-center justify-between w-[370px]">
              <p className={"font-normal text-base text-[#767676] pb-1"}>
                Category 5
              </p>

              {menu5 ? (
                <FaArrowDownLong className={"text-[#767676] text-[12px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[12px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-3 
              ${menu5 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu5(!subMenu5)}
            >
              <div className="flex justify-between items-center w-[358px]">
                <h3 className={"font-normal text-base text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu5 ? (
                  <HiOutlineMinusSm className={"text-[#767676]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu5 ? "block" : "hidden"}`}
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


      {/* ===============responsive=============== */}
      <div className="pb-10 lg:pb-0 pt-5 lg:hidden">
        <h3 className={"font-bold text-md text-[#262626] pb-1"}>
          Shop by Category
        </h3>

        <div className="border-b border-b-[#d3d3d3] py-2">
          <button className={"cursor-pointer"} onClick={() => setMenu(!menu)}>
            <div className="flex items-center justify-between w-[170px]">
              <p className={"font-normal text-[14px] text-[#767676] pb-1"}>
                Category 1
              </p>

              {menu ? (
                <FaArrowDownLong className={"text-[#767676] text-[11px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[11px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-1 
              ${menu ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu(!subMenu)}
            >
              <div className="flex justify-between items-center w-[150px]">
                <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu ? (
                  <HiOutlineMinusSm className={"text-[#767676] text-[13px]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676] text-[13px]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>

        {/* ======2==== */}
        <div className="border-b border-b-[#d3d3d3] py-2">
          <button className={"cursor-pointer"} onClick={() => setMenu2(!menu2)}>
            <div className="flex items-center justify-between w-[170px]">
              <p className={"font-normal text-[14px] text-[#767676] pb-1"}>
                Category 2
              </p>

              {menu2 ? (
                <FaArrowDownLong className={"text-[#767676] text-[11px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[11px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-1 
              ${menu2 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu2(!subMenu2)}
            >
              <div className="flex justify-between items-center w-[150px]">
                <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu2 ? (
                  <HiOutlineMinusSm className={"text-[#767676] text-[13px]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676] text-[13px]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu2 ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>

        {/* ====3==== */}
        <div className="border-b border-b-[#d3d3d3] py-2">
          <button className={"cursor-pointer"} onClick={() => setMenu3(!menu3)}>
            <div className="flex items-center justify-between w-[170px]">
              <p className={"font-normal text-[14px] text-[#767676] pb-1"}>
                Category 3
              </p>

              {menu3 ? (
                <FaArrowDownLong className={"text-[#767676] text-[11px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[11px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-1 
              ${menu3 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu3(!subMenu3)}
            >
              <div className="flex justify-between items-center w-[150px]">
                <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu3 ? (
                  <HiOutlineMinusSm className={"text-[#767676] text-[13px]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676] text-[13px]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu3 ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>

        {/* =====4===== */}
        <div className="border-b border-b-[#d3d3d3] py-2">
          <button className={"cursor-pointer"} onClick={() => setMenu4(!menu4)}>
            <div className="flex items-center justify-between w-[170px]">
              <p className={"font-normal text-[14px] text-[#767676] pb-1"}>
                Category 4
              </p>

              {menu4 ? (
                <FaArrowDownLong className={"text-[#767676] text-[11px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[11px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-1 
              ${menu4 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu4(!subMenu4)}
            >
              <div className="flex justify-between items-center w-[150px]">
                <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu4 ? (
                  <HiOutlineMinusSm className={"text-[#767676] text-[13px]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676] text-[13px]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu4 ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>

        {/* =====5==== */}
        <div className="border-b border-b-[#d3d3d3] py-2">
          <button className={"cursor-pointer"} onClick={() => setMenu5(!menu5)}>
            <div className="flex items-center justify-between w-[170px]">
              <p className={"font-normal text-[14px] text-[#767676] pb-1"}>
                Category 5
              </p>

              {menu ? (
                <FaArrowDownLong className={"text-[#767676] text-[11px]"} />
              ) : (
                <FaArrowRightLong className={"text-[#767676] text-[11px]"} />
              )}
            </div>
          </button>
          {/* ========== menu ======= */}
          <div
            className={`pl-3 pb-1 
              ${menu5 ? "block" : "hidden"}`}
          >
            {/* ======== sub menu===== */}
            <button
              className={"cursor-pointer"}
              onClick={() => setSubmenu5(!subMenu5)}
            >
              <div className="flex justify-between items-center w-[150px]">
                <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                  Menu
                </h3>
                {subMenu5 ? (
                  <HiOutlineMinusSm className={"text-[#767676] text-[13px]"} />
                ) : (
                  <HiOutlinePlusSm className={"text-[#767676] text-[13px]"} />
                )}
              </div>
            </button>
            <div
              className={`pl-3 
              ${subMenu5 ? "block" : "hidden"}`}
            >
              <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
                Sub menu
              </h3>
            </div>
            {/* ======== sub menu end===== */}
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
            <h3 className={"font-normal text-sm text-[#767676] pb-1"}>
              Menu
            </h3>
          </div>
        </div>
       
        </div>
    </>
  );
};

export default Catagories;
