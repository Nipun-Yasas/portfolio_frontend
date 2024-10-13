// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],

      title: 'My Portfolio',

      link: [
        { rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        },
        {
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
        }
        ,
        {
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        },
        {
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
        }
        
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/a076d05399.js',
          crossorigin: 'anonymous',
          
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          crossorigin: 'anonymous',
          
        },
        {
          src: 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js',
        },
        
      ]
    }
  },

  compatibilityDate: '2024-10-03'
})