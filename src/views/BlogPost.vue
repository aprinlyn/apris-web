<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <main class="pt-16">
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <!-- Back to Blog -->
          <div class="mb-8">
            <router-link
              to="/blog"
              class="text-sm font-medium theme-transition"
              :class="linkClasses"
            >
              ← Back to Blog
            </router-link>
          </div>

          <!-- Loading State -->
          <div v-if="isLoading" class="text-center py-12">
            <p class="text-gray-600 dark:text-gray-400">Loading post...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="!post" class="text-center py-12">
            <p class="text-gray-600 dark:text-gray-400">Post not found</p>
            <router-link
              to="/blog"
              class="mt-4 inline-block text-sm font-medium theme-transition"
              :class="linkClasses"
            >
              Return to Blog
            </router-link>
          </div>

          <!-- Blog Post Content -->
          <article v-else class="prose dark:prose-invert max-w-none">
            <h1 class="text-4xl font-bold mb-4" :class="titleClasses">
              {{ post.title }}
            </h1>
            
            <div class="flex items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
              <span>{{ post.date }}</span>
              <span>·</span>
              <span>{{ post.readTime }} min read</span>
            </div>

            <div class="mb-8">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div class="space-y-4 text-gray-600 dark:text-gray-300" v-html="post.content"></div>

            <div class="mt-8 flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2 py-1 text-xs rounded-full"
                :class="tagClasses"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import Navigation from '@/components/Navigation.vue'
import { loadBlogPost } from '@/utils/blogLoader'
import type { BlogPost } from '@/utils/blogLoader'

const route = useRoute()
const themeStore = useThemeStore()
const post = ref<BlogPost | null>(null)

// Placeholder for loading state
const isLoading = ref(true)

// Load the blog post and update loading state
onMounted(async () => {
  try {
    const slug = route.params.slug as string
    post.value = await loadBlogPost(slug)
  } catch (error) {
    console.error('Error loading blog post:', error)
    post.value = null
  } finally {
    isLoading.value = false
  }
})

// Computed classes
const titleClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-700 dark:text-retro-300'
  } else {
    return 'text-gray-900 dark:text-white'
  }
})

const linkClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'text-retro-600 hover:text-retro-700 dark:text-retro-400 dark:hover:text-retro-300'
  } else {
    return 'text-clean-600 hover:text-clean-700 dark:text-clean-400 dark:hover:text-clean-300'
  }
})

const tagClasses = computed(() => {
  if (themeStore.currentTheme === 'retro') {
    return 'bg-retro-200 text-retro-800 dark:bg-retro-700 dark:text-retro-200'
  } else {
    return 'bg-clean-200 text-clean-800 dark:bg-clean-700 dark:text-clean-200'
  }
})
</script>