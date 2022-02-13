import React from "react";
import { StyledImage } from "./styles";

interface Props {
  isFetching: boolean;
  actualSrc: string;
}
function LazyImage({ actualSrc, isFetching }: Props) {
  const [isImageLoaded, setImageLoaded] = React.useState(false);
  // const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();

    img.onload = () => setImageLoaded(true);
    // img.onerror = () => setHasError(true);

    img.src = actualSrc;
  }, [actualSrc]);

  return (
    <StyledImage
      actualSrc={actualSrc}
      loading={!isImageLoaded || isFetching}
      // error={hasError}
      // {...props}
    />
  );
}

export default LazyImage;
