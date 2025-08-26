import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const message = ref('')
  const type = ref('success')
  const visible = ref(false)
  const duration = ref(3000)

  const showToast = (msg, toastType = 'success', toastDuration = 3000) => {
    message.value = msg
    type.value = toastType
    duration.value = toastDuration
    visible.value = true
    setTimeout(() => {
      visible.value = false
    }, duration.value)
  }

  return { message, type, visible, duration, showToast }
})
