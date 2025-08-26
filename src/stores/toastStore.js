import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const toast = ref({ message: '', type: 'success', visible: false })

  function show(message, type = 'success', duration = 3000) {
    toast.value = { message, type, visible: true }
    setTimeout(() => toast.value.visible = false, duration)
  }

  return { toast, show }
})
