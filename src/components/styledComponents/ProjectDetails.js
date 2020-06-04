import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import StyledChip from "./StyledChip";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProjectDetails = ({
  open,
  handleClose,
  title,
  imageSrc,
  description,
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
      aria-describedby="alert-dialog-slide-description"
    >
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
              <ListItem disableGutters>
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
}));

export default ProjectDetails;
