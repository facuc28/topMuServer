import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "1vh",
    backgroundColor: "#343a40",
    color: "#7f8b92"
  },
  media: {
    height: 0,
    paddingTop: "20.25%"
  },
  avatar: {
    backgroundColor: "#f39c12"
  },
  chip: {}
}));

export default function ServerCard(props) {
  let serverInfo = {
    name: "Server Name",
    position: 1,
    votes: 10,
    lastRefresh: "September 14, 2016",
    imgUrl:
      "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
    description: "Server Description information.",
    longDescription: "Server extended information with rates and server rules"
  };

  if (props.serverInfo) {
    serverInfo = props.serverInfo;
  }

  const classes = useStyles();

  function getCardTitle() {
    return <Typography type="h1">{serverInfo.name}</Typography>;
  }

  function getLabel() {
    return "Experiencia: x500";
  }

  function getAvatar() {
    return <InfoIcon color="primary" />;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {serverInfo.position}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={getCardTitle()}
      />
      <CardMedia
        className={classes.media}
        image={serverInfo.imgUrl}
        title="Paella dish"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel()}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel()}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel()}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel()}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel()}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel()}
              className={classes.chip}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add">
          <AddCircleIcon style={{ color: "#28a745" }} />
        </IconButton>
        <IconButton aria-label="remove" color="secondary">
          <RemoveCircleIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
