<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-full shadow-lg p-4">
        <div class="md:col-span-1 w-full md:basis-1/4">
            <img class="min-w mx-auto" :src="image" />
        </div>
        <div class="md:col-span-3 flex flex-col gap-4">
            <header class="flex">
                <slot name="header" />
            </header>
            <main class="flex-1 flex gap-4">
                <slot />
            </main>
            <footer class="flex justify-center items-center p-4 bg-amber-400 p-4" >
                <slot name="footer" />
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{ image: string }>();
</script>