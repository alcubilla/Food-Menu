import React from "react";

const ShopCart = (props) => {
 

const valor = props.selecteds.reduce((x, y) => {
  return x + y.price},0);
// constante llamada valor
//props.selecteds trae el arreglo de los productos seleccionados
// aplico el reduce y  que sume los .price de productsData 



if (props.info >0)
{

return( <><p>Número de artículos = {props.info}  </p>
        <p>Total= $ {valor}</p></>
);

} 
else{
  return (<p>No hay nada en el carrito</p>);
}

}
export default ShopCart;




