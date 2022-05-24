<template>
  <h2>Back-End</h2>
  <hr />
  <div class="element">
    
      <div class="card t" style="width: 18rem">
        <img src="../../assets/nd.jpg" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">NodeJS</h5>
          <progress value="30" max="100">30 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico</h5>
        </div>
      </div>
       <div class="card t" style="width: 18rem">
        <img src="../../assets/sqlS.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Sql Server</h5>
          <progress value="30" max="100">30 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico</h5>
        </div>
      </div>
      <div class="card t" style="width: 18rem">
        <img src="../../assets/post.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">PostgreSQL</h5>
          <progress value="30" max="100">30 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico</h5>
        </div>
      </div>
      <div class="card t" style="width: 18rem">
        <img src="../../assets/dj.jpg" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Django</h5>
          <progress value="20" max="100">30 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico</h5>
        </div>
      </div>
      
      
  </div>
</template>

<script>
export default {
  name: "backE",
};
</script>

<style scoped>
h2 {
  padding: 1rem;
  text-align: left;
  font-size: 3rem;
}
img {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}
.element {
  display: flex;
  width: 100%;
}
.t{
    margin-right: 1rem;
}

@media (max-width: 780px)
{
  .element {
  display: flex;
  width: 400%;
}
}
</style>