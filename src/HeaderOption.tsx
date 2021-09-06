import React from "react";
import "./HeaderOption.scss";
import { Avatar, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Props {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  avatar?: string;
}
const HeaderOption: React.FC<Props> = ({ Icon, title, avatar }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="icon" />}
      {avatar && <Avatar src={avatar} className="icon" />}
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
