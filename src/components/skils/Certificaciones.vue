<template>
  <h2>Certificaciones</h2>
  <hr />
  <div class="element">
    
      <div class="card t" style="width: 18rem">
        <img src="../../assets/ccna.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">CCNA I, II</h5>
            <a class="btn btn-primary" href="https://www.credly.com/earner/earned/badge/7f6782b0-785d-477e-a6b5-65dcac8685c2" role="button">CCNAII</a>
           


        </div>
      </div>
      <div class="card t" style="width: 18rem">
        <img src="../../assets/az.jpg" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Azure: Fundamentals</h5>
          <a class="btn btn-primary" href="https://www.credly.com/badges/1bc96f89-1128-4d4f-b5ee-a85f593f51ef" role="button">Ir al insignia</a>
          
        </div>
      
    </div>
    <div class="card t" style="width: 18rem">
        <img src="../../assets/scrum.png" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">Scrum: Fundamentals</h5>
          
        </div>
      
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "certificaciones",
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

