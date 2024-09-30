<template>
    <div class="hero">
      <p>hello</p>
    </div>
    <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome! You are successfully logged in.</p>
    <button @click="logout">Logout</button>
  </div>
  
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
              <fieldset class="scheduler-border">
                <legend class="scheduler-border">Create projects</legend>
                <div class="mb-3">
                <label for="projectName" class="form-label">Project Name</label>
                <input type="text" class="form-control" id="projectName" v-model="newProject.name">
              </div>
              <div class="mb-3">
                <label for="projectDescription" class="form-label">Project Description</label>
                <textarea class="form-control" id="projectDescription" v-model="newProject.description"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary mb-3 ">Create Project</button>
              </div>
              </fieldset>
            </form>
          </div>
  
          <div class="col">
  
            <!--form to create blogs-->
            <form @submit.prevent="createBlog">
              <fieldset class="scheduler-border">
                <legend class="scheduler-border">Create blogs</legend>
                <div class="mb-3">
                <label for="blogTitle" class="form-label">Blog Title</label>
                <input type="text" class="form-control" id="blogTitle" v-model="newBlog.title">
              </div>
              <div class="mb-3">
                <label for="blogContent" class="form-label">Blog Content</label>
                <textarea class="form-control" id="blogContent" v-model="newBlog.content"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary mb-3">Create Blog</button>
              </div>
              </fieldset>
            </form>
          </div>
  
        </div>
  
        <div class="row">
          <div class="col">
  
            <!--form to update projects by id-->
            <form @submit.prevent="updateProject">
              <fieldset class="scheduler-border">
                <legend class="scheduler-border">Update projects</legend>
                <select class="form-select mb-3" id="updateProjectId" v-model="newupdateProject._id">
                  <option value="" selected disabled>Select the project name</option>
                  <option v-for="project in projects" :value="project._id">{{ project.name }}</option>
                </select>
              <div class="mb-3">
                <label for="updateProjectName" class="form-label">New Project Name</label>
                <input type="text" class="form-control" id="updateProjectName" v-model="newupdateProject.name">
              </div>
              <div class="mb-3">
                <label for="updateProjectDescription" class="form-label">New Project Description</label>
                <textarea class="form-control" id="updateProjectDescription" v-model="newupdateProject.description"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary mb-3">Update Project</button>
              </div>
              </fieldset>
            </form>
          </div>
  
          <div class="col">
  
            <!--form to update blogs by id-->
            <form @submit.prevent="updateBlog">
              <fieldset class="scheduler-border">
                <legend class="scheduler-border">Update blogs</legend>
              <select class="form-select mb-3 " id="updateblogId" v-model="newupdateBlog._id">
                  <option value="" selected disabled>Select the project name</option>
                  <option v-for="blog in blogs" :value="blog._id">{{ blog.title }}</option>
                </select>
              <div class="mb-3">
                <label for="updateBlogTitle" class="form-label">New Blog Title</label>
                <input type="text" class="form-control" id="updateBlogTitle" v-model="newupdateBlog.title">
              </div>
              <div class="mb-3">
                <label for="updateBlogContent" class="form-label">New Blog Content</label>
                <textarea class="form-control" id="updateBlogContent" v-model="newupdateBlog.content"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary mb-3">Update Blog</button>
              </div>
              </fieldset>
            </form>
          </div>
  
        </div>
        
        <div class="row">
          <div class="col">
  
            <!--form to delete a project by id-->
            <form @submit.prevent="deleteProject">
              <fieldset class="scheduler-border">
                <legend class="scheduler-border">Delete projects</legend>
                <div class="mb-3">
                <select class="form-select" id="deleteProjectId" v-model="deleteProjectId">
                  <option value="" selected disabled>Select the project name</option>
                  <option v-for="project in projects" :value="project._id">{{ project.name }}</option>
                </select>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-danger mb-3">Delete Project</button>
              </div>
              </fieldset>
            </form>
          </div>
  
          <div class="col">
  
            <!--form to delete a blog by id-->
            <form @submit.prevent="deleteBlog">
              <fieldset class="scheduler-border">
                <legend class="scheduler-border">Delete blogs</legend>
                <div class="mb-3">
                <select class="form-select" id="deleteBlogId" v-model="deleteBlogId">
                  <option value="" selected disabled>Select the blog name</option>
                  <option v-for="blog in blogs" :value="blog._id">{{ blog.title }}</option>
                </select>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-danger mb-3">Delete Blog</button>
              </div>
              </fieldset>  
            </form>
          </div>
  
        </div>
      </div>
    
  </template>


