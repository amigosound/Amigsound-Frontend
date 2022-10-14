import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Header, AddPlayListModal } from "../../components";
import imageUrl from "../../utils/ImageUrl";
function MyPlayList() {
  const [modelOpen, setModalOpen] = useState(false);
  return (
    <section id="add-playlist">
      <div class="bg-image">
        <img src={imageUrl("trending-bg.png")} alt="find.png" />
      </div>
      <Header />
      <Sidebar />
      <div class="find-songs">
        <div class="inside-songs">
          <img src={imageUrl("find.png")} alt="find.png" />
          <p className="mb-4">
            You haven't created any playlists. Create your own playlists here .
          </p>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            onClick={() => setModalOpen(!modelOpen)}
          >
            Add Playlist
          </a>
        </div>
      </div>
      <AddPlayListModal open={modelOpen} close={() => setModalOpen(false)} />
    </section>
  );
}

export default MyPlayList;
