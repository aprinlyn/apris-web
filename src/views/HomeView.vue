<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <!-- Main Content -->
    <main class="pt-16">
      <!-- Hero Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <!-- Profile Section -->
          <div class="flex items-center mb-16 gap-8 md:flex-row flex-col">
            <!-- Left: Profile Image -->
            <div class="md:w-1/3">
              <div class="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- Right: Content -->
            <div class="md:w-2/3 text-center md:text-left">
              <h1 class="text-4xl font-bold mb-4">
                <span :class="nameClasses">Apri Liyantoko</span>
              </h1>
              <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Software Engineer Enthusiast
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm a passionate software engineer with a focus on building innovative solutions.
              </p>
              <div class="flex space-x-4 justify-center md:justify-start">
                <a href="#" class="btn-primary" :class="primaryButtonClasses">
                  Download CV
                </a>
                <a href="#" class="btn-secondary" :class="secondaryButtonClasses">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <!-- Content Sections -->
          <div class="flex flex-col gap-8">
            <!-- Latest Blog Posts -->
            <div class="card" :class="cardClasses">
              <h2 class="text-2xl font-bold mb-6" :class="sectionTitleClasses">
                Latest Blog Posts
              </h2>
              <div class="space-y-4">
                <div v-for="post in latestPosts" :key="post.id" class="p-4 rounded-lg theme-transition hover:scale-105" :class="postCardClasses">
                  <h3 class="font-semibold mb-2" :class="postTitleClasses">
                    {{ post.title }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {{ post.excerpt }}
                  </p>
                  <div class="flex justify-between items-center">
                    <span class="text-xs text-gray-500 dark:text-gray-500">
                      {{ post.date }}
                    </span>
                    <router-link
                      :to="`/blog/${post.slug}`"
                      class="text-sm font-medium theme-transition"
                      :class="linkClasses"
                    >
                      Read more →
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="mt-6 text-left">
                <router-link
                  to="/blog"
                  class="btn-secondary"
                  :class="secondaryButtonClasses"
                >
                  View All Posts
                </router-link>
              </div>
            </div>

            <!-- Featured Projects -->
            <div class="card" :class="cardClasses">
              <h2 class="text-2xl font-bold mb-6" :class="sectionTitleClasses">
                Featured Projects
              </h2>
              <div class="space-y-4">
                <div
                  v-for="project in featuredProjects"
                  :key="project.id"
                  class="p-4 rounded-lg theme-transition hover:scale-105"
                  :class="projectCardClasses"
                >
                  <h3 class="font-semibold mb-2" :class="projectTitleClasses">
                    {{ project.title }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {{ project.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="px-2 py-1 text-xs rounded-full"
                      :class="techTagClasses"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-xs text-gray-500 dark:text-gray-500">
                      {{ project.year }}
                    </span>
                    <router-link
                      :to="`/projects/${project.slug}`"
                      class="text-sm font-medium theme-transition"
                      :class="linkClasses"
                    >
                      View project →
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="mt-6 text-left">
                <router-link
                  to="/projects"
                  class="btn-secondary"
                  :class="secondaryButtonClasses"
                >
                  View All Projects
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import Navigation from '@/components/Navigation.vue'

const themeStore = useThemeStore()

// Sample data
const latestPosts = [
  {
    slug: 'building-api-docs-with-swagger',
    id: 1,
    title: 'Building Interactive API Docs with Swagger UI in Java Spring Boot',
    excerpt: 'A step-by-step tutorial how to integrate API Docs using Swagger UI in Java Spring Boot.',
    date: '2025-05-12'
  }
]

const featuredProjects = [
  {
    slug: 'my-very-first-personal-website',
    id: 1,
    title: 'My Very First Personal Website',
    description: 'A Website to show my personal projects and experiences.',
    technologies: ['Vue.js', 'Tailwind CSS'],
    year: '2025'
  }
]

// Computed classes
const nameClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-600 dark:text-retro-400'
  } else {
    return 'text-clean-600 dark:text-clean-400'
  }
})

const cardClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-50 dark:bg-retro-900/50 border border-retro-200 dark:border-retro-700'
  } else {
    return 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
  }
})

const sectionTitleClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-700 dark:text-retro-300'
  } else {
    return 'text-gray-900 dark:text-white'
  }
})

const postCardClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-100 dark:bg-retro-800/50 hover:bg-retro-200 dark:hover:bg-retro-700'
  } else {
    return 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
  }
})

const projectCardClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-100 dark:bg-retro-800/50 hover:bg-retro-200 dark:hover:bg-retro-700'
  } else {
    return 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
  }
})

const postTitleClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-800 dark:text-retro-200'
  } else {
    return 'text-gray-900 dark:text-white'
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

const linkClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-600 hover:text-retro-700 dark:text-retro-400 dark:hover:text-retro-300'
  } else {
    return 'text-clean-600 hover:text-clean-700 dark:text-clean-400 dark:hover:text-clean-300'
  }
})

const primaryButtonClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-500 hover:bg-retro-600 text-white'
  } else {
    return 'bg-clean-500 hover:bg-clean-600 text-white'
  }
})

const secondaryButtonClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'border-retro-500 text-retro-600 hover:bg-retro-500 hover:text-white dark:border-retro-400 dark:text-retro-400 dark:hover:bg-retro-400 dark:hover:text-white'
  } else {
    return 'border-clean-500 text-clean-600 hover:bg-clean-500 hover:text-white dark:border-clean-400 dark:text-clean-400 dark:hover:bg-clean-400 dark:hover:text-white'
  }
})
</script>