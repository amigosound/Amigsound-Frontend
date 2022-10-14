import React from "react";
import { Header, AdminSideBar } from "../../components";
import imageUrl from "utils/ImageUrl";

function AdminProfileAnalytics() {
  return (
    <>
      <AdminSideBar />
      <section
        id="artist-profile"
        style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
      >
        {/* <div class="profile-list">
          <div class="blank-div"></div>
          <div class="container">
            <div class="row my-5">
              <div class="col-lg-3">
                <div class="stake-box box-admin">
                  <h2>260M</h2>
                  <p>ACTIVE STAKE AUDIO</p>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="api-box box-admin">
                  <h2>180,308,709</h2>
                  <p>API CALLS THIS MONTH</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="users-box box-admin">
                  <h2>5,215,674</h2>
                  <p>UNIQUE USERS THIS MONTH</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="box-admin weekly-reward">
                  <h2>0.987%</h2>
                  <p>ESTIMATED WEEKLY REWARD RATE</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-admin annual-reward">
                  <h2>50%</h2>
                  <p>ESTIMATED ANNUAL REWARD RATE</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default AdminProfileAnalytics;
