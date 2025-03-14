import { describe, it, expect, beforeEach, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import IdopontFoglalasok from '../../views/FoglalasokView.vue'
import IdopontFoglalas from '../../views/UjFoglalasView.vue'
import { useFoglalasokStore } from '@/stores/foglalasok'
import { createPinia, setActivePinia } from 'pinia'

const toast = {
  error: vi.fn(),
  success: vi.fn()
}

vi.mock('@/stores/foglalasok', () => ({
  useFoglalasokStore: vi.fn(() => ({
    idopontok: [
      { id: 1, nap: "2024-03-20", ido: "10:00", statusz: "szabad" }
    ],
    foglalasMentese: vi.fn((foglalas) => {
      if (!foglalas.idopontid || !foglalas.nev || !foglalas.telefonszam) {
        toast.error("Hiba")
      } else {
        toast.success("Sikeres foglalás")
      }
    })
  }))
}))

describe('Foglalások', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Tartalom ellenőrzése a kezdő oldalon', () => {
    const wrapper = mount(IdopontFoglalasok)
    expect(wrapper.text()).toContain('Foglalt időpontok')
  })

  it('Tartalom ellenőrzése a foglalás oldalon', () => {
    const wrapper = mount(IdopontFoglalas)
    expect(wrapper.text()).toContain('Időpont foglalás')
  })

  it('Hozzáadja az új foglalást?', () => {
    const foglalasok = useFoglalasokStore()
    foglalasok.foglalasMentese({
      "id" : "200",       
      "idopontid": "1",
      "nev": "Kis Tamás",
      "telefonszam": "+36 30 653 2902"})
    expect(toast.success).toHaveBeenCalledWith("Sikeres foglalás")
  })

  it('Hibát ad ha rossz a foglalás?', () => {
    const foglalasok = useFoglalasokStore()
    foglalasok.foglalasMentese({})
    expect(toast.error).toHaveBeenCalledWith("Hiba")
  })
})
