import axios from "axios";

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("auth") ? localStorage.getItem("auth") : ""}`
    }
});