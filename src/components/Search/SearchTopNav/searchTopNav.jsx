import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBackspace, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

function SearchTopNav()
{
  return <div className="SearchtopNav">
    <div className="leftBut">
      <button><FontAwesomeIcon icon={faArrowLeft}/></button>
      <button><FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
    <div>
      <h1>SEARCHBOX</h1>
    </div>
    <div className="rightBut">
      <button><FontAwesomeIcon icon={faBell}/></button>
      <button><FontAwesomeIcon icon={faUser}/></button>
    </div>
  </div>
}

export default SearchTopNav