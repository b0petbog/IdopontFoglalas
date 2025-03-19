<script setup>
import {onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useFoglalasokStore } from './stores/foglalasok'

const foglalasokStore = useFoglalasokStore()

onMounted(() =>{
  foglalasokStore.loadAllAppointment()
  foglalasokStore.loadAllTime()
})

</script>

<template>
      <div class="container">
        <nav class="text-center">
          <RouterLink class="btn btn-outline-primary m-2" to="/">Foglalt időpontok</RouterLink>
          <RouterLink class="btn btn-outline-primary m-2" to="/ujFoglalas">Új időpont foglalás</RouterLink>
        </nav>
          <RouterView />
      </div>
</template>

