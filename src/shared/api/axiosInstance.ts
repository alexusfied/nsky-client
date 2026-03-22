import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8192/api",
    headers: {
        "Content-Type": "application/json"
    }
});