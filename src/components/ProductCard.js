import React from "react";


const ProductCard = props => {
  return(
<div className="card-4">
  <img src={props.info.imgUrl} alt= "no se encontro" ></img>
  <div className="card-body">
    <h5 className= "card-title">  {props.info.name}  </h5>
    <p className = "card-text">$ {props.info.price}</p> 
    <p className = "card-text">{props.info.description}</p> 
  </div>
</div>
  );

  }

export default ProductCard;
