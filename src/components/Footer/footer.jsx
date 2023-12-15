import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

function Footer()
{
  const year = new Date().getFullYear

  return <div className="Footer">
    <div>
      <ul>
        <h1>Company</h1>
        <li><a href="#">About</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">For the Record</a></li>
      </ul>

      <ul>
        <h1>Communities</h1>
        <li><a href="#">For Artists</a></li>
        <li><a href="#">Developers</a></li>
        <li><a href="#">Advertising</a></li>
        <li><a href="#">Investors</a></li>
        <li><a href="#">Vendors</a></li>
      </ul>

      <ul>
        <h1>Useful Links</h1>
        <li><a href="#">Support</a></li>
        <li><a href="#">Free Mobile App</a></li>
      </ul>

      <div>
          <button><FontAwesomeIcon icon={faPlane} /></button>
          <button><FontAwesomeIcon icon={faPlane}/></button>
          <button><FontAwesomeIcon icon={faPlane}/></button>
      </div>
    </div>
    <div>
      <ul>  
        <li><a href="#">Legal</a></li>
        <li><a href="#">Privacy Center</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Cookies</a></li>
        <li><a href="#">About Ads</a></li>
        <li><a href="#">Accessibility</a></li>

      </ul>
    </div>
  </div>
}


export default Footer