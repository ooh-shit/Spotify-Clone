import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function PlayList(props)
{

  
  const play = <FontAwesomeIcon icon={faPlay} />
  const pause = <FontAwesomeIcon icon={faPause}/>

  const[isActive,setisActive] = useState(false)
  
  function handelClick()
  {
    setisActive(!isActive)
  }

  return <div className="playList">
    <img src= {props.img}/>
    <div className="playItems">
      <h2>{props.name}</h2>
      <div className="icon" onClick={handelClick}>
          {isActive?pause:play}
      </div>
    </div>
  </div>
}

export default PlayList