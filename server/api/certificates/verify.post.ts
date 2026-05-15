export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.apiBase?.trim()
  const body = await readBody(event)

  if (!baseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Verify API is not configured'
    })
  }

  const endpoint = new URL('/certificate/verify', baseUrl).toString()

  try {
    return await $fetch(endpoint, {
      method: 'POST',
      body
    })
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to verify certificate with upstream',
      cause: error
    })
  }
})
