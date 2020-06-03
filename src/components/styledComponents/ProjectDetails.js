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
      <DialogContent className={classes.content}>
        <Box className={classes.imageBounds} mb={1}>
          <img src={imageSrc} className={classes.image} alt={altText} />
        </Box>
        <DialogContentText id="alert-dialog-slide-description">
          {description}
        </DialogContentText>
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
  content: {},
}));

export default ProjectDetails;
