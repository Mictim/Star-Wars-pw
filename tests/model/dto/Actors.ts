import { ActorDetails } from "./ActorDetails";

export interface Actors {
  count: number;
  next: string;
  previous?: string;
  results: ActorDetails[];
}