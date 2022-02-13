export const THE_CAT_API_URL = "https://api.thecatapi.com/v1";

export const SORT_METHODS = ["Name (A to Z)", "Name (Z to A))"];

export const SORT_METHOD_OPTIONS = SORT_METHODS.map(
  (method: string, index: number) => ({
    text: method,
    value: index,
  })
);
