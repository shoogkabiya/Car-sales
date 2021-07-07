import React from "react";
import { IconContext } from "react-icons";
import { GrUserAdd } from "react-icons/gr";

export function AddIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GrUserAdd />
    </IconContext.Provider>
  );
}
