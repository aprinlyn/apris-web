<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <main class="pt-16">
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-4xl font-bold mb-4" :class="titleClasses">
              Blog
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <!-- Blog Posts Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="post in blogPosts"
              :key="post.id"
              class="card theme-transition hover:scale-105"
              :class="cardClasses"
            >
              <div class="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{{ post.date }}</span>
                  <span>•</span>
                  <span>{{ post.readTime }} min read</span>
                </div>
                
                <h2 class="text-xl font-bold" :class="postTitleClasses">
                  {{ post.title }}
                </h2>
                
                <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {{ post.excerpt }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-2 py-1 text-xs rounded-full"
                    :class="tagClasses"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <div class="pt-4">
                  <router-link
                    :to="`/blog/${post.id}`"
                    class="inline-flex items-center text-sm font-medium theme-transition"
                    :class="linkClasses"
                  >
                    Read more
                    <ArrowRightIcon class="w-4 h-4 ml-1" />
                  </router-link>
                </div>
              </div>
            </article>
          </div>

          <!-- Load More Button -->
          <div class="text-center mt-12">
            <button
              class="btn-secondary"
              :class="secondaryButtonClasses"
              @click="loadMorePosts"
            >
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import Navigation from '@/components/Navigation.vue'

const themeStore = useThemeStore()

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Building Modern Web Applications with Vue 3',
    excerpt: 'Learn how to create scalable and maintainable web applications using Vue 3 and Composition API. This comprehensive guide covers everything from setup to deployment.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    date: '2024-01-15',
    readTime: 8,
    tags: ['Vue.js', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of web development, from AI integration to new frameworks.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    date: '2024-01-10',
    readTime: 12,
    tags: ['Trends', 'AI', 'Technology']
  },
  {
    id: 3,
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Best practices for improving performance and user experience in React applications, including code splitting and lazy loading.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    date: '2024-01-05',
    readTime: 10,
    tags: ['React', 'Performance', 'Optimization']
  },
  {
    id: 4,
    title: 'Mastering TypeScript for Better Code Quality',
    excerpt: 'A deep dive into TypeScript features that help you write more maintainable and error-free code.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
    date: '2024-01-01',
    readTime: 15,
    tags: ['TypeScript', 'JavaScript', 'Development']
  },
  {
    id: 5,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox, and when to use each layout system for optimal results.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    date: '2023-12-28',
    readTime: 7,
    tags: ['CSS', 'Layout', 'Design']
  },
  {
    id: 6,
    title: 'Building RESTful APIs with Node.js and Express',
    excerpt: 'A complete guide to building scalable RESTful APIs using Node.js, Express, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?w=600&h=400&fit=crop',
    date: '2023-12-25',
    readTime: 20,
    tags: ['Node.js', 'Express', 'API']
  }
]

const loadMorePosts = () => {
  // Implement load more functionality
  console.log('Loading more posts...')
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

const postTitleClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-800 dark:text-retro-200'
  } else {
    return 'text-gray-900 dark:text-white'
  }
})

const tagClasses = computed(() => {
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

const secondaryButtonClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'border-retro-500 text-retro-600 hover:bg-retro-500 hover:text-white dark:border-retro-400 dark:text-retro-400 dark:hover:bg-retro-400 dark:hover:text-white'
  } else {
    return 'border-clean-500 text-clean-600 hover:bg-clean-500 hover:text-white dark:border-clean-400 dark:text-clean-400 dark:hover:bg-clean-400 dark:hover:text-white'
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 