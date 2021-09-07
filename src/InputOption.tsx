import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import "./InputOption.scss";
interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
}
export const InputOption: React.FC<Props> = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
};
