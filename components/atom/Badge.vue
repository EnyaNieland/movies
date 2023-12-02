<template>
    <div class="flex items-center gap-2 bg-amber-400 px-4 py-2 rounded-full">
        <Icon v-if="icon" :name="icon" />
        {{ value }}
    </div>
</template>

<script lang="ts" setup>
import type { Badge } from '../types/Badge.type';

defineProps<Badge>();
</script>