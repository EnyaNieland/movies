<template>
    <AtomSection>
        <AtomContainer class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8">
          <div v-if="loading">Loading ...</div>
          <OrganismMovieCard v-else v-for="movie in movies" v-bind="movie" />
        </AtomContainer>
    </AtomSection>
</template>

<script lang="ts" setup>
import type { Movie } from '~/components/types/Movie.type';
import { MovieProps } from '~/components/types/MovieProps.enum';

const loading = ref(true);
const movies = ref<Movie[]>([]);

async function initializeMovies() {
    const featuredIds = ["tt0170016", "tt1067106"];

    for (const id of featuredIds) {
        const movie = await useMovie({ [MovieProps.Id]: id, [MovieProps.Plot]: "full" });
        if (movie) movies.value.push(movie);
    }

    loading.value = false;
}

onMounted(async () => await initializeMovies());
</script>
