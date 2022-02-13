import {
  getSortFunction,
  sortByName,
  debounce,
  fetchTheCatApiByName,
  fetchTheCatImageById,
} from "./utils";
import { Breed } from "./types";
import axios from "axios";

describe("test utils", () => {
  describe("test sortByName", () => {
    const source = [
      {
        name: "abc",
      },
      {
        name: "aac",
      },
      {
        name: "cdc",
      },
      {
        name: "acc",
      },
    ] as Breed[];
    const target = [
      {
        name: "aac",
      },
      {
        name: "abc",
      },
      {
        name: "acc",
      },
      {
        name: "cdc",
      },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByName)).toEqual(target);
    });
  });

  describe("test getSortFunction", () => {
    test("0", () => {
      expect(getSortFunction(0)).toEqual(sortByName);
    });
    test("1", () => {
      expect(getSortFunction(1)).toEqual(sortByName);
    });
  });
});

describe("debounce", () => {
  jest.useFakeTimers();
  let func: jest.Mock;
  let debouncedFunc: Function;
  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  test("execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});

describe("fetch breeds", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      const breeds = [
        {
          name: "test",
          weight: { metric: "1-2" },
          life_span: "3-4",
          reference_image_id: "",
        },
      ];
      const mockAxiosGet = jest.spyOn(axios, "get");
      mockAxiosGet.mockImplementation(() => Promise.resolve(breeds));
      await fetchTheCatApiByName("");
      expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    });
  });
});

describe("fetch cat image", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      const image = [
        {
          url: "test",
        },
      ];
      const mockAxiosGet = jest.spyOn(axios, "get");
      mockAxiosGet.mockImplementation(() => Promise.resolve(image));
      await fetchTheCatImageById("");
      expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    });
  });
});

export {};
