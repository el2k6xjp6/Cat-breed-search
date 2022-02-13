import { useEffect, useState, useMemo } from "react";
import { Breed } from "../../types";
import Card from "../Card";
import SearchInput from "../SearchInput";
import SortBar from "../SortBar";
import { SORT_METHODS } from "../../constants";
import { debounce, getSortFunction, fetchTheCatApiByName } from "../../utils";
import { Container, Header, CardContainer } from "./styles";

function App() {
  const [queryString, setQueryString] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [sortMethod, setSortMethod] = useState<number>(-1);

  const fetchApiWithDebounce = useMemo(
    () =>
      debounce(async (query: string) => {
        try {
          const data = await fetchTheCatApiByName(query);
          setBreeds([...data]);
        } catch (err) {
          setError(err as Error);
        }
      }, 1000),
    []
  );

  const updateResultWithDebounce = useMemo(
    () => debounce((value: Breed[]) => setBreeds(value), 1000),
    []
  );

  useEffect(() => {
    if (queryString.length === 0) {
      updateResultWithDebounce([]);
    }
    if (queryString.length >= 3) {
      try {
        fetchApiWithDebounce(queryString);
      } catch (err) {
        throw err;
      }
    }
  }, [queryString, updateResultWithDebounce, fetchApiWithDebounce]);

  useEffect(() => {
    if (error != null) {
      throw error;
    }
  }, [error]);

  const handleQueryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(event.target.value);
  };

  const sortedBreeds = useMemo(() => {
    if (sortMethod < 0 || sortMethod >= SORT_METHODS.length) return breeds;
    const sortedBreeds = breeds.sort(getSortFunction(sortMethod));
    return sortedBreeds;
  }, [breeds, sortMethod]);

  return (
    <Container>
      <Header>Cat Breeds</Header>

      <SearchInput
        handleQueryInput={handleQueryInput}
        queryString={queryString}
      />

      {queryString.length !== 0 && (
        <SortBar selection={sortMethod} handleClick={setSortMethod} />
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
