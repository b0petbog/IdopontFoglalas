<template>
  <h1 class="text-center">Időpont foglalás</h1>
  <form class="w-50 mx-auto" @submit.prevent="foglalasok.foglalasMentese(ujFoglalas)">
      <label for="nap">Foglalni kíván időpont</label>
      <select class="form-select mt-3" v-model="ujFoglalas.idopontid">
        <option v-for="(idopont, index) in szabadidopontok" :key="idopont.id" :value="idopont.id">
        {{ idopont.nap }} {{ idopont.ido }}
      </option>
      </select>
      <label for="nev">Név</label>
      <input id="nev" class="form-control mb-2" type="text" v-model="ujFoglalas.nev" placeholder="Pl Nagy József">
      <label for="tszam">Telefonszám</label>
      <input id="tszam" class="form-control mb-2" type="text" v-model="ujFoglalas.telefonszam" placeholder="Pl +36303905724">
      <input class="btn btn-danger" type="submit" value="Mentés" :disabled='ujFoglalas.idopontid=="" || ujFoglalas.nev=="" || ujFoglalas.telefonszam==""'>
  </form>
</template>

<script setup>
  import {ref} from 'vue'
  import { useFoglalasokStore } from '@/stores/foglalasok' 
  const foglalasok = useFoglalasokStore()
  const idopontok = foglalasok.idopontok
  const ujFoglalas = ref({       
          "idopontid": "",
          "nev": "",
          "telefonszam": ""})
  const szabadidopontok = ref([])
  szabadidopontok.value = idopontok.filter(item => item.statusz === "szabad")

</script>
<style></style>