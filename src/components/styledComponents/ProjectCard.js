import React, { useRef } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import { makeStyles } from "@material-ui/core/styles";

import useVisibility from "../../hooks/useVisibility";

import IconLink from "./IconLink";

export default function ProjectCard({
  title,
  imageSrc,
  description,
  deployment,
  githubLink,
}) {
  const cardRef = useRef(null);

  const isVisible = useVisibility(cardRef);

  const classes = useStyles({ isVisible });

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.item}>
      <Card className={classes.card} ref={cardRef}>
        <CardMedia
          className={classes.cardMedia}
          image={imageSrc}
          title={title}
        ></CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconLink
            size="small"
            // color="primary"
            className={classes.button}
            label="view-project-github"
            Icon={GitHubIcon}
            url={githubLink}
          />
          <IconLink
            size="small"
            // color="primary"
            className={classes.button}
            label="view-project-on-the-web"
            Icon={WebIcon}
            url={deployment}
          />
        </CardActions>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  item: {
    opacity: (props) => (props.isVisible ? 1 : 0),
    transform: (props) => (props.isVisible ? "rotateY(0)" : "rotateY(180deg)"),
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: "1s",
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "top center",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: "space-evenly",
  },
}));
