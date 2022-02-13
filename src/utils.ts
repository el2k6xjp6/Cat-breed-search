import { Breed, BreedApi } from "./types";
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
  return data.map((breed: BreedApi) => {
    const {
      name,
      reference_image_id,
      life_span,
      weight: { metric },
    } = breed;
    const lifeSpan = life_span.split(" - ");
    const weight = metric.split(" - ");
    return {
      name,
      referenceImageId: reference_image_id,
      lifeSpan: {
        low: +lifeSpan[0],
        high: +lifeSpan[1],
      },
      weight: {
        low: +weight[0],
        high: +weight[1],
      },
    };
  });
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

export const sortByNameAtoZ = (a: Breed, b: Breed) => {
  return a.name.localeCompare(b.name);
};

export const sortByNameZtoA = (a: Breed, b: Breed) => {
  return b.name.localeCompare(a.name);
};

export const sortByWeightLowToHigh = (a: Breed, b: Breed) => {
  return a.weight.low - b.weight.low;
};

export const sortByWeightHighToLow = (a: Breed, b: Breed) => {
  return b.weight.high - a.weight.high;
};

export const sortByLifeSpanLowToHigh = (a: Breed, b: Breed) => {
  return a.lifeSpan.low - b.lifeSpan.low;
};

export const sortByLifeSpanHighToLow = (a: Breed, b: Breed) => {
  return b.lifeSpan.high - a.lifeSpan.high;
};

export const getSortFunction = (sortMethod: number) => {
  switch (sortMethod) {
    case 0:
      return sortByNameAtoZ;
    case 1:
      return sortByNameZtoA;
    case 2:
      return sortByWeightLowToHigh;
    case 3:
      return sortByWeightHighToLow;
    case 4:
      return sortByLifeSpanLowToHigh;
    case 5:
      return sortByLifeSpanHighToLow;
  }
};
