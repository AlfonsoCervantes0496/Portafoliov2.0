<template>
  <h2>Informatica</h2>
  <hr />
  <div class="element">
    
      <div class="card t" style="width: 18rem">
        <img src="../../assets/gith.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Git hub</h5>
          <progress value="40" max="100">35 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico</h5>
        </div>
      </div>
      <div class="card t" style="width: 18rem">
        <img src="../../assets/git.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Git</h5>
          <progress value="40" max="100">40 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico</h5>
        </div>
      
    </div>
    <div class="card t" style="width: 18rem">
        <img src="../../assets/scrum.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Scrum</h5>
          <progress value="40" max="100">40 %</progress>
          
        </div>
      
    </div>
    
   
  </div>
</template>

<script>
export default {
  name: "infor",
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
  width: 300%;
}
}

</style>

