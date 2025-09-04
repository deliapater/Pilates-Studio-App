import { defineStore } from "pinia";
import api from "../services/api";


export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: localStorage.getItem("currentUser") || "",
    token: localStorage.getItem("token") || "",
    userBooking: []
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await api.post("/login", {email,password,});

        this.token = response.data.token;
        this.currentUser = response.data.currentUser;

        localStorage.setItem("token", this.token);
        localStorage.setItem("currentUser", this.currentUser);

        await this.fetchUserBookings()
      } catch (error) {
        throw error.response?.data?.message || "Login failed";
      }
    },
    logout() {
      this.token = "";
      this.currentUser = "";
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");
    },

    async fetchUserBookings() {
      try {
        const res = await api.get("/bookings", {
          headers: { Authorization: `Bearer ${this.token}` }
        });
        console.log("Fetched bookings:", res.data);
        this.userBookings = res.data;
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      }
    }
  },
});
