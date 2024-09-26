<template>
  <div class="container-fluid hero">
    <div class="row">
      <div class="navbar text-center">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-6 text-center mt-5">
        <h2 class="text-warning">I'm Nipun</h2>
        <p class="text-light">Undegraduate</p>
        <button class="btn btn-warning">Hire Me</button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 social text-center">
        <ul>
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-google"></a></li>
          <li><a href="#" class="fa fa-linkedin"></a></li>
          <li><a href="#" class="fa fa-youtube"></a></li>
          <li><a href="#" class="fa fa-instagram"></a></li>
        </ul>
      </div>
    </div>

  </div>
  <div class="container-fluid details">
    <div class="row p-4">
      <div class="col">
        <h2 class="text-light">About</h2>
        <p class="text-light p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, eveniet cum! Deleniti mollitia, sit iusto nulla earum enim magnam nemo. Placeat fugiat architecto ipsum veritatis, modi nobis voluptatum dicta molestias!</p>
      </div>
    </div>
    <h2 class="text-light text-center">My Skills</h2>
    <div class="row">
      <div class="col-3 card bg-dark m-3">
        <img class="card-img-top skills" src="assets/html.png" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-light">HTML</p>
        </div>
      </div>
      <div class="col-3 card bg-dark m-3">
        <img class="card-img-top skills" src="assets/javascript.svg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-light">Java script</p>
        </div>
      </div>
      <div class="col-3 card bg-dark m-3">
        <img class="card-img-top skills" src="assets/java.svg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-light">Java</p>
        </div>
      </div>
      <div class="col-3 card bg-dark m-3">
        <img class="card-img-top skills" src="assets/php.png" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-light">PHP</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style>

.hero{
  background-image: url('./assets/hero.jpg');
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.navbar {
  padding: 20px;
  margin: auto;
  width: 50vh;

}

.navbar ul {
  list-style-type: none;
  display: flex;
  width: 100%;

}

.navbar ul li {
  margin-right: 20px;
  font-family: Roboto, sans-serif;
  width: 100%;
  
}

.navbar ul li a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  text-align: center;
}

.navbar ul li a:hover {
  color: #f0f0f0;
}


.social{
  position: absolute;
  right: 0px;
}
.social ul {
  list-style-type: none;
  justify-content: flex-start;
  width: auto;
}
.social ul li a{
  text-decoration: none;
  padding: 0%;
}

.details{
  background-color: #363535;
  height: 90vh;
  padding: 20px;
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
</style>
