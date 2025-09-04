import axios from "axios";
import { useUserStore } from "../stores/userStore";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use((config) => {
    const userStore = useUserStore();
    if(userStore.token) {
        config.headers.Authorization = `Bearer ${userStore.token}`
    }
    return config
});

export default api