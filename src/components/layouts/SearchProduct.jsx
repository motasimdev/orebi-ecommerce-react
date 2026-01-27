import React from "react";
import { Link } from "react-router";

const SearchProduct = ({products}) => {
  const { price, thumbnail, title, id } = products || {};
  return (
    <>
      <Link
        to={`/product/${id}`}
        className=" bg-white px-5 flex items-center gap-5 justify-between border border-gray-200"
      >
        <img className="w-15" src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
      </Link>
    </>
  );
};

export default SearchProduct;
