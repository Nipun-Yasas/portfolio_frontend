<template>
  <div>
    <h1>{{name}}</h1>
    <h2>Projects</h2>
    <div v-if="pending1">Loading...</div>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <h2>{{project.name}}</h2>
        <p>{{project.description}}</p>
      </li>
    </ul>
  </div>

  <div>
    <h2>Blogs</h2>
    <div v-if="pending2">Loading...</div>
    <ul>
      <li v-for="blog in blogs" :key="blog.title">
        <h2>{{blog.title}}</h2>
        <p>{{blog.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
useHead({
  link: [
    { 
      rel: 'stylesheet', 
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
      integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
      crossorigin: 'anonymous'
    }
  ]
})

const name = "Nipun" ;
const {data: projects, pending1, error1} = useFetch('http://localhost:5000/Projects');
const {data: blogs, pending2, error2 } = useFetch('http://localhost:5000/Blogs');
</script>

<style>
</style>
