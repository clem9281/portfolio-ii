import React, { useRef, useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { makeStyles } from "@material-ui/core/styles";

import ProjectDetails from "./ProjectDetails";
import IconLink from "./IconLink";

import useVisibility from "../../hooks/useVisibility";

export default function ProjectCard({
  title,
  imageSrc,
  description,
  deployment,
  githubLink,
  altText,
  skills,
  highlights,
}) {
  const cardRef = useRef(null);

  const isVisible = useVisibility(cardRef);

  const classes = useStyles({ isVisible });

  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.item}>
      <ProjectDetails
        title={title}
        imageSrc={imageSrc}
        description={description}
        open={open}
        handleClose={handleClose}
        altText={altText}
        skills={skills}
        highlights={highlights}
      />
      <Card className={classes.card} ref={cardRef}>
        <div className={classes.outer}>
          <CardMedia
            className={classes.cardMedia}
            image={imageSrc}
            title={title}
            onClick={handleOpen}
            aria-label={`click here for more info about ${title}`}
          >
            <IconButton
              aria-label={`click for more info about ${title}`}
              className={classes.icon}
              disableRipple
              variant="contained"
            >
              <TouchAppIcon fontSize="small" />
            </IconButton>
          </CardMedia>
        </div>
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
            label="view-project-on-github"
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
  item: {},
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    opacity: (props) => (props.isVisible ? 1 : 0),
    transform: (props) => (props.isVisible ? "rotateY(0)" : "rotateY(180deg)"),
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: "1s",
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  cardMedia: {
    position: "relative",
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "top center",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
      transition: theme.transitions.create(["transform"], {
        duration: "0.5s",
        easing: theme.transitions.easing.easeInOut,
      }),
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  },
  icon: {
    position: "absolute",
    top: "5%",
    left: "5%",
    transform: "rotate(-20deg)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  outer: {
    overflow: "hidden",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: "space-evenly",
  },
}));
