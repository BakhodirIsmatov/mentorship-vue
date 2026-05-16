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

  const normalizeAssetUrl = (value: string) => {
    if (!value) return value

    if (value.startsWith('//')) {
      return `https:${value}`
    }

    try {
      const parsed = new URL(value, baseUrl)

      if (parsed.protocol === 'http:') {
        parsed.protocol = 'https:'
      }

      return parsed.toString()
    } catch {
      return value
    }
  }

  try {
    const response = await $fetch<Record<string, unknown>>(endpoint, {
      method: 'POST',
      body
    })

    if (typeof response?.certificate_url === 'string') {
      response.certificate_url = normalizeAssetUrl(response.certificate_url)
    }

    if (typeof response?.url === 'string') {
      response.url = normalizeAssetUrl(response.url)
    }

    return response
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to verify certificate with upstream',
      cause: error
    })
  }
})
