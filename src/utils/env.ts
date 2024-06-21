import { config } from "dotenv";

config();

export class Env {
    static readonly LISTEN_PORT = parseInt(process.env.LISTEN_PORT || "3000");
    
    static readonly GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
    static readonly GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
    static readonly GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "";
}