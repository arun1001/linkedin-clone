import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.scss";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { InputOption } from "./InputOption";
import { FieldValue } from "@firebase/firestore";

export interface PostProps {
  name: string;
  description: string;
  message: string;
  photoUrl: string;
  id?: any;
  timestamp?: FieldValue;
}
const Post = forwardRef<HTMLDivElement, PostProps>(({
  name,
  description,
  message,
  photoUrl,
}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="header">
        <Avatar src={photoUrl} />
        <div className="info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="body">
        <p>{message}</p>
      </div>
      <div className="buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
