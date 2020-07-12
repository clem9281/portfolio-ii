import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";

import StyledChip from "./StyledChip";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const ProjectDetails = ({
  open,
  handleClose,
  title,
  imageSrc,
  altText,
  skills,
  highlights,
}) => {
  const classes = useStyles({ imageSrc });
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
    >
      <IconButton className={classes.close} onClick={handleClose}>
        <HighlightOff />
      </IconButton>
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <Box className={classes.imageBounds} mb={3}>
          <img src={imageSrc} className={classes.image} alt={altText} />
        </Box>
        <Box className={classes.skillBox}>
          {skills.map((skill) => {
            return <StyledChip skill={skill} key={skill} />;
          })}
        </Box>
        <Box mb={1}>
          <List disablePadding>
            {highlights.map((highlight) => (
              <ListItem disableGutters key={highlight}>
                <ListItemText primary={highlight} />
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
const useStyles = makeStyles((theme) => ({
  imageBounds: {
    paddingTop: "56.25%",
    overflow: "auto",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      "&:: -webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar": {
        width: "10px",
        backgroundColor: "#F5F5F5",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: theme.palette.grey[600],
      },
    },
  },
  image: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  skillBox: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  close: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

export default ProjectDetails;
