<template>
  <div id="app" :class="themeClasses">
    <ThemeToggle />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import ThemeToggle from '@/components/ThemeToggle.vue'

const themeStore = useThemeStore()

const themeClasses = computed(() => {
  const classes = ['min-h-screen']
  
  if (themeStore.isDark) {
    classes.push('dark')
  }
  
  if (themeStore.currentTheme === 'retro') {
    classes.push('font-retro')
  } else {
    classes.push('font-clean')
  }
  
  return classes.join(' ')
})
</script> 