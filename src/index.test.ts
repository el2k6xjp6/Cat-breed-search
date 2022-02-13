import {
  getSortFunction,
  sortByNameAtoZ,
  sortByNameZtoA,
  sortByWeightLowToHigh,
  sortByWeightHighToLow,
  sortByLifeSpanLowToHigh,
  sortByLifeSpanHighToLow,
  debounce,
  fetchTheCatApiByName,
  fetchTheCatImageById,
} from "./utils";
import { Breed } from "./types";
import axios from "axios";

describe("test utils", () => {
  describe("test sortByNameAtoZ", () => {
    const source = [
      { name: "a" },
      { name: "c" },
      { name: "b" },
      { name: "d" },
    ] as Breed[];
    const target = [
      { name: "a" },
      { name: "b" },
      { name: "c" },
      { name: "d" },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByNameAtoZ)).toEqual(target);
    });
  });

  describe("test sortByNameZtoA", () => {
    const source = [
      { name: "a" },
      { name: "c" },
      { name: "b" },
      { name: "d" },
    ] as Breed[];
    const target = [
      { name: "d" },
      { name: "c" },
      { name: "b" },
      { name: "a" },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByNameZtoA)).toEqual(target);
    });
  });

  describe("test sortByWeightLowToHigh", () => {
    const source = [
      { weight: { low: 2 } },
      { weight: { low: 1 } },
      { weight: { low: 9 } },
      { weight: { low: 4 } },
    ] as Breed[];
    const target = [
      { weight: { low: 1 } },
      { weight: { low: 2 } },
      { weight: { low: 4 } },
      { weight: { low: 9 } },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByWeightLowToHigh)).toEqual(target);
    });
  });

  describe("test sortByWeightHighToLow", () => {
    const source = [
      { weight: { high: 2 } },
      { weight: { high: 1 } },
      { weight: { high: 9 } },
      { weight: { high: 4 } },
    ] as Breed[];
    const target = [
      { weight: { high: 9 } },
      { weight: { high: 4 } },
      { weight: { high: 2 } },
      { weight: { high: 1 } },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByWeightHighToLow)).toEqual(target);
    });
  });

  describe("test sortByLifeSpanLowToHigh", () => {
    const source = [
      { lifeSpan: { low: 2 } },
      { lifeSpan: { low: 1 } },
      { lifeSpan: { low: 9 } },
      { lifeSpan: { low: 4 } },
    ] as Breed[];
    const target = [
      { lifeSpan: { low: 1 } },
      { lifeSpan: { low: 2 } },
      { lifeSpan: { low: 4 } },
      { lifeSpan: { low: 9 } },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByLifeSpanLowToHigh)).toEqual(target);
    });
  });

  describe("test sortByLifeSpanHighToLow", () => {
    const source = [
      { lifeSpan: { high: 2 } },
      { lifeSpan: { high: 1 } },
      { lifeSpan: { high: 9 } },
      { lifeSpan: { high: 4 } },
    ] as Breed[];
    const target = [
      { lifeSpan: { high: 9 } },
      { lifeSpan: { high: 4 } },
      { lifeSpan: { high: 2 } },
      { lifeSpan: { high: 1 } },
    ] as Breed[];
    test("sort array", () => {
      expect(source.sort(sortByLifeSpanHighToLow)).toEqual(target);
    });
  });

  describe("test getSortFunction", () => {
    test("0", () => {
      expect(getSortFunction(0)).toEqual(sortByNameAtoZ);
    });
    test("1", () => {
      expect(getSortFunction(1)).toEqual(sortByNameZtoA);
    });
    test("2", () => {
      expect(getSortFunction(2)).toEqual(sortByWeightLowToHigh);
    });
    test("3", () => {
      expect(getSortFunction(3)).toEqual(sortByWeightHighToLow);
    });
    test("4", () => {
      expect(getSortFunction(4)).toEqual(sortByLifeSpanLowToHigh);
    });
    test("5", () => {
      expect(getSortFunction(5)).toEqual(sortByLifeSpanHighToLow);
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
      const breedsApi = {
        data: [
          {
            name: "test",
            weight: { metric: "1 - 2" },
            life_span: "3 - 4",
            reference_image_id: "",
          },
        ],
      };
      const breeds = [
        {
          name: "test",
          weight: { low: 1, high: 2 },
          lifeSpan: { low: 3, high: 4 },
          referenceImageId: "",
        },
      ];
      const mockAxiosGet = jest.spyOn(axios, "get");
      mockAxiosGet.mockImplementation(() => Promise.resolve(breedsApi));
      const result = await fetchTheCatApiByName("");
      expect(mockAxiosGet).toHaveBeenCalledTimes(1);
      expect(result).toEqual(breeds);
    });
  });
});

describe("fetch cat image", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      const image = {
        data: [
          {
            url: "test",
          },
        ],
      };
      const mockAxiosGet = jest.spyOn(axios, "get");
      mockAxiosGet.mockImplementation(() => Promise.resolve(image));
      const result = await fetchTheCatImageById("");
      expect(mockAxiosGet).toHaveBeenCalledTimes(1);
      expect(result).toEqual(image.data);
    });
  });
});

export {};
