import React from "react";
import { Link } from "react-router-dom";
import { Header, AdminSideBar, AdminProfileChart } from "components";
import imageUrl from "utils/ImageUrl";
import { numberWithCommas } from "../../helper/index";

function AdminProfileOverview2() {
  return (
    <>
      <AdminSideBar />
      <section
        id="artist-profile"
        style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
      >
        <div class="profile-list">
          <div class="blank-div"></div>
          <div class="container px-5">
            <div class="row my-5">
              <div class="col-lg-3">
                <div class="stake-box box-admin">
                  <h2>260M</h2>
                  <p>Total Plays</p>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="api-box box-admin">
                  <h2>{numberWithCommas(180308709)}</h2>
                  <p>Total Likes</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="users-box box-admin">
                  <h2>{numberWithCommas(5215674)}</h2>
                  <p>Total Repost</p>
                </div>
              </div>
            </div>
            <div class="graph-box">
              <div id="chart">
                <AdminProfileChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminProfileOverview2;
