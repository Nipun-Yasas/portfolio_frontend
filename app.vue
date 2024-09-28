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
      <div class="col-auto social text-center">
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
    <div class="row m-3 d-flex justify-content-between">
      <div class="col-sm card bg-dark m-2">
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
  <div class="container-fluid ex">
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
  <div class="container-fluid contact">
    <div class="row">
      <div class="col">
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

.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
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
  height: mh-100;
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
