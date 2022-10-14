import { useState } from "react";
import imageUrl from "../utils/ImageUrl";
function Player({ img }) {
  const [play, setPlay] = useState(true);
  const [volumeIncrease, setVolumeIncrease] = useState(false);
  const [volumeDecrease, setVolumeDecrease] = useState(false);
  return (
    <div className="player">
      <div className="player-line">
        <div className="position-relative">
          <div className="player-line-inner"></div>
        </div>
      </div>
      <div className="song-name">
        <img src={imageUrl(img)} alt="song-image.png" />
        <div className="song-text">
          <span>Mitti Di Khushbo</span>
          <div className="singer-name">
            <span>Ayushmann Khurrana</span>
          </div>
        </div>
      </div>

      <div className="select-play">
        <i className="fa-solid fa-backward-step"></i>
        {play ? (
          <i
            className={`fa-solid ${"fa-circle-play"}`}
            onClick={() => setPlay(!play)}
          ></i>
        ) : (
          <img
            src={imageUrl("player-pause.png")}
            alt=""
            onClick={() => setPlay(!play)}
          />
        )}

        <i className="fa-solid fa-forward-step"></i>
      </div>
      <div className="adjustments">
        <div className="set-volume">
          <i
            className="fa-solid fa-volume-high"
            onClick={() => setVolumeIncrease(true)}
          ></i>
          <div className="duration-line"></div>
          <i
            className="fa-solid fa-volume-xmark"
            onClick={() => setVolumeIncrease(false)}
          ></i>
        </div>
        <div className="functions">
          <img src={imageUrl("shuffle.png")} alt="shuffle.png" />
          <img src={imageUrl("like.png")} alt="shuffle.png" />
          <img src={imageUrl("music-logo.png")} alt="shuffle.png" />
          <img src={imageUrl("nodes.png")} alt="shuffle.png" />
          <img src={imageUrl("downloads.png")} alt="shuffle.png" />
          <img src={imageUrl("playlist.png")} alt="shuffle.png" />
          <div className="play-time">
            <p>01:10/04:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
