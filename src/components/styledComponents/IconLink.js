import React from "react";

import { IconButton } from "@material-ui/core";

const IconLink = ({ Icon, label, url }) => {
  return (
    <IconButton aria-label={label} component="a" href={url} target="_blank">
      <Icon />
    </IconButton>
  );
};

export default IconLink;
