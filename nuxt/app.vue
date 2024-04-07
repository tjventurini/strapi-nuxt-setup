<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <p>Status: {{ status }}</p>
  <p>Error: {{ pagesError?.statusCode }}</p>
  <ul>
    <li v-for="page in pages?.data">Title: {{ page.attributes.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import type { Page } from '@/types/page'

const { find } = useStrapi()

const {
  data: pages,
  pending,
  status,
  refresh,
  error: pagesError,
} = await useAsyncData('pages', () => find<Page>('pages'))

watch(pages, () => {
  console.log('pages changed', pages)
})
</script>
