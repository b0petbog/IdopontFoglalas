import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useFoglalasokStore = defineStore('foglalas', () => {
  const foglalasok = ref([])
  const toast = useToast()

  const loadAll = () => {
    fetch("http://localhost:3000/foglalasok")
      .then(resp => resp.json())
      .then(data => foglalasok.value = data)
  }

  const foglalasMentese = (f) => {
    foglalasok.value.push(f)
    axios.post("http://localhost:3000/foglalasok", f)
      .then(resp => {
        console.log(resp.statusText)
        toast("Sikeres mentés");
      })
      .catch(() => toast.error("Hiba"))
  }

  return { loadAll, foglalasok, foglalasMentese}
})
