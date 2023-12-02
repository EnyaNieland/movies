<template>
    <h1 v-if="type === 'h1'" class="text-5xl font-bold"><slot/></h1>
    <h2 v-else-if="type === 'h2'" class="text-3xl font-bold"><slot/></h2>
    <h3 v-else-if="type === 'h3'" class="text-2xl font-bold"><slot/></h3>
    <h4 v-else-if="type === 'h4'" class="text-xl font-bold"><slot/></h4>
    <h5 v-else-if="type === 'h5'" class="text-lg font-bold"><slot/></h5>
    <h6 v-else class="font-bold"><slot/></h6>
</template>

<script lang="ts" setup>
defineProps<{ type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}>()
</script>