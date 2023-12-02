import type { Movie } from "../components/types/Movie.type"
import { MovieProps } from "../components/types/MovieProps.enum"

export type OmdbSearchResponse = {
  Search: Movie[]
}

export type MovieSearchParams = Partial<Record<MovieProps, string>>

const url = "/api/movies"

export async function useMovies(params: MovieSearchParams) {
  const { data, error } = await useFetch<OmdbSearchResponse>(url, { params })

  if (error.value || !data.value?.Search) return

  const searchResults = data.value.Search.slice(0, 5)
  const movies: Movie[] = []

  for (const { imdbID } of searchResults) {
    const { s, ...parameters } = params;
    console.log("parameters:", parameters)
    const movie = await useMovie({ [MovieProps.Id]: imdbID, ...parameters})
    if (movie) movies.push(movie)
  }

  return movies
}

export async function useMovie(params: MovieSearchParams) {
  const { data } = await useFetch<Movie>(url, { params });
  return data.value;
}
