<template>
  <div class="homepage">
    <h1>{{ homepage.data.attributes }}</h1>
    <!-- <DynamicZone :data="homepage.data[0]?.attributes.sections" /> -->
    <slot />
  </div>
</template>
<script setup lang="ts">
const { getHomepage } = useHomepage()
const { homepage } = await getHomepage()
</script>
