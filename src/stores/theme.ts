import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  const currentTheme = ref<'clean' | 'retro'>('clean')

  // Load theme from localStorage on initialization
  const loadTheme = () => {
    const savedDark = localStorage.getItem('isDark')
    const savedTheme = localStorage.getItem('currentTheme')
    
    if (savedDark !== null) {
      isDark.value = JSON.parse(savedDark)
    }
    
    if (savedTheme) {
      currentTheme.value = savedTheme as 'clean' | 'retro'
    }
  }

  // Save theme to localStorage
  const saveTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(isDark.value))
    localStorage.setItem('currentTheme', currentTheme.value)
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  // Switch theme
  const switchTheme = (theme: 'clean' | 'retro') => {
    currentTheme.value = 'retro'
  }

  // Watch for changes and save to localStorage
  watch([isDark, currentTheme], saveTheme, { deep: true })

  // Load theme on store initialization
  loadTheme()

  return {
    isDark,
    currentTheme,
    toggleDarkMode,
    switchTheme
  }
}) 