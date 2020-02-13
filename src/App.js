import React, {Component} from "react";
import Menu from "./components/Menu"
import ShopCart from "./components/ShopCart";
import productsData from "./components/productsData"




class App extends Component
{
  constructor(){
    super();
    this.state ={
      elemento : productsData
    }
  }

  render(){
    const productos = [this.state.elemento[0], this.state.elemento[1], this.state.elemento[2]];
    return( 
      <div className="container">
        <div className="row">
          <div className="col-8 "> 
            <Menu info={productsData}/>
          </div>     
          <div className="col"> 
            <ShopCart  info={productos.length} selecteds= {productos}/>
          </div>
        </div>
      </div> 
    ); 
  
  }
}
export default App;