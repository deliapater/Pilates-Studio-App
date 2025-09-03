import axios from "axios";
import { useUserStore } from "../stores/userStore";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use((config) => {
    const userStore = useUserStore();
    if(userStore.token) {
        config.headers.Authorization = `Bearer ${useUserStore.token}`
    }
    return config
});

export default api