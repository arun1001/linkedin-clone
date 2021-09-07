import React from "react";
import "./Feed.scss";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import { Subscriptions, EventNote, CalendarViewDay } from "@material-ui/icons";
import { InputOption } from "./InputOption";
export const Feed = () => {
  return (
    <div className="feed">
      <div className="inputContainer">
        <div className="input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="var(--post-color-icon-photo)"
          />
          <InputOption
            Icon={Subscriptions}
            title="Video"
            color="var(--post-color-icon-video)"
          />
          <InputOption
            Icon={EventNote}
            title="Event"
            color="var(--post-color-icon-event)"
          />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="var(--post-color-icon-article)"
          />
        </div>
      </div>
    </div>
  );
};
