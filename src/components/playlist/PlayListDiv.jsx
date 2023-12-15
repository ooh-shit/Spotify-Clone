import React, { useState } from "react";
import PlayList from "./playlist";

function PlayDiv()
{
  const [greet,setGreet] = useState('')
  function greeting()
  {
    var time = new Date().getHours()
    if(time>=0 && time<=12)
    {
      setGreet("Morning")
    }
    else if(time>12 && time<16)
    {
      setGreet("Afternoon")
    }
    else
    {
      setGreet("Evening")
    }
  }

  return <div className="Albums" onLoad={greeting}>
  <h1>Good {greet}</h1>
    <div className="playDiv">
      <PlayList img = "https://picsum.photos/200/200?random=0" name = "Damn"/>
      <PlayList img = "https://picsum.photos/200/200?random=1" name = "End"/>
      <PlayList img = "https://picsum.photos/200/200?random=2" name = "DEAD"/>
      <PlayList img = "https://picsum.photos/200/200?random=3" name = "Phonks"/>
      <PlayList img = "https://picsum.photos/200/200?random=4" name = "Ded"/>
      <PlayList img = "https://picsum.photos/200/200?random=5" name = "Mongus"/>
    </div>
  </div>
}

export default PlayDiv