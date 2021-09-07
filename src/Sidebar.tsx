import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.scss";
const recentItems: string[] = ["reactjs", "angular", "programming", "design"];
export const Sidebar = () => {
  const recentItem = (topic: string) => (
    <div className="recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <Avatar className="avatar" src="" />
        <h2>Arun Chandran</h2>
        <h4>arunchandran619@gmail.com</h4>
      </div>
      <div className="stats">
        <div className="stat">
          <p>Who viewed your profile</p>
          <p className="statNumber">25</p>
        </div>
        <div className="stat">
          <p>Views of your post</p>
          <p className="statNumber">95</p>
        </div>
      </div>
      <div className="bottom">
        <p>Recent</p>
        {recentItems.map((e) => recentItem(e))}
      </div>
    </div>
  );
};
