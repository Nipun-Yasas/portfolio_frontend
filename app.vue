<template>
  <h1>{{name}}</h1>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Projects</h2>
        <div v-if="pending1">Loading...</div>
        <ul>
          <li v-for="project in projects" :key="project.name">
            <h2>{{project.name}}</h2>
            <p>{{project.description}}</p>
          </li>
        </ul>
      </div>

      <div class="col">
        <h2>Blogs</h2>
        <div v-if="pending2">Loading...</div>
        <ul>
          <li v-for="blog in blogs" :key="blog.title">
            <h2>{{blog.title}}</h2>
            <p>{{blog.content}}</p>
          </li>
        </ul>
      </div>

    </div>
  </div>
  
  <div class="continer mx-5">
    <div class="row">
      <div class="col">

        <!--form to create projects-->
        <form @submit.prevent="createProject"> 
          <div class="mb-3">
            <label for="projectName" class="form-label">Project Name</label>
            <input type="text" class="form-control" id="projectName" v-model="newProject.name">
          </div>
          <div class="mb-3">
            <label for="projectDescription" class="form-label">Project Description</label>
            <textarea class="form-control" id="projectDescription" v-model="newProject.description"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-3">Create Project</button>
        </form>
      </div>

      <div class="col">

        <!--form to create blogs-->
        <form @submit.prevent="createBlog"> 
          <div class="mb-3">
            <label for="blogTitle" class="form-label">Blog Title</label>
            <input type="text" class="form-control" id="blogTitle" v-model="newBlog.title">
          </div>
          <div class="mb-3">
            <label for="blogContent" class="form-label">Blog Content</label>
            <textarea class="form-control" id="blogContent" v-model="newBlog.content"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-3">Create Blog</button>
        </form>
      </div>

    </div>

    <div class="row">
      <div class="col">

        <!--form to delete a project by id-->
        <form @submit="deleteProject">
          <div class="mb-3">
            <label for="projectId" class="form-label">Project Id</label>
            <input type="text" class="form-control" id="projectId" v-model="deleteProjectId">
          </div>
            <button type="submit" class="btn btn-danger">Delete Project</button>
        </form>
      </div>

      <div class="col">

        <!--form to delete a blog by id-->
        <form @submit="deleteBlog">
          <div class="mb-3">
            <label for="blogId" class="form-label">Blog Id</label>
            <input type="text" class="form-control" id="blogId" v-model="deleteBlogId">
          </div>
            <button type="submit" class="btn btn-danger">Delete Blog</button>
        </form>
      </div>

    </div>
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

//variable to catch form data on project
const newProject = ref({
  name: '',
  description: ''
});

//function to create projects 
const createProject = async () => {
  console.log(newProject.value);

  try {
    const response = await fetch('http://localhost:5000/Projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject.value)
    });

    if(!response.ok){
      throw new Error('Failed to create project');
    }

    const result = await response.json();

    //adding new project to the list of projects
    projects.value.push(result);

    //resetting the form
    newProject.value.name = '';
    newProject.value.description = '';

  } catch (error) {
    console.error("Error",error);
  }
}

//variable to catch  project id to delete
const deleteProjectId = ref('');

//function to delete projects
const deleteProject = async () => {
  console.log(deleteProjectId.value);

  try {
    const response = await fetch(`http://localhost:5000/Projects/${deleteProjectId.value}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete project');
    }

    // Removing the project from the list of projects
    projects.value = projects.value.filter(project => project.id !== deleteProjectId.value);

    // Resetting the form
    deleteProjectId.value = '';
  } catch (error) {
    console.error("Error", error);
  }
};

//variable to catch form data on blog
const newBlog = ref({
  title: '',
  content: ''
});

//function to create blogs
const createBlog = async () => {
  console.log(newBlog.value);

  try {
    const response = await fetch('http://localhost:5000/Blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog.value)
    });

    if(!response.ok){
      throw new Error('Failed to create blog');
    }

    const result = await response.json();

    //adding new blog to the list of blogs
    blogs.value.push(result);

    //resetting the form
    newBlog.value.title = '';
    newBlog.value.content = '';

  } catch (error) {
    console.error("Error",error);
  }
}

//variable to catch  project id to delete
const deleteBlogId = ref('');

//function to delete blogs
const deleteBlog = async () => {
  console.log(deleteBlogId.value);

  try {
    const response = await fetch(`http://localhost:5000/Blogs/${deleteBlogId.value}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete blog');
    }

    // Removing the blog from the list of blogs
    blogs.value = blogs.value.filter(blog => blog.id !== deleteBlogId.value);

    // Resetting the form
    deleteBlogId.value = '';
  } catch (error) {
    console.error("Error", error);
  }
};

</script>

<style>
</style>
