import React from "react";
import { Svg } from "./styles";

function SearchIcon() {
  return (
    <Svg>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="black"
        stroke-width="3"
        fill="white"
      />
      <line x1="18" y1="18" x2="26" y2="26" stroke="black" stroke-width="3px" />
    </Svg>
  );
}

export default React.memo(SearchIcon);
