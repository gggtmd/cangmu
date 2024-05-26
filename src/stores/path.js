import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePathStore = defineStore(
  'path',
  () => {
  const name = ref("")

  const setPathName = (value) => {
    name.value = value
  }

  return { name, setPathName }
})
