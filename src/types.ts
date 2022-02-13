export interface BreedApi {
  name: string;
  life_span: string;
  weight: {
    metric: string;
  };
  reference_image_id: string;
}

export interface Breed {
  name: string;
  lifeSpan: {
    low: number;
    high: number;
  };
  weight: {
    low: number;
    high: number;
  };
  referenceImageId: string;
}
