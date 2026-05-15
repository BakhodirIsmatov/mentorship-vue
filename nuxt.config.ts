// https://nuxt.com/docs/api/configuration/nuxt-config

// Render <html data-theme="..." lang="..."> BEFORE Vue hydrates so colors
// and typography never flash the wrong values. Reads cookie first, then
// falls back to OS preference.
const earlyInit = `(()=>{try{var c=document.cookie||'';
var m=c.match(/(?:^|; )theme=(light|dark)/);
var t=m?m[1]:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.dataset.theme=t;
var l=c.match(/(?:^|; )locale=(uz|ru|en)/);
if(l)document.documentElement.lang=l[1];}catch(e){}})();`

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  runtimeConfig: {
    apiBase: process.env.API_BASE_URL || 'https://mentor.x-nose.uz/'
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'uz' },
      title: 'Ustoz — Mahoratingizni sertifikatga aylantiring',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Ustoz — O'zbekistondagi birinchi ustoz-shogird sertifikatlash platformasi. Mahoratingizni raqamli sertifikatga aylantiring va ish topish imkoniyatingizni oshiring."
        },
        { name: 'theme-color', content: '#6366f1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'uz_UZ' },
        { property: 'og:title', content: 'Ustoz — Mahoratingizni sertifikatga aylantiring' },
        {
          property: 'og:description',
          content: "O'zbekistondagi birinchi ustoz-shogird sertifikatlash platformasi"
        },
        { property: 'og:site_name', content: 'Ustoz' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ustoz — Mahoratingizni sertifikatga aylantiring' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap'
        }
      ],
      script: [{ innerHTML: earlyInit, tagPosition: 'head' }]
    }
  }
})
