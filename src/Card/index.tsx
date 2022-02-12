import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Image, Name, LifeSpan, Weight } from "./styles";

interface CardType {
  name: string;
  weight: { metric: string };
  life_span: string;
  reference_image_id: string;
}

function Card(props: CardType) {
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://api.thecatapi.com/v1/images/" + props.reference_image_id,
        {
          headers: {
            "x-api-key": process.env.REACT_APP_X_API_KEY as string,
          },
        }
      );
      setImageUrl(res.data.url);
    })();
  }, [props.reference_image_id]);

  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <Container>
      <Image src={imageUrl} alt="" />
      <Name>{props.name}</Name>
      <LifeSpan>Lifespan: {props.weight.metric} kilograms</LifeSpan>
      <Weight>Weight: {props.life_span} years</Weight>
    </Container>
  );
}

export default React.memo(Card);
