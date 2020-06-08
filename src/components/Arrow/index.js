import React from "react";

import { ArrowIcon, ArrowContainer } from "./styled";

function Arrow(props) {
  return (
    <ArrowContainer {...props} >
      <ArrowIcon {...props} />
    </ArrowContainer>
  );
}

export default Arrow;
