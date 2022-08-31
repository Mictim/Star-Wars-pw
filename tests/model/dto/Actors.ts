import { ActorDetails } from "./ActorDetails";

export interface Actors {
  count: number;
  next: string;
  previous?: any;
  results: ActorDetails[];
}