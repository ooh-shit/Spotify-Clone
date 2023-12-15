import React, { useState } from "react";

function SearchCard(props)
{

  const[Newcolor,setNewColor] = useState("white")
  function genColor()
  {
    const colors = ['#006551','#7258FE','#1F3265','#E9105B','#E91528','#B02996','#A56653','#D94100','#148B09','#8D67AB','#527BA1','#E0108C','#C29787','#BB5D06','#1F3265','#503750','#777676','#26846A','#BB5D06']
    const randomColor = colors[Math.floor(Math.random()*colors.length)]

    setNewColor(randomColor)
  }

  return <div className="searchCard" onLoad={genColor} style={{backgroundColor : Newcolor}}>
    <div><h1>{props.title}</h1></div>
    <div>
      <img src = {props.ImgUrl}/>
    </div>
  </div>
}

export default SearchCard