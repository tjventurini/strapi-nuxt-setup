<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ul>
    <li v-for="page in pages?.data" :key="page.id">
      Title: {{ page.attributes.attributes.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Page } from '@/types/page'

const { find } = useStrapi()

const {
  data: pages,
  pending,
  refresh,
  error,
} = await useAsyncData('pages', () => find<Page>('pages'))
</script>
