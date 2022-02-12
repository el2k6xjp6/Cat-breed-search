import { useEffect, useState } from "react";
import axios from "axios";
import { Breed } from "./types";
import Card from "./Card";
import SearchIcon from "./SearchIcon";
import { debounce } from "./utils";
import {
  Container,
  Header,
  InputContainer,
  Input,
  CardContainer,
} from "./styles";

function App() {
  const [queryString, setQueryString] = useState<string>("ame");
  const [breeds, setBreeds] = useState<Breed[]>([]);

  const fetchApiWithDebounce = debounce((query: string) => {
    axios
      .get("https://api.thecatapi.com/v1/breeds/search", {
        headers: {
          "x-api-key": process.env.REACT_APP_X_API_KEY as string,
        },
        params: {
          q: query,
        },
      })
      .then((res) => {
        setBreeds([...res.data]);
      });
  }, 1000);

  useEffect(() => {
    if (queryString.length >= 3) {
      fetchApiWithDebounce(queryString);
    }
  }, [queryString]);

  const handleQueryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(event.target.value);
  };

  return (
    <Container>
      <Header>Cat Breeds</Header>
      <InputContainer>
        <SearchIcon />
        <Input
          onChange={handleQueryInput}
          value={queryString}
          type="text"
          placeholder="The name, or part of the name."
        />
      </InputContainer>
      <CardContainer>
        {breeds.map((breed: Breed) => (
          <Card {...breed} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default App;
