import { StarshipDetails } from "./StarshipDetails";

export interface Starships {
  count: number;
  next?: any;
  previous?: any;
  results: StarshipDetails[];
}