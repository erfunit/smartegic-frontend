export const API_URL = process.env.API_URL;
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const API_ROUTES_BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://smartegic.io";
