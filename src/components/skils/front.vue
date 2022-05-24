<template>
  <h2>Front-End</h2>
  <hr />
  <div class="element">
    
      <div class="card t" style="width: 18rem">
        <img src="../../assets/html.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">HTML</h5>
          <progress value="70" max="100">70 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Intermedio-Avanzado</h5>
        </div>
      </div>
      <div class="card t" style="width: 18rem">
        <img src="../../assets/css.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">CSS</h5>
          <progress value="70" max="100">70 %</progress>
          
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Intermedio-Avanzado</h5>
        </div>
      
    </div>
    <div class="card t" style="width: 18rem">
        <img src="../../assets/js.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">JavaScript</h5>
          <progress value="70" max="100">70 %</progress>
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Intermedio-Avanzado</h5>
        </div>
      
    </div>
    <div class="card t" style="width: 18rem">
        <img src="../../assets/react.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">React</h5>
          <progress value="50" max="100">50 %</progress>
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico-Intermedio</h5>
        </div>
      
    </div>
    <div class="card t" style="width: 18rem">
        <img src="../../assets/vue.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Vue</h5>
          <progress value="50" max="100">50 %</progress>
          <h5 class="card-title text-dark">Nivel</h5>
          <h5 class="card-title text-dark">Basico-Intermedio</h5>
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "frontE",
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
  width: 120%;
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

