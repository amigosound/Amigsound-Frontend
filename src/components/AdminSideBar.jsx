import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import imageUrl from "../utils/ImageUrl";
function AdminSideBar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  return (
    <header className="admin">
      <div class="nav-bar custom-border">
        <div class="logo logo-bg">
          <Link to={"/"}>
            <img src={imageUrl("logo-white.png")} alt="" />
          </Link>
        </div>
        <div class="main">
          <div class="custom-box">
            <i class="fa fa-magnifying-glass custom-glass"></i>
            <input
              class="custom-input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Search"
            />
          </div>

          <div class="profile">
            <a href="">
              <img src={imageUrl("profile.png")} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="position">
        <div className={`${open ? "open" : ""} custom-container  custom-bar`}>
          <i
            className="fa fa-bars bars "
            title="Click me!"
            onClick={() => setOpen(!open)}
          ></i>
          <ul class="menu admin-menu">
            <li>
              <Link
                to="/admin-profile"
                className={`${
                  location.pathname === "/admin-profile" ? "active" : ""
                }`}
              >
                <img src={imageUrl("overview.png")} alt="" />
                <span> Overview</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin-profile-2"
                className={`${
                  location.pathname === "/admin-profile-2" ? "active" : ""
                }`}
              >
                <img src={imageUrl("analytics.png")} alt="" />
                <span>Analytics</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    // <div class="position">
    //   <div class="custom-container custom-bar">
    //     <i class="fa fa-bars bars" title="Click me!"></i>
    //     <ul class="menu">
    //       <li>
    //         <a href="./admin-profile.html">
    //           <img src={imageUrl("overview.png")} alt="overview.png" />
    //           <span> Overview</span>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="./admin-graph.html">
    //           <img src={imageUrl("analytics.png")} alt="analytics.png" />
    //           <span>Analytics</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default AdminSideBar;
