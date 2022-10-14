import { useState } from "react";
import { numberWithCommas } from "../helper/index";
import imageUrl from "../utils/ImageUrl";
import { trendingMusicData } from "../dummyData";
import { PlaySongRow } from "../components/index";
function PlaySong() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>ARTIST</th>
          <th></th>
          <th className="time-set">TIME</th>
        </tr>
      </thead>
      <tbody>
        {trendingMusicData.map((item) => {
          return <PlaySongRow data={item} />;
        })}
      </tbody>
    </table>
  );
}

export default PlaySong;
