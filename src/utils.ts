import { Breed } from "./types";
import axios from "axios";
import { THE_CAT_API_URL } from "./constants";

export const fetchTheCatApiByName = async (name: string) => {
  const { data } = await axios.get(THE_CAT_API_URL + "/breeds/search", {
    headers: {
      "x-api-key": process.env.REACT_APP_X_API_KEY as string,
    },
    params: {
      q: name,
    },
  });
  return data;
};

export const fetchTheCatImageById = async (id: string) => {
  const { data } = await axios.get(THE_CAT_API_URL + "/images/" + id, {
    headers: {
      "x-api-key": process.env.REACT_APP_X_API_KEY as string,
    },
  });
  return data;
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;

  return (arg: any) => {
    const later = () => {
      clearTimeout(timeout);
      func(arg);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const sortByName = (a: Breed, b: Breed) => {
  return a.name.localeCompare(b.name);
};

export const getSortFunction = (sortMethod: number) => {
  switch (sortMethod) {
    case 0:
      return sortByName;
    case 1:
      return sortByName;
  }
};
