<template>
    <form class="flex flex-col gap-2 mt-5" @submit.prevent="submit">
        <div class="flex justify-center items-stretch">
            <input
                class="border-2 border-solid border-amber-400 py-2 px-4"
                type="text"
                v-model="formData[MovieProps.Search]"
            />
            <AtomButton type="submit">
                <Icon name="heroicons:magnifying-glass" />
            </AtomButton>
        </div>

        <div class="self-center flex gap-2 ml-4">
            <Icon @click="togglePlot" class="text-amber-400 text-2xl cursor-pointer" :name="plotIcon" />
            <span class="font-thin">Full description</span>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { MovieProps } from '../types/MovieProps.enum';

const emits = defineEmits<{ (event: 'submit', data: MovieSearchParams): void }>();

const formData = ref<MovieSearchParams>({
    [MovieProps.Search]: "",
    [MovieProps.Plot]: "full",
});

const plotIcon = computed(() => `heroicons:check-circle${formData.value[MovieProps.Plot] === 'full' ? '-solid' : ''}`);

async function submit() {
    emits("submit", formData.value);
}

function togglePlot() {
    const plot = formData.value[MovieProps.Plot];
    formData.value[MovieProps.Plot] = plot === "full" ? "short" : "full"
}
</script>