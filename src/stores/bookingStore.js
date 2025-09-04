import { defineStore } from "pinia";
import api from "../services/api";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    bookings: [],
  }),

  actions: {
    async fetchBookings() {
      try {
        const res = await api.get("bookings");
        this.bookings = res.data;
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    },

    async bookClass() {
      try {
        const res = await api.post("/bookings", { class_id: classId });
        this.bookings.push(res.data);
        return { type: "success", message: "✅ Class booked successfully" };
      } catch (err) {
        return { type: "error", message: "❌ Could not book class" };
      }
    },

    async cancelBooking() {
      try {
        await api.delete(`/bookings/${id}`);
        this.bookings = this.bookings.filter((b) => b.id !== id);
        return { type: "success", message: "✅ Booking cancelled" };
      } catch (err) {
        return { type: "error", message: "❌ Could not cancel booking" };
      }
    },
  },
});