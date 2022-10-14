import React from "react";
import imageUrl from "../utils/ImageUrl";

function CommentList() {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, ind) => (
          <div className="comments-list">
            <div className="comment-list-text">
              <p>New Comments (4)</p>
            </div>
            <div className="comment-content">
              <div className="comment-image">
                <img src={imageUrl("comment.png")} alt="music.png" />
              </div>
              <div className="comment-text">
                <p>AkhterAli dep7i</p>
                <div className="comment-inner-text">
                  <p>NICE!</p>
                  <div className="comment-time">
                    <p>Paksitan 2022-08-13 06:05</p>
                    <div className="comment-icons">
                      <i className="fa-regular fa-thumbs-up"> 1</i>
                      <i className="fa-regular fa-comment-dots"> 1</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default CommentList;
