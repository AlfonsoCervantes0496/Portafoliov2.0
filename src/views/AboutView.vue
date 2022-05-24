<template>
  <Nav/>
  <section :class="[{'bg-light text-dark':color==false},{'bg-dark text-light':color==true}, 'text-start']">
    <div class=" container ">
      <div class="SobreMi">
      
      
      <div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<h1 >Sobre Mi </h1> 
</div>
      <hr>
      <h2>Hola :)</h2>
      <h5>¡Que tal! Soy Luis Alfonso Cervantes  Soy un apasianado en el mundo del desarrollo web
        , especialmente  en el área de Front-End.</h5>
       <h5> Tengo un año de experiencia en el desarrollo web,  usando vanilla javascript y librerias de javascript como react.js, vuejs. y node.js.
        Estoy en constante aprendizaje en los  lenguajes de Javascript y python para creacion de interfaces y servidores 
        de bases de datos, para  back-end.</h5>
        <h5>Mi meta es ser un excelente  desarrollador full-stack, y asi crear poderosas aplicaciones web
        </h5>
        <h4 class="text-center">Gracias por echar un vistazo a mi portafolio, espero te guste. Bienvenido.</h4>
      <hr>
      <div class="d">
        <div class="c bg-success"></div>
        <div class="c bg-warning"></div>
        <div class="c bg-danger"></div>
        <div class="c bg-primary"></div>
      </div>
    </div>

  </section>
  
</template>

<script>
import { useStore } from 'vuex'
import Nav from "../components/Nav.vue"
import { computed } from '@vue/runtime-core'
export default {
  components:{
    Nav
  },
  setup(){
    const store = useStore()
    const color = computed(()=>store.state.Dark)
    return{color}
  }


}
</script>

<style>
section{
  margin:0;
  height: 90vh;
  padding-top: 5rem;
  overflow-x: scroll;
}
h1{
  font-size: 7vh;
}
h2{
  font-size: 5vh;
  margin-top: 3rem;
}
h5{
  margin-top: 2rem;
}
h4{
  margin-top:8rem;
  font-size: 2rem;
  
}
.SobreMi{
  display: flex;
}
.point{
  font-size: 2px;
}
.d{
  margin-top: 1vh;
  display: flex;
  width: 20%;
  margin-left: 80%;
}
.c{
  border-radius: 8px;
  width: 25%;
  margin: 0.2rem;
  height: 6vh;
  background-color: blue;
}
.next{
  position: fixed;
  width: 10%;
  margin-left: 90%;
}
@media (max-width: 780px){
  h4{
  margin-top:2rem;
  font-size: 2rem;
  
}
.d{
  margin-top: 1vh;
  display: flex;
  width: 40%;
  margin-left: 30%;
}
.c{
  border-radius: 8px;
  width: 25%;
  margin: 0.2rem;
  height: 4vh;
  background-color: blue;
}

}



</style>
