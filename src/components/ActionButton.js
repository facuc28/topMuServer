import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  add: {
    color: "green"
  }
}));

export default function ActionButton(props) {
  const classes = useStyles();
  let button = {
    type: getButtonType(),
    style: getIconStyle(),
    content: getContent(),
    onClick: getOnClick()
  };

  return <IconButton aria-label={button.type}>{button.content}</IconButton>;

  function getIconStyle() {
    return props.button ? classes[props.button.type] : "grey";
  }

  function getButtonType() {
    return props.button ? props.button.type : "grey";
  }

  function getContent() {
    return props.button ? props.button.content : <Icon>x</Icon>;
  }

  function getOnClick() {
    return props.button ? props.button.onClick : null;
  }
}
