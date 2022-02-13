import React, { useEffect, useState } from "react";
import { Container, Name, LifeSpan, Weight } from "./styles";
import LazyImage from "./LazyImage";
import { fetchTheCatImageById } from "../../utils";

interface CardType {
  name: string;
  weight: { metric: string };
  life_span: string;
  reference_image_id: string;
}

function Card(props: CardType) {
  const [isFetching, setFetching] = React.useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data = await fetchTheCatImageById(props.reference_image_id);
      setImageUrl(data.url);
      setFetching(false);
    })();
  }, [props.reference_image_id]);

  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <Container>
      <LazyImage isFetching={isFetching} actualSrc={imageUrl} />
      <Name>{props.name}</Name>
      <LifeSpan>Lifespan: {props.weight.metric} kilograms</LifeSpan>
      <Weight>Weight: {props.life_span} years</Weight>
    </Container>
  );
}

export default React.memo(Card);
