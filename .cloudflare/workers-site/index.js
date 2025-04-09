import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things:
 * 1. we will skip caching on the edge, which makes it easier to debug
 * 2. we will return an error message on exception in your Response
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }

    // Handle language path redirects
    if (url.pathname === '/' || url.pathname === '') {
      // Default to English or detect based on Accept-Language
      const acceptLanguage = event.request.headers.get('Accept-Language') || ''
      const preferredLanguage = acceptLanguage.includes('de') ? 'de' : 'en'
      
      return Response.redirect(`${url.origin}/${preferredLanguage}`, 302)
    }

    return await getAssetFromKV(event, options)
  } catch (e) {
    // Fall back to serving index.html for SPA routing
    if (e.message.includes('could not find')) {
      // Check if the request is for a specific language route
      const langMatch = url.pathname.match(/^\/(en|de)\/(.*)/)
      if (langMatch) {
        try {
          const lang = langMatch[1]
          // Try to serve the language index page
          const response = await getAssetFromKV(event, {
            mapRequestToAsset: req => {
              const url = new URL(req.url)
              url.pathname = `/${lang}/index.html`
              return new Request(url.toString(), req)
            },
          })
          return response
        } catch (e) {
          // If that fails, fall through to the default 404
        }
      }
      
      // Default 404 page
      return new Response('Not Found', { status: 404 })
    }

    if (DEBUG) {
      return new Response(e.message || e.toString(), { status: 500 })
    }
    return new Response('Internal Error', { status: 500 })
  }
} 