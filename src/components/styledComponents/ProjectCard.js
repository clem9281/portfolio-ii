import React, { useRef, useState } from "react";

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
}) {
  const cardRef = useRef(null);

  const isVisible = useVisibility(cardRef);

  const classes = useStyles({ isVisible });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
      />
      <Card className={classes.card} ref={cardRef}>
        <div className={classes.outer}>
          <CardMedia
            className={classes.cardMedia}
            image={imageSrc}
            title={title}
            onClick={handleOpen}
          ></CardMedia>
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
    transition: theme.transitions.create(["transform"], {
      duration: "0.5s",
      easing: theme.transitions.easing.easeInOut,
    }),
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
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
