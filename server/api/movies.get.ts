export default defineEventHandler(async (event) => {
  const { omdb } = useRuntimeConfig(event)
  const query = getQuery(event)
  const parameters: URLSearchParams = new URLSearchParams({
    apiKey: omdb.apiKey,
    ...query,
  })
  return await $fetch(`${omdb.apiBase}?${parameters}`)
})
