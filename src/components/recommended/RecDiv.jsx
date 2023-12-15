import React from "react";
import RecCard from "./RecCard";
import data from "./data";

function createRecCard(item)
{
  return <RecCard title = {item.title}  descp = {item.description} img = {item.image}/>
} 
function RecDiv()
{
  return <div className="RecDiv">
    <h1>{data[0][0]["GenTitle"]}</h1>
    <div className="recCarddiv">
      {data[0][0]["Ablums"].map(createRecCard)}
    </div>
  </div>
}

export default RecDiv