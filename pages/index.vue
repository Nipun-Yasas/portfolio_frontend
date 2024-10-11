<template>
  	<nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="/">Nipun Yasas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="/">Home</a>
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
    <div class="container-fluid hero">
      <div class="row">
        <div class="col-sm order-sm-2 pt-lg-5 pt-md-5 pt-sm-5 pb-5 propic ">
          <h1 class="text-light">propic</h1>
        </div>
        <div class="col-sm order-sm-1 pt-lg-5 pt-md-5 pt-5 aboutme">
          <h2 class="text-light">Hello <span class="text-warning name">Nipun</span></h2>
          <p class="myinfo text-light" style="font-size: 25px;">I'm a <span class="whoiam text-warning"></span></p>
        </div>
      </div>
    </div>
    <div class="container-fluid about ">
      <div class="row p-3">
        
          <h2 class="text-light">About</h2>
          <p class="text-light p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, eveniet cum! Deleniti mollitia, sit iusto nulla earum enim magnam nemo. Placeat fugiat architecto ipsum veritatis, modi nobis voluptatum dicta molestias!</p>
      </div>
      <div class="row">
        <h2 class="text-light text-center">My Skills</h2>
      <div class="row m-3 d-flex justify-content-between">
        <div class="col-sm card bg-dark m-2 view">
          <img class="card-img-top skills" src="assets/html.png" alt="Card image cap">
          <div class="card-body container-fluid">
            
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </div>
        </div>
        <div class="col-sm card bg-dark m-2">
          <img class="card-img-top skills" src="assets/javascript.svg" alt="Card image cap">
          <div class="card-body container-fluid">
  
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
          </div>
        </div>
        <div class="col-sm card bg-dark m-2">
          <img class="card-img-top skills" src="assets/java.svg" alt="Card image cap">
          <div class="card-body container-fluid">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
          </div>
        </div>
        <div class="col-sm card bg-dark m-2">
          <img class="card-img-top skills" src="assets/php.png" alt="Card image cap">
          <div class="card-body container-fluid">
            
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
        </div>
        <div class="col-sm card bg-dark m-2">
          <img class="card-img-top skills" src="assets/c.svg" alt="Card image cap">
          <div class="card-body container-fluid">
            
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    <div class="container-fluid ex" id="section2">
      <h2 class="text-light">Experience</h2>
      <div class="row p-2">
        <div class="col-3 ex1">
          <h4 class="text-light">2024</h4>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
        <div class="col-9">
         <p class="text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi mollitia. Tenetur quisquam, molestias, debitis aspernatur esse nesciunt mollitia deserunt nam minima inventore labore. Tenetur id eligendi dolorem deserunt animi.
         </p>
        </div>
      </div>
      <div class="row p-2">
        <div class="col-3 ex1">
          <h4 class="text-light">2021</h4>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
        <div class="col-9">
         <p class="text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi mollitia. Tenetur quisquam, molestias, debitis aspernatur esse nesciunt mollitia deserunt nam minima inventore labore. Tenetur id eligendi dolorem deserunt animi.
         </p>
        </div>
      </div>
    </div>
    <h1>hello</h1>
    
    
</template>

<style>
  
  #neubar{
    height: 8vh;
    background-color: #31333b;
  }
  
  #neubar .nav-item {
    margin : auto 4px;
  }
  #neubar a {
    padding-left:12px;
    padding-right:12px;
    color: white;
  }
  #neubar a:hover{
    color: #fff700;
  }
  
  .hero{
    background-color: #34353a;
    height: 92vh;
  }
  .name,.whoiam{
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .about{
    background-color: #2c2f37;
    height: mh-100;
    padding: 20px;
  }
  
  .propic{
    text-align: center;
    vertical-align: middle;
  }

  .svl{
    border-right: #fff700 1px solid;
    height: 100px;
  }
.card {
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    
}
  
.card p.tip {
    font-size: 1em;
    font-weight: 700;
}
  
  .card:hover {
    transform: scale(1.1, 1.1);
  }
  .skills{
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
  
  .ex{
    background-color: #1f1f1f;
    height: auto;
  }
  
  .ex1{
    border-right: #fff700 1px solid;
    text-align: end;
  }
  
  .contact{
    background-color: #363535;
    height: 30vh;
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