import { Breed } from "./types";

export const debounce = (
  func: (arg: string | Breed[]) => void,
  wait: number
) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(arg: string | Breed[]) {
    const later = () => {
      clearTimeout(timeout);
      func(arg);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const sortByName = (a: Breed, b: Breed) => {
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
