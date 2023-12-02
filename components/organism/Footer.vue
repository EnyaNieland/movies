<template>
  <footer class="p-5">
    <AtomContainer class="flex justify-center items-center">
      <span class="text-sm">Company &copy; {{ date.getFullYear() }}</span>
    </AtomContainer>
  </footer>
</template>

<script lang="ts" setup>
const date = new Date()
</script>
