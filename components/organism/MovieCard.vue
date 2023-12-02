<template>
    <MoleculeCard :image="Poster" class="border-2 border-amber-400 border-solid">
        <div class="flex-1 flex flex-col justify-between gap-4">
            <div>
                <AtomTitle type="h2">{{ Title }}</AtomTitle>
                <p class="font-thin">({{ extended ? Released : Year }})</p>
            </div>
            <div v-if="extended" class="flex flex-wrap justify-center items-center gap-2">
                <AtomBadge icon="heroicons:film" :value="Type" />
                <AtomBadge icon="heroicons:calendar" :value="Year" />
                <AtomBadge icon="heroicons:no-symbol" :value="Rated" />
                <AtomBadge icon="heroicons:tag" :value="genre" />
            </div>

            <p class="text-left">{{ Plot }}</p>

            <div v-if="extended">
                <p><span class="font-bold">Director: </span>{{ Director }}</p>
                <p><span class="font-bold">Actors: </span>{{ actors }}</p>
            </div>
        </div>

        <template #footer>
            <div class="flex gap-2 justify-center items-center font-thin">
                <Icon class="text-lg" name="heroicons:trophy" />
                <p>{{ Awards }}</p>
            </div>
        </template>
    </MoleculeCard>
</template>

<script lang="ts" setup>
import type { Movie } from '../types/Movie.type';

const props = defineProps<Movie & { extended?: boolean }>();
const genre = computed(() => props.Genre.replace(/, /g, " | "));
const actors = computed(() => props.Actors.replace(/, /g, " | "));
</script>