import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Breed } from "../../types";
import Card from "../Card";
import SearchIcon from "../SearchIcon";
import SearchBar from "../SortBar";
import { SORT_METHODS } from "../../constants";
import { debounce, getSortFunction } from "../../utils";
import {
  Container,
  Header,
  InputContainer,
  Input,
  CardContainer,
} from "./styles";

function App() {
  const [queryString, setQueryString] = useState<string>("");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [sortMethod, setSortMethod] = useState<number>(-1);

  const fetchApiWithDebounce = useMemo(
    () =>
      debounce(
        (query: string | Breed[]) =>
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
            }),
        1000
      ),
    []
  );

  const updateResultWithDebounce = useMemo(
    () =>
      debounce((value: string | Breed[]) => {
        if (typeof value !== "string") {
          setBreeds(value);
        }
      }, 1000),
    []
  );

  useEffect(() => {
    if (queryString.length === 0) {
      updateResultWithDebounce([]);
    }
    if (queryString.length >= 3) {
      fetchApiWithDebounce(queryString);
    }
  }, [queryString, updateResultWithDebounce, fetchApiWithDebounce]);

  const handleQueryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(event.target.value);
  };

  const sortedBreeds = useMemo(() => {
    if (sortMethod < 0 || sortMethod >= SORT_METHODS.length) return breeds;
    const sortedBreeds = breeds.sort(getSortFunction(sortMethod));
    if (sortMethod % 2 === 1) {
      sortedBreeds.reverse();
    }
    return sortedBreeds;
  }, [breeds, sortMethod]);

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
      {queryString.length !== 0 && (
        <SearchBar selection={sortMethod} handleClick={setSortMethod} />
      )}
      <CardContainer>
        {sortedBreeds.map((breed: Breed) => (
          <Card {...breed} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default App;
