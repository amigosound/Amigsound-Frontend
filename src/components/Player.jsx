import { useState } from "react";
import imageUrl from "../utils/ImageUrl";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import Naat1 from "../assets/audios/be-khud-kiye-dete-hain.mp3";
// import Naat2 from "../assets/audios/haal-e-dil-kisko-sunaye.mp3";
// import Naat3 from "../assets/audios/huzoor-jante-hain.mp3";
// import Naat4 from "../assets/audios/zahe-muqaddar-huzoor-e-haq-se.mp3";

import audioUrl from "../utils/audioUrl";

const playlist = [
  {
    name: "naat1",
    src: audioUrl("be-khud-kiye-dete-hain.mp3"),
  },
  {
    name: "naat2",
    src: audioUrl("haal-e-dil-kisko-sunaye.mp3"),
  },
  {
    name: "naat3",
    src: audioUrl("huzoor-jante-hain.mp3"),
  },
  {
    name: "naat4",
    src: audioUrl("zahe-muqaddar-huzoor-e-haq-se.mp3"),
  },
];

function Player({ img }) {
  const [play, setPlay] = useState("");
  const [volumeIncrease, setVolumeIncrease] = useState(false);
  const [volumeDecrease, setVolumeDecrease] = useState(false);
  const [currentMusicIndex, setMusicIndex] = useState(0);

  // console.log(playlist[currentMusicIndex].src);

  const handleClickPrevious = () => {
    setMusicIndex((currentTrack) =>
      currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setMusicIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
    // setMusicIndex((prevState) => ({
    //   currentMusicIndex: prevState,
    // }));
  };
  return (
    <div className="player">
      {/* <div className="player-line">
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
      </div> */}
      {/* <p>currentMusicIndex: {currentMusicIndex}</p> */}

      <AudioPlayer
        autoPlay
        // src={Naat}
        src={playlist[currentMusicIndex].src}
        className={"player"}
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        customVolumeControls={[
          RHAP_UI.VOLUME,
          RHAP_UI.LOOP,
          <div className="functions">
            {/* <img src={imageUrl("shuffle.png")} alt="shuffle.png" /> */}
            <img src={imageUrl("like.png")} alt="shuffle.png" />
            <img src={imageUrl("music-logo.png")} alt="shuffle.png" />
            <img src={imageUrl("nodes.png")} alt="shuffle.png" />
            <img src={imageUrl("downloads.png")} alt="shuffle.png" />
            <img src={imageUrl("playlist.png")} alt="shuffle.png" />
            <div className="play-time">{/* <p>01:10/04:00</p> */}</div>
          </div>,

          RHAP_UI.CURRENT_TIME,
          <div className="bar">
            <p> / </p>
          </div>,
          RHAP_UI.DURATION,
        ]}
        onPlay={(e) => console.log("onPlay")}
        customAdditionalControls={[
          <div className="song-name">
            <img src={imageUrl(img)} alt="song-image.png" />
            <div className="song-text">
              <span>Mitti Di Khushbo</span>
              <div className="singer-name">
                <span>Ayushmann Khurrana</span>
              </div>
            </div>
          </div>,
        ]}
      ></AudioPlayer>
      {/* <div className="select-play">
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
       </div> */}
    </div>
  );
}

export default Player;
