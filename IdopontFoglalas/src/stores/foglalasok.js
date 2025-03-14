import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useFoglalasokStore = defineStore('foglalas', () => {
  const foglalasok = ref([])
  const idopontok = ref([])
  const toast = useToast()

  const loadAllAppointment = () => {
    fetch("http://localhost:3000/foglalasok")
      .then(resp => resp.json())
      .then(data => foglalasok.value = data)
  }

  const loadAllTime = () => {
    fetch("http://localhost:3000/idopontok")
      .then(resp => resp.json())
      .then(data => idopontok.value = data)
  }

  const foglalasMentese = (f) => {
    foglalasok.value.push(f)
    idopontok.value.find((i) => i.id == f.idopontid).statusz = "foglalt"
    axios.post("http://localhost:3000/foglalasok", f)
      .then(resp => {
        toast("Sikeres mentés");
      })
      .catch(() => toast.error("Hiba"))
  }

  return { loadAllAppointment, loadAllTime, idopontok, foglalasok, foglalasMentese}
})
