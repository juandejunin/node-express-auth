import { config } from "dotenv";
config();

export const BBDD_URI =  process.env.MONGODB_URI;
export const PORT = process.env.PORT || 4000;
export const JWT_SECRET_KEY = "yoursecretkey";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";