<template>
  <div class="fixed top-4 right-4 z-50 flex gap-2">
    <!-- Dark/Light Mode Toggle -->
    <button
      @click="themeStore.toggleDarkMode()"
      class="p-3 rounded-lg theme-transition"
      :class="darkModeClasses"
      :title="themeStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    >
      <SunIcon v-if="themeStore.isDark" class="w-5 h-5" />
      <MoonIcon v-else class="w-5 h-5" />
    </button>

    <!-- Theme Style Toggle -->
    <!-- <button
     @click="toggleThemeStyle()"
      class="p-3 rounded-lg theme-transition"
      :class="themeStyleClasses"
      :title="themeStore.currentTheme === 'clean' ? 'Switch to Retro Theme' : 'Switch to Clean Theme'"
    >
      <ComputerDesktopIcon v-if="themeStore.currentTheme === 'clean'" class="w-5 h-5" />
      <FilmIcon v-else class="w-5 h-5" />
    </button>  -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { SunIcon, MoonIcon, ComputerDesktopIcon, FilmIcon } from '@heroicons/vue/24/outline'

const themeStore = useThemeStore()

const darkModeClasses = computed(() => {
  const base = 'hover:scale-110'
  
  if (themeStore.currentTheme === 'retro') {
    return `${base} bg-retro-500 text-white hover:bg-retro-600 dark:bg-retro-600 dark:hover:bg-retro-700`
  } else {
    return `${base} bg-clean-500 text-white hover:bg-clean-600 dark:bg-clean-600 dark:hover:bg-clean-700`
  }
})

const themeStyleClasses = computed(() => {
  const base = 'hover:scale-110'
  
  if (themeStore.currentTheme === 'retro') {
    return `${base} bg-retro-400 text-white hover:bg-retro-500 dark:bg-retro-700 dark:hover:bg-retro-800`
  } else {
    return `${base} bg-clean-400 text-white hover:bg-clean-500 dark:bg-clean-700 dark:hover:bg-clean-800`
  }
})

const toggleThemeStyle = () => {
  themeStore.switchTheme(themeStore.currentTheme === 'clean' ? 'retro' : 'clean')
}
</script> 