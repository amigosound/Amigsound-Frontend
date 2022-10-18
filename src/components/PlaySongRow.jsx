import { useState } from "react";
import { numberWithCommas } from "../helper/index";
import imageUrl from "../utils/ImageUrl";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audioUrl from "../utils/audioUrl";
function PlaySongRow({ data }) {
  const [play, setPlay] = useState(false);
  const [volumeIncrease, setVolumeIncrease] = useState(false);
  const [volumeDecrease, setVolumeDecrease] = useState(false);
  // let audioElem = document.getElementById("audio").target;
  // console.log(audioElem);
  return (
    <tr className="space-under">
      <td>
        <AudioPlayer
          // autoPlay
          src={audioUrl("zahe-muqaddar-huzoor-e-haq-se.mp3")}
          className={"player"}
          autoPlayAfterSrcChange={true}
          showJumpControls={false}
          customAdditionalControls={[]}
          customProgressBarSection={[]}
          customVolumeControls={[
            // RHAP_UI.VOLUME,
            // <div></div>,
            RHAP_UI.DURATION,
          ]}
          // id="audioElem"
          onPlay={(e) => console.log("onPlay")}
        ></AudioPlayer>
        {/* <i
          className={`fa-solid  ${play ? "fa-pause fff" : "fa-play fff"}`}
          onClick={() => setPlay(!play)}
        ></i> */}
      </td>
      <td>
        <div className="song-title-main">
          <img src={imageUrl(data.imageUrl)} alt="song-image.png" />
          <div className="song-text">
            <span>IN The Middle of night </span>
            <div className="song-desc">
              <p>
                <i className="fa-solid fa-headphones"></i>{" "}
                {numberWithCommas(223.4)}k
              </p>
              <p>
                <i className="fa-solid fa-heart"></i> {numberWithCommas(2500)}
              </p>
              <p>
                <i className="fa-solid fa-share-nodes"></i>
                {numberWithCommas(400)}
              </p>
              <p>
                <i className="fa-solid fa-comment-dots"></i>
                {numberWithCommas(800)}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>Akcent</td>

      <td>
        <div className="equipments">
          <img src={imageUrl(data.playListLogo)} alt="music-logo.png" />
          <img src={imageUrl(data.shareLogo)} alt="music-logo.png" />
          <img src={imageUrl(data.downloadMusic)} alt="music-logo.png" />

          {/* <div className="volume">
            <i
              className="fa-solid fa-volume-high"
              onClick={() => setVolumeIncrease(true)}
            ></i>
            <div className="volume-line"></div>
            <i
              className="fa-solid fa-volume-xmark"
              onClick={() => setVolumeDecrease(true)}
            ></i>
          </div> */}
        </div>
      </td>
      <td>{/* <span>04:00</span> */}</td>
    </tr>
  );
}

export default PlaySongRow;
