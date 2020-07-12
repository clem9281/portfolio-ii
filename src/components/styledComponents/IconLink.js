import React from "react";

import { IconButton } from "@material-ui/core";

const IconLink = ({ Icon, label, url, size, color }) => {
  return (
    <IconButton
      aria-label={label}
      component="a"
      href={url}
      target="_blank"
      size={size}
      color={color}
    >
      <Icon />
    </IconButton>
  );
};

export default IconLink;
