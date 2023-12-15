import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBackspace, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

function TopNav()
{
  return <div className="topNav">
    <div className="leftBut">
      <button><FontAwesomeIcon icon={faArrowLeft}/></button>
      <button><FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
    <div className="rightBut">
      <button><FontAwesomeIcon icon={faBell}/></button>
      <button><FontAwesomeIcon icon={faUser}/></button>
    </div>
  </div>
}

export default TopNav