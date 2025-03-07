<script setup>
import { useFoglalasokStore } from '@/stores/foglalasok'; 

const foglalasokStore = useFoglalasokStore()

</script>

<template>
  <h1 class="text-center">Foglalt időpontok</h1>
  <div class="row">
    <div v-for="f in foglalasokStore.foglalasok" :key="f.id" class="card m-1 col-14 col-md-4 col-lg-2">
      <p class="card-title text-center"> {{f.nev}}</p>
      <p class="card-title text-center"> {{f.telefonszam}}</p>
      <p class="card-title text-center"> {{foglalasokStore.idopontok[f.idopontid].nap}} {{foglalasokStore.idopontok[f.idopontid].ido}}</p>
    </div>
  </div>
</template>
