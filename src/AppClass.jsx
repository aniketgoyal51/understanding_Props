import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  

  // code here

  render(props){
    const imgdata= this.props.myData()
    return(
      <>
        <h1>Kalvium Gallery</h1>
        <div>
          {imgdata.map((item)=>{
           return <img key={item.id} src={item.img} alt="" />
          })}
        </div>
      </>
    )
  }
}
