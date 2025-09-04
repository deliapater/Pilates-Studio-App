import { defineStore } from "pinia";
import api from "../services/api";

export const useClassesStore = defineStore("classes", {
  state: () => ({
    classes: [],
    loading: false,
  }),
  actions: {
    async fetchClasses() {
      this.loading = true;
      try {
        const res = await api.get("/classes");
        this.classes = res.data || [];
        console.log("Fetched classes in store: ", this.classes);
      } catch (err) {
        console.error("Failed to fetch classes:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
