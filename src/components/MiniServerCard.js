import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ChatIcon from "@material-ui/icons/Chat";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import InfoIcon from "@material-ui/icons/Info";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";


const useStyles = makeStyles((theme) => ({
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
  chip: {
    minWidth: "150px"
  },
  title: {
    color: "#f5f6fa"
  },
  comment: {
    color: "#487eb0"
  },
  share: {
    color: "#487eb0"
  },
  vote: {
    color: "#44bd32"
  },
  site: {
    padding: "1px",
    backgroundColor: "#FFBF27",
    border: "1px solid #FFBF27",
    borderRadius: "2px",
    fontSize: 10,
    fontWeight: "bold",
  }
}));

export default function ServerCard(props) {
  const [loading, setLoading] = useState(false);
  let serverInfo = {
    name: "Server Name",
    experiencia: "--",
    drop: "--",
    version: "--",
    masterExp: "--",
    resetPoints: "--",
    resetLvl: "--",
    position: 1,
    votes: 10,
    lastRefresh: "September 14, 2016",
    imgUrl:
      "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
    description: "Server Description information.",
    longDescription: "Server extended information with rates and server rules"
  };

  if (props.name) {
    serverInfo = props;
  }

  const classes = useStyles();

  function getCardTitle() {
    return <Typography className={classes.title} variant="h4">{serverInfo.name}</Typography>;
  }

  function getLabel(key, value) {
    return key + ": " + value;
  }

  function getAvatar() {
    return <InfoIcon color="primary" />;
  }

  const handleVote = () => {
    setLoading(true);
  
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  function renderVoteIcon() {
    let value = <AddCircleIcon onClick={handleVote} type="add" className={classes.vote} />;

    if(loading) {
      value = <CircularProgress size="small"/>
    }

    return value;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <EmojiEventsIcon />
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
        <Grid container alignItems="center" justify="center" spacing={3}>
          <Grid item lg={4} md={6} sm={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel("Experiencia", serverInfo.experiencia)}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel("Master Exp", serverInfo.masterExp)}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel("Excellent Drop", serverInfo.drop)}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel("Version", serverInfo.version)}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel("Reset LVL", serverInfo.resetLvl)}
              className={classes.chip}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={4}>
            <Chip
              avatar={getAvatar()}
              label={getLabel("Borra Puntos", serverInfo.resetPoints)}
              className={classes.chip}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Votar +1"
          className={classes.vote}
        >
          {renderVoteIcon()}
        </IconButton>
        <IconButton
          aria-label="Agregar un comentario"
          className={classes.comment}
        >
          <ChatIcon />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon className={classes.share} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
