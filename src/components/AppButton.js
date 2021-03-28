import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import LoginForm from "./LoginForm";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#FFBF27",
    border: "1px solid #FFBF27",
    borderRadius: "2px",
    fontSize: 10,
    fontWeight: "bold"
  }
}));

export default function AppButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let button = {
    title: props.button ? props.button.title : "Title",
    onClick: props.button.onClick ? props.button.onClick : handleOpen
  };

  return (
    <div>
      <Button
        onClick={button.onClick}
        className={classes.button}
        variant="contained"
      >
        {button.title}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>{props.content}</div>
        </Fade>
      </Modal>
    </div>
  );
}
