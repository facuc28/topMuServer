import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import Button from '@material-ui/core/Button';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ServerInfo from "./ServerInfo";
import CircularProgress from '@material-ui/core/CircularProgress';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1vh",
    backgroundColor: "#1e272e",
    color: "#7f8b92"
  },
  media: {
    height: 0,
    paddingTop: "20.25%"
  },
  expand: {
    marginLeft: "auto",
    color: "#7f8b92",
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: "#7f8b92"
  },
  avatar: {
    backgroundColor: "#f39c12"
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
  },
  voteCount: {
  }
}));

export default function ServerCard(props) {
  const [loading, setLoading] = useState(false);
  let serverInfo = {
    name: "Server Name",
    position: 1,
    votes: 10,
    lastRefresh: "September 14, 2016",
    imgUrl: "https://i.imgur.com/NRodHCn.jpg",
    description: "Server Description information.",
    longDescription: "Server extended information with rates and server rules"
  };

  if (props.serverInfo) {
    serverInfo = props.serverInfo;
    console.log("data:" + props.serverInfo);
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleVote = () => {
    setLoading(true);
  
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  function getCardTitle() {
    return (
      <Typography className={classes.title} variant="h4">
        {serverInfo.name}
      </Typography>
    );
  }

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
            {serverInfo.position}
          </Avatar>
        }
        action={
          <IconButton aria-label="visitar sitio">
             <Button size="small" className={classes.site}>
          Visitar
        </Button>
          </IconButton>
        }
        title={getCardTitle()}
      />
      <CardMedia
        className={classes.media}
        image={serverInfo.imgUrl}
        title={serverInfo.name}
      />
      <CardContent>
        <ServerInfo {...serverInfo} />
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
        <Chip
        icon={<ThumbUpIcon />}
        label={props.serverInfo.votes}
        className={classes.voteCount}
      />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color="secondary" label="more info" />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{serverInfo.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
