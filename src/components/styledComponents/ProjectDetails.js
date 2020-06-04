import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
} from "@material-ui/core";

import StyledChip from "./StyledChip";

import iconDictionary from "../../utils/iconDictionary";

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
        <Box className={classes.imageBounds} mb={1}>
          <img src={imageSrc} className={classes.image} alt={altText} />
        </Box>
        <DialogContentText id="alert-dialog-slide-description">
          {description}
        </DialogContentText>
        <Box className={classes.skillBox} mb={1}>
          {skills.map((skill) => {
            return <StyledChip skill={skill} key={skill} />;
          })}
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
