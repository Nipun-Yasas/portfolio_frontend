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
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
          integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js',
          integrity: 'sha384-KE6piD5lW5DkW+6MxX2Z2dX6rUum5LbuGGaUfrzgnrPVANgvZ5CQ0u4eM3RPksK7',
          crossorigin: 'anonymous',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
          integrity: 'sha384-cVKIPhGwiXgYRB5gEi8KNsAqDZ/fQhBz7XllanJXuoKN1p3sdfNxaPlWLGvJ8tbt',
          crossorigin: 'anonymous',
          defer: true
        }
      ]
    }
  }
  
})

