import React from "react";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
import imageUrl from "../../utils/ImageUrl";
import { genresData } from "../..//dummyData";

function Genres() {
  return (
    <section
      className="playlist"
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
          <div className="custom-set">
            <div className="custom-row">
              {genresData.map((item, ind) => (
                <div className="custom-col">
                  <Link to={item.link}>
                    <img src={imageUrl(item.imageUrl)} alt={item.imageUrl} />
                  </Link>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Genres;
