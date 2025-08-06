<template>
  <nav class="fixed top-0 left-0 right-10 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold">
            <span :class="logoClasses">Aprias</span>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium theme-transition"
              :class="getNavLinkClasses(item.href)"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-md theme-transition"
            :class="mobileMenuButtonClasses"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 rounded-md text-base font-medium theme-transition"
          :class="getMobileNavLinkClasses(item.href)"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const themeStore = useThemeStore()
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' }
]

const logoClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-600 dark:text-retro-400'
  } else {
    return 'text-clean-600 dark:text-clean-400'
  }
})

const getNavLinkClasses = (href: string) => {
  const isActive = route.path === href
  const base = 'theme-transition'
  
  if (themeStore.currentTheme === 'retro') {
    if (isActive) {
      return `${base} bg-retro-500 text-white`
    } else {
      return `${base} text-retro-600 hover:bg-retro-100 dark:text-retro-400 dark:hover:bg-retro-900`
    }
  } else {
    if (isActive) {
      return `${base} bg-clean-500 text-white`
    } else {
      return `${base} text-clean-600 hover:bg-clean-100 dark:text-clean-400 dark:hover:bg-clean-900`
    }
  }
}

const getMobileNavLinkClasses = (href: string) => {
  const isActive = route.path === href
  const base = 'theme-transition'
  
  if (themeStore.currentTheme === 'retro') {
    if (isActive) {
      return `${base} bg-retro-500 text-white`
    } else {
      return `${base} text-retro-600 hover:bg-retro-100 dark:text-retro-400 dark:hover:bg-retro-900`
    }
  } else {
    if (isActive) {
      return `${base} bg-clean-500 text-white`
    } else {
      return `${base} text-clean-600 hover:bg-clean-100 dark:text-clean-400 dark:hover:bg-clean-900`
    }
  }
}

const mobileMenuButtonClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-600 hover:bg-retro-100 dark:text-retro-400 dark:hover:bg-retro-900'
  } else {
    return 'text-clean-600 hover:bg-clean-100 dark:text-clean-400 dark:hover:bg-clean-900'
  }
})
</script> 