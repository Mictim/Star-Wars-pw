export interface StarshipDetails {
    name: string;
    model: string;
    manufacturer: string;
    cost: string;
    lenght: string;
    speed: string;
    crew: string;
}

export const defaultStarship: StarshipDetails = {
    name: "Star Destroyer",
    model: "Imperial I-class Star Destroyer",
    manufacturer: "Kuat Drive Yards",
    cost: "150000000",
    lenght: "1,600",
    speed: "975",
    crew: "47,060"
}