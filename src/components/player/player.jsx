import { faBackward, faBackwardStep, faForward, faForwardStep, faHeart, faPause, faPlay, faRepeat, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Player() {
  const [isActiveLike, setisActiveLike] = useState("false");
  const [isActivePlay, setisActivePLay] = useState("false");

  function togglePlay()
  {
    setisActivePLay(!isActivePlay)
  }

  function toggleClass() {
    setisActiveLike(!isActiveLike);
  }

  return (
    <div className="playerShell">
      <div className="player">
        <div className="songPanel">
          <img src="https://picsum.photos/200?random=19" />
          <div className="songDetails">
            <h3>SONGNAME</h3>
            <h5>ArtistName</h5>
          </div>
          <div
            className={isActiveLike ? "hrtIcon" : "hrtIconLiked"}
            onClick={toggleClass}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>

        <div className="playSeeker">
          <div className="seekIcons">
            <div>
              <FontAwesomeIcon icon={faShuffle}/>
            </div>
            <div>
              <FontAwesomeIcon icon={faBackwardStep}/>
            </div>
            <div>
              <FontAwesomeIcon icon={isActivePlay?faPlay:faPause} onClick={togglePlay}/>
            </div>
            <div>
              <FontAwesomeIcon icon={faForwardStep}/>
            </div>
            <div>
              <FontAwesomeIcon icon={faRepeat}/>
            </div>
          </div>

          <div className="seekStick">
            <div className={isActivePlay?'seek':'seekAnim'}></div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Player;
