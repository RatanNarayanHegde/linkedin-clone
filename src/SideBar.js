import React from "react";
import "./SideBar.css";
import Avatar from "@material-ui/core/Avatar";

function SideBar() {
  return (
    <div className="sidebar">
      <dv className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Ratan Hegde</h2>
        <h4>ratanhegde08@gmail.com</h4>
      </dv>

      <div className="sidebar__stats">
        <div className="sidebar__statNumber">
          <p>Who viewed you</p>
          <p>2,787</p>
        </div>
        <div className="sidebar__statNumber">
          <p>Views on your bost</p>
          <p>2,787</p>
        </div>
      </div>

      <div className="sidebar__bottom"></div>
    </div>
  );
}

export default SideBar;
