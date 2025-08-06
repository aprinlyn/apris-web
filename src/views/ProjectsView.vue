<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <main class="pt-16">
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-4xl font-bold mb-4" :class="titleClasses">
              Projects
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              A collection of my work and side projects
            </p>
          </div>

          <!-- Filter Buttons -->
          <div class="flex justify-center mb-12">
            <div class="flex flex-wrap gap-4">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                class="px-6 py-2 rounded-lg font-medium theme-transition"
                :class="getFilterButtonClasses(category)"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="project in filteredProjects"
              :key="project.id"
              class="card theme-transition hover:scale-105 group"
              :class="cardClasses"
            >
              <div class="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ project.year }}
                  </span>
                  <div class="flex space-x-2">
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 rounded-lg theme-transition"
                      :class="iconButtonClasses"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      v-if="project.live"
                      :href="project.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 rounded-lg theme-transition"
                      :class="iconButtonClasses"
                    >
                      <ArrowTopRightOnSquareIcon class="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h2 class="text-xl font-bold" :class="projectTitleClasses">
                  {{ project.title }}
                </h2>
                
                <p class="text-gray-600 dark:text-gray-300">
                  {{ project.description }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 text-sm rounded-full"
                    :class="techTagClasses"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </article>
          </div>

          <!-- Empty State -->
          <div v-if="filteredProjects.length === 0" class="text-center py-12">
            <p class="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import Navigation from '@/components/Navigation.vue'

const themeStore = useThemeStore()
const selectedCategory = ref('All')

const categories = ['All', 'Web Development', 'Mobile', 'Design', 'Full Stack']

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    year: '2024',
    category: 'Full Stack',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    year: '2023',
    category: 'Web Development',
    technologies: ['React', 'Firebase', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with dark mode and theme switching capabilities.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    year: '2024',
    category: 'Web Development',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile app for tracking workouts and nutrition with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    year: '2023',
    category: 'Mobile',
    technologies: ['React Native', 'Redux', 'Firebase'],
    github: 'https://github.com',
    live: null
  },
  {
    id: 5,
    title: 'UI Design System',
    description: 'A comprehensive design system with reusable components and design tokens.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    year: '2024',
    category: 'Design',
    technologies: ['Figma', 'Storybook', 'CSS'],
    github: null,
    live: 'https://example.com'
  },
  {
    id: 6,
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with features like file sharing, emoji reactions, and group conversations.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    year: '2023',
    category: 'Full Stack',
    technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

const getFilterButtonClasses = (category: string) => {
  const isActive = selectedCategory.value === category
  const base = 'theme-transition'
  
  if (themeStore.currentTheme === 'retro') {
    if (isActive) {
      return `${base} bg-retro-500 text-white`
    } else {
      return `${base} bg-retro-100 text-retro-700 hover:bg-retro-200 dark:bg-retro-800 dark:text-retro-300 dark:hover:bg-retro-700`
    }
  } else {
    if (isActive) {
      return `${base} bg-clean-500 text-white`
    } else {
      return `${base} bg-clean-100 text-clean-700 hover:bg-clean-200 dark:bg-clean-800 dark:text-clean-300 dark:hover:bg-clean-700`
    }
  }
}

// Computed classes
const titleClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-700 dark:text-retro-300'
  } else {
    return 'text-gray-900 dark:text-white'
  }
})

const cardClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-50 dark:bg-retro-900/50 border border-retro-200 dark:border-retro-700'
  } else {
    return 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
  }
})

const projectTitleClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-800 dark:text-retro-200'
  } else {
    return 'text-gray-900 dark:text-white'
  }
})

const techTagClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-200 text-retro-800 dark:bg-retro-700 dark:text-retro-200'
  } else {
    return 'bg-clean-200 text-clean-800 dark:bg-clean-700 dark:text-clean-200'
  }
})

const iconButtonClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-600 hover:bg-retro-100 dark:text-retro-400 dark:hover:bg-retro-800'
  } else {
    return 'text-clean-600 hover:bg-clean-100 dark:text-clean-400 dark:hover:bg-clean-800'
  }
})
</script> 