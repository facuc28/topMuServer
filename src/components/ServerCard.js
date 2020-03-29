import React from "react";
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
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "350",
    marginTop: "1vh",
    backgroundColor: "#343a40",
    color: "#7f8b92"
  },
  media: {
    height: 0,
    paddingTop: "20.25%"
  },
  expand: {
    color: "#7f8b92",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: "#7f8b92"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ServerCard(props) {
  let serverInfo = {
    name: "Server Name",
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={serverInfo.name}
        subheader={serverInfo.lastRefresh}
      />
      <CardMedia
        className={classes.media}
        image={serverInfo.imgUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="#7f8b92" component="p">
          {serverInfo.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{serverInfo.longDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}