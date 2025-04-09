export type SubscriptionResponse = {
  message: string;
}

export type FilterResponse = {
  filter: string;
  name: string;
  imgURL: string;
}

export type FiltersResponse = {
  page: number;
  perPage: number;
  totalPages: number;
  results: FilterResponse[];
}

export type QuoteResponse = {
  author: string;
  quote: string;
}

export type ExerciseResponse = {
  _id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  description: string;
  rating: number;
  burnedCalories: number;
  time: number;
  popularity: number;
}

export type ExercisesResponse = {
  page: number;
  perPage: number;
  totalPages: number;
  results: ExerciseResponse[];
}

