/** @type {import('next').NextConfig} */

import dotenv from "dotenv";

dotenv.config();
const nextConfig = {
    // env
    env: {
        APP_URL: process.env.NODE_ENV === "production" ? "https://sujitkhandagale.in" : "http://localhost:3000",
    },
    // image host here
    images: {
        domains: ['example.com', 'localhost'],
    },
};

export default nextConfig;
