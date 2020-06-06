import React from "react";

import { CloseIcon } from "./styled";

function Close(props) {
  return (
    <CloseIcon {...props}>
      <div></div>
      <div></div>
    </CloseIcon>
  );
}

export default Close;
