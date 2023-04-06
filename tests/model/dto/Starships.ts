import { StarshipDetails } from "./StarshipDetails";

export interface Starships {
  count: number;
  next?: string;
  previous?: string;
  results: StarshipDetails[];
}