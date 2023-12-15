import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLayerGroup, faSearch} from "@fortawesome/free-solid-svg-icons";

function SideBar()
{
  return <div className="sideBar">
    <div className="sideIcon">
    <FontAwesomeIcon icon= {faHome}  />
    <FontAwesomeIcon icon={faSearch} />
    </div>

    <div className="sideAlbum">
      <FontAwesomeIcon icon={faLayerGroup} id="alIcon" />
      <div className="sidePlayIcons">
        <img src="https://picsum.photos/200?random=8"/>
        <img src="https://picsum.photos/200?random=9"/>
        <img src="https://picsum.photos/200?random=10"/>
        <img src="https://picsum.photos/200?random=11"/>
        <img src="https://picsum.photos/200?random=12"/>
        <img src="https://picsum.photos/200?random=13"/>
        <img src="https://picsum.photos/200?random=14"/>
        <img src="https://picsum.photos/200?random=15"/>
        <img src="https://picsum.photos/200?random=16"/>
        <img src="https://picsum.photos/200?random=17"/>
      </div>
    </div>
  </div>
}

export default SideBar