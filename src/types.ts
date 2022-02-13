export interface BreedApi {
  name: string;
  life_span: string;
  weight: {
    metric: string;
  };
  reference_image_id: string;
  // adaptability: number;
  // affection_level: number;
  // alt_names: string;
  // cfa_url: string;
  // child_friendly: number;
  // country_code: string;
  // country_codes: string;
  // description: string;
  // dog_friendly: number;
  // energy_level: number;
  // experimental: number;
  // grooming: number;
  // hairless: number;
  // health_issues: number;
  // hypoallergenic: number;
  // id: string;
  // indoor: number;
  // intelligence: number;
  // lap: number;
  // natural: number;
  // origin: string;
  // rare: number;
  // rex: number;
  // shedding_level: number;
  // short_legs: number;
  // social_needs: number;
  // stranger_friendly: number;
  // suppressed_tail: number;
  // temperament: string;
  // vcahospitals_url: string;
  // vetstreet_url: string;
  // vocalisation: number;
  // wikipedia_url: string;
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
