export interface ActorDetails {
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    birthYear: string;
    gender: string;
}

export const defaultActor: ActorDetails = {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hairColor: "n/a",
    skinColor: "gold",
    birthYear: "112BBY",
    gender: "n/a"
}