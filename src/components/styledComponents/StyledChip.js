import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Chip } from "@material-ui/core";

import iconDictionary from "../../utils/iconDictionary";

const StyledAvatar = ({ skill }) => {
  const classes = useStyles({ skill });
  const image = iconDictionary[skill.toLowerCase()];
  return (
    <Chip
      className={classes.chip}
      key={skill}
      avatar={
        <Avatar
          alt={`${skill} icon`}
          className={classes.avatar}
          src={image}
          aria-hidden={true}
        ></Avatar>
      }
      label={skill}
      variant="outlined"
    />
  );
};
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: (props) => theme.palette[props.skill.toLowerCase()].fill,
  },
  chip: {
    border: (props) =>
      `1px solid ${theme.palette[props.skill.toLowerCase()].stroke}`,
    margin: "0 0.5rem 0.5rem 0",
  },
}));

export default StyledAvatar;