<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'auth' // Apply the auth middleware to protect this page
})

// Router instance
const router = useRouter()

// Logout function to remove authentication
const logout = () => {
  localStorage.removeItem('isAuthenticated') // Clear the login status
  router.push('/') // Redirect to the home page
}

const name = "Nipun" ;
const {data: projects, pending1, error1} = useFetch('http://localhost:5000/Projects');
const {data: blogs, pending2, error2 } = useFetch('http://localhost:5000/Blogs');

//variable to get data on projects from form
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

    //adding new project to the list of projects without refreshing the page
    projects.value.push(result);

    //resetting the form
    newProject.value.name = '';
    newProject.value.description = '';

  } catch (error) {
    console.error("Error",error);
  }
}

//variable to get updated project data from form
const newupdateProject = ref({
  _id: '',
  name: '',
  description: ''

});

//function to update projects
const updateProject = async () => {
  console.log(newupdateProject.value);

  try {
    const response = await fetch(`http://localhost:5000/Projects/${newupdateProject.value._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newupdateProject.value.name,
        description: newupdateProject.value.description
      })
    });

    if (!response.ok) {
      throw new Error('Failed to update project');
    }
    //update the project without refreshing the page
    const updatedProject = await response.json();

    const index = projects.value.findIndex(project => project._id === updatedProject._id);
    if (index !== -1) {
      projects.value.splice(index, 1, updatedProject);
    }

    // Resetting the form
    newupdateProject.value._id = '';
    newupdateProject.value.name = '';
    newupdateProject.value.description = '';
  } catch (error) {
    console.error("Error", error);
  }
};

//variable to get project id to delete
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
    projects.value = projects.value.filter(project => project._id !== deleteProjectId.value);

    // Resetting the form
    deleteProjectId.value = '';
  } catch (error) {
    console.error("Error", error);
  }
};

//variable to get data on blog from form
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

    //adding new blog to the list of blogs without refreshing the page
    blogs.value.push(result);

    //resetting the form
    newBlog.value.title = '';
    newBlog.value.content = '';

  } catch (error) {
    console.error("Error",error);
  }
}

//variable to get updated blog data from form
const newupdateBlog = ref({
  _id: '',
  title: '',
  content: ''
});

//function to update blogs
const updateBlog = async () => {
  console.log(newupdateBlog.value);

  try {
    const response = await fetch(`http://localhost:5000/Blogs/${newupdateBlog.value._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newupdateBlog.value.title,
        content: newupdateBlog.value.content
      })
    });

    if (!response.ok) {
      throw new Error('Failed to update blog');
    }

    //update the blog without refreshing the page
    const updatedBlog = await response.json();
    const index = blogs.value.findIndex(blog => blog._id === updatedBlog._id);
    if (index !== -1) {
      blogs.value.splice(index, 1, updatedBlog);
    }

    // Resetting the form
    newupdateBlog.value._id = '';
    newupdateBlog.value.title = '';
    newupdateBlog.value.content = '';

  } catch (error) {
    console.error("Error", error);
  }
};

//variable to get blog id to delete
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
    blogs.value = blogs.value.filter(blog => blog._id !== deleteBlogId.value);

    // Resetting the form
    deleteBlogId.value = '';
  } catch (error) {
    console.error("Error", error);
  }
};

</script>

<style>
fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
  margin-top: 30px !important;
  background-color: #eeeeee;
}

legend.scheduler-border {
  font-size: 1.2em !important;
  font-weight: bold !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;
  margin-top: -15px;
  background-color: white;
  color: black;
  background-color: gray;
  color: white;
  padding: 5px 10px;
}


</style>
