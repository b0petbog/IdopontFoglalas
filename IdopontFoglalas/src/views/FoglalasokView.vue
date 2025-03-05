<script setup>
import { useFoglalasokStore } from '@/stores/foglalasok'; 

const foglalasokStore = useFoglalasokStore()
</script>

<template>
  <h1 class="text-center">Foglalt időpontok</h1>
  <div class="row">
    <div v-for="f in foglalasokStore.foglalasok" :key="f.id" class="card col-12 col-md-4 col-lg-3">
      <p class="card-title text-center"> {{f.nap}}</p>
      <p class="card-title text-center"> {{f.idopont}}</p>
      <p class="card-title text-center"> {{f.nev}}</p>
      <p class="card-title text-center"> {{f.telefonszam}}</p>
    </div>
  </div>
</template>
