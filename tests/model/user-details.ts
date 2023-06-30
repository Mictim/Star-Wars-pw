export interface UserDetails {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    username: string;
}

export const defaultUser: UserDetails = {
    firstname: "Luke",
    lastname: "Skywalker",
    email: "test@test.com",
    password: "1qa2ws",
    username: "Luke"
} 