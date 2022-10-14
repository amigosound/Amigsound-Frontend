import React, { useState } from "react";
import imageUrl from "../utils/ImageUrl";
import { Header, Sidebar, Player, PlaySong } from "../components/index";
import { trendingMusicData } from "../dummyData";

function Trending() {
  return (
    <>
      <section
        className="trending"
        style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
      >
        {/* <div className="bg-image">
          <img src={imageUrl("trending-bg.png")} alt="trending-bg.png" />
        </div> */}
        <Header />
        <Sidebar />
        <div className="songs-list">
          <div className="blank-div"></div>
          <div className="main-content">
            <div className="songs-main custom-set">
              <PlaySong />
            </div>
          </div>
        </div>

        <Player img={"song-image.png"} />
      </section>
    </>
  );
}

export default Trending;
