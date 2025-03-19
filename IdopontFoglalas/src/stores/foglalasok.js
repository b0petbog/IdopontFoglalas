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
    if(f.idopontid = "" || f.nev == "" || f.telefonszam=="")
    {
      toast.error("Töltse ki az összes mezőt!")
    }
    else{
      foglalasok.value.push(f)
    const idopont = idopontok.value.find((i) => i.id == f.idopontid);
    if (idopont) {
      idopont.statusz = "foglalt";
    }
    axios.put(`http://localhost:3000/idopontok/${f.idopontid}`, idopont)
    .then(() => {
      axios.post("http://localhost:3000/foglalasok", f)
        .then(() => {
          toast("Sikeres foglalás");
        })
        .catch(() => {
          toast.error("Hiba a foglalás mentésekor");
        });
    })
    .catch(() => {
      toast.error("Hiba az időpont státuszának frissítésekor");
    });
    }
    
  }

  return { loadAllAppointment, loadAllTime, idopontok, foglalasok, foglalasMentese}
})
