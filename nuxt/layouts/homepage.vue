<template>
  <div class="homepage">
    <h1>Homepage Layout</h1>
    <!-- <DynamicZone :data="homepage" /> -->
    <slot />
  </div>
</template>
<script setup lang="ts">
const { getHomepage } = useHomepage()
// const homepage = await getHomepage()
// console.log(homepage)
</script>
