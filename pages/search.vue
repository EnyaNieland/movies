<template>
  <AtomSection class="justify-center text-center">
    <AtomContainer>
      <AtomTitle type="h1">Welkom!</AtomTitle>
      <p class="text-lg font-thin">Waar ben je naar op zoek?</p>
      <OrganismSearchForm @submit="submit" />
    </AtomContainer>

    <AtomContainer class="grid grid-cols-1 justify-center gap-8">
      <div v-if="loading">Loading ...</div>
      <OrganismMovieCard v-else v-for="movie in movies" v-bind="movie" :extended="true" />
    </AtomContainer>
  </AtomSection>
</template>

<script lang="ts" setup>
import type { Movie } from '../components/types/Movie.type';

const loading = ref(false);
const movies = ref<Movie[]>()

async function submit(data: MovieSearchParams) {
  loading.value = true;
  movies.value = await useMovies(data);
  loading.value = false;
}
</script>
