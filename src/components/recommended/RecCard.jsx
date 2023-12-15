import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RecCard(props)
{
  return <div className="recCard">

    <div className="recCardImg">
      <img src = {props.img} />
      <div className ="recIcon">
        <FontAwesomeIcon icon={faPlay}/>
      </div>
    </div>
    <h2>{props.title}</h2>
    <p>{props.descp}</p>
  </div>
}

export default RecCard