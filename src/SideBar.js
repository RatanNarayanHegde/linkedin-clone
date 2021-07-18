import React from "react";
import "./SideBar.css";
import Avatar from "@material-ui/core/Avatar";

function SideBar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <dv className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1624359136353-f60129a367b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ratan Hegde</h2>
        <h4>ratanhegde08@gmail.com</h4>
      </dv>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,787</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on your bost</p>
          <p className="sidebar__statNumber">2,787</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default SideBar;
