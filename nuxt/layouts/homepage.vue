<template>
  <div class="homepage">
    <h1>{{ homepage }}</h1>
    <!-- <DynamicZone :data="homepage.data[0]?.attributes.sections" /> -->
    <slot />
    <TestGreeting />
    <TestComponent />
  </div>
</template>
<script setup lang="ts">
import { TestGreeting, TestComponent } from "luvely";
const { getHomepage } = useHomepage();
const { homepage } = await getHomepage();
</script>
