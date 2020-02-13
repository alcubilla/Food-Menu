import React from "react";
import ProductCard from "./ProductCard";

const Menu = (props) => 
{
  const product = props.info.map(product => (
   
        <ProductCard info={product} key={product.id}  />
   
  ));

  return <div className="row">{product}</div>;

  }

export default Menu;
