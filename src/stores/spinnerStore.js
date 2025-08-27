import { defineStore } from "pinia";

export const useSpinnerStore = defineStore("spinner", {
  state: () => ({
    isLoading: false,
    message: "",
  }),
  actions: {
    showSpinner(message = "Loading...") {
      this.isLoading = true;
      this.message = message;
    },
    hideSpinner() {
      this.isLoading = false;
      this.message = "";
    },
  },
});
