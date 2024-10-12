<template>
  	<nav class="navbar navbar-expand-sm" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="/">Nipun Yasas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="home">
      <div class="home-img">
          <img src="" alt="profile picture">
      </div>
      <div class="home-content">
          <h1 class="text-white">Hi, It's <span class="name">Alex</span></h1>
          <p class="text-white">I'm a <span class="whoiam text-danger"></span></p>
          <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.</p>
          <div class="social-icons">
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
            
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <a href="#" class="hire">Hire me</a>
      </div>
    </section>

</template>

<style>
.navbar{
 
}
.collapse{
  justify-content: flex-end;
}
.navbar-brand{
  font-size: 1.5rem;
  color: #b74b4b;
  font-weight: 800;
  cursor: pointer;
  transition: 0.5s ease;
}
.nav-link{
  transition: 0.3s ease;
  color: white;
}
.nav-link:hover{
  color: #b74b4b;
}

section{
  min-height: 100vh;
  padding: 5rem 9% 5rem;
}
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: black;
  padding-top:0;
}
.home .home-content h1{
  line-height: 1.3;
}
.name{
  color: #b74b4b;
}
.home-img{
    border-radius: 50%;
}
.home-img img{
  position: relative;
  width: 32vw;
  border-radius: 50%;
  box-shadow: 0 0 25px solid #b74b4b;
  cursor: pointer;
  transition: 0.2s linear;
}

.home-img img:hover{
  font-weight: 500;
}

.social-icons a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: 0.2rem solid #b74b4b;
  font-size: 1.5rem;
  border-radius: 50%;
  margin: 3rem 1.5rem 3rem 0;
  transition: 0.3s ease;
  color: #b74b4b;
}

.social-icons a:hover{
  color: black;
  transform: scale(1.3) translateY(-5px);
  background-color: #b74b4b;
  box-shadow: 0  0 25px #b74b4b;
}

.hire{
  display: inline-block;
  padding: 1rem 2.8rem;
  background-color: black;
  border-radius: 4rem;
  color: #b74b4b;
  font-weight: 600;
  border: 2px solid #b74b4b;
  transition: 0.3s ease;
  cursor: pointer;
}

.hire:hover{
  transform: scale3d(1.03);
  background-color: #b74b4b;
  color: black;
  box-shadow: 0 0 25px #b74b4b;
}
@media(max-width:995px){
  .home{
    flex-direction: column;
  }

  .home .home-content h3{
    font-size: 1.5rem;
  }

  .home-content h1{
    font-size: 3rem;
  }

  .home-img img{
    width: 70vw;
    margin-top: 1rem;
    }
}
  
</style>

<script setup>
import { onMounted } from 'vue';

// Initialize Typed.js after the component is mounted
onMounted(() => {
  // Check if Typed is defined
  if (typeof Typed !== 'undefined') {
    const typed = new Typed(".whoiam", {
      strings: ["Designer", "Developer", "Programmer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  } else {
    console.error("Typed.js is not loaded.");
  }
});


</script>