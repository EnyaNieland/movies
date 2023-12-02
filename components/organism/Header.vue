<template>
  <header class="p-2 shadow-lg">
    <AtomContainer class="flex justify-between items-center">
      <NuxtLink to="/">
        <Icon class="text-4xl text-amber-400" name="heroicons:film" />
      </NuxtLink>
      <NuxtLink to="/search">
        <Icon name="heroicons:magnifying-glass" />
      </NuxtLink>
    </AtomContainer>
  </header>
</template>

<script lang="ts" setup></script>
