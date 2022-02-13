import React, { useEffect, useState } from "react";
import { Container, Name, LifeSpan, Weight } from "./styles";
import LazyImage from "./LazyImage";
import { fetchTheCatImageById } from "../../utils";

interface CardType {
  name: string;
  lifeSpan: {
    low: number;
    high: number;
  };
  weight: {
    low: number;
    high: number;
  };
  referenceImageId: string;
}

function Card(props: CardType) {
  const [isFetching, setFetching] = React.useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data = await fetchTheCatImageById(props.referenceImageId);
      setImageUrl(data.url);
      setFetching(false);
    })();
  }, [props.referenceImageId]);

  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <Container>
      <LazyImage isFetching={isFetching} actualSrc={imageUrl} />
      <Name>{props.name}</Name>
      <LifeSpan>
        Lifespan: {props.weight.low} - {props.weight.high} kilograms
      </LifeSpan>
      <Weight>
        Weight: {props.lifeSpan.low} - {props.lifeSpan.high} years
      </Weight>
    </Container>
  );
}

export default React.memo(Card);
