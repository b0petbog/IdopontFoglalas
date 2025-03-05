<template>
  <h1 class="text-center">Foglalt időpontok</h1>
  <form class="w-50 mx-auto" @submit.prevent="foglalasok.foglalasMentese(ujFoglalas)">
      <label for="nap">Foglalni kíván nap</label>
      <input id="nap" class="form-control mb-2" type="text" v-model="ujFoglalas.nap" placeholder="Hétfő">
      <label for="ido">Foglalni kíván nap</label>
      <input id="ido" class="form-control mb-2" type="text" v-model="ujFoglalas.idopont" placeholder="8:00">
      <label for="nev">Név</label>
      <input id="nev" class="form-control mb-2" type="text" v-model="ujFoglalas.nev" placeholder="Pl Nagy József">
      <label for="tszam">Telefonszám</label>
      <input id="tszam" class="form-control mb-2" type="text" v-model="ujFoglalas.telefonszam" placeholder="Pl +36303905724">
      <input class="btn btn-success" type="submit" value="Mentés">
  </form>
</template>

<script setup>
  import {ref} from 'vue'
  import { useFoglalasokStore } from '@/stores/foglalasok' 
  const foglalasok = useFoglalasokStore()
  const ujFoglalas = ref({       
          "nap": "",
          "idopont": "",
          "nev": "",
          "telefonszam": ""})
  
</script>
<style></style>