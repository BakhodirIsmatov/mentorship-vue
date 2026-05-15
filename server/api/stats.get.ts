export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseUrl = config.apiBase?.trim()
  const endpoint = baseUrl ? new URL('/orders/stats', baseUrl).toString() : ''

  if (!endpoint) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Stats API is not configured'
    })
  }

  try {
    return await $fetch(endpoint)
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to load stats from upstream',
      cause: error
    })
  }
})
