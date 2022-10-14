import React from "react";
import { Header, Sidebar } from "../../components";
import imageUrl from "../../utils/ImageUrl";

function New() {
  return (
    <section class="artist">
      <div class="bg-image">
        <img src={imageUrl("trending-bg.png")} alt="music.png" />
      </div>
      <Header />
      <Sidebar />
      <div class="find-songs">
        <div class="inside-songs">
          <img src={imageUrl("find.png")} alt="" />
          <p className="mb-4">
            No songs found. Go and find more music on Boomplay.
          </p>
          <a href="#">Discover more music</a>
        </div>
      </div>
    </section>
  );
}

export default New;
