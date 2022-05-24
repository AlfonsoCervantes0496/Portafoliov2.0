<template>
  <Nav />
  <section
    :class="[
      { 'bg-dark text-light': color === true },
      { 'bg-light text-dark': color === false },
    ]"
  >
    <div class="tit">
      <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <h1>Proyectos</h1>
    </div>
    <div class="container">
      <hr />
      <h2>Echale un ojo a mis proyectos :)</h2>
      <div class="elements">
        <card
          v-for="data in data"
          :key="data.id"
          :Nombre="data.Nombre"
          :Tecnologias="data.tecnologias"
          :Descripcion="data.Descripcion"
          :dir="data.src"
        />
      </div>
    </div>
    <p>ALFONSO CERVANTES</p>

    <div :class="[{ offch: offstatus == false }, { offc: offstatus == true }]">
      <div class="bloc">
        <button
          type="button"
          class="btn btn-danger bnt_cerrar"
          @click="changeVal()"
        >
          X
        </button>
        <h2>{{ objOffcanvas.Nombre }}</h2>
        <div class="card">
          <img
            src="../assets/logo_small_icon_only_inverted.png"
            class="imgoff"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Descripcion</h5>
            <p class="card-text">{{ objOffcanvas.Descripcion }}</p>
            <h5 class="card-title">Tecnologias</h5>
            <span
              class="badge bg-success"
              v-for="obj in objOffcanvas.Tecnologias"
              :key="obj"
              >{{ obj }}</span
            >
          </div>

          <a :href="objOffcanvas.dir" class="btn btn-success">
            Ir al proyecto</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import card from "../components/skils/projects.vue";
import Nav from "../components/Nav.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  name: "proyectos",
  components: {
    Nav,
    card,
  },

  setup() {
    const store = useStore();
    const color = computed(() => store.state.Dark);
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const data = computed(() => store.state.data);
    const offstatus = computed(() => store.state.btnoffcanvas);
    const changeVal = () => {
      store.dispatch("changeSateteOffcanvas");
    };
    const objOffcanvas = computed(() => store.state.offcanvasObj);
    return { color, data, offstatus, changeVal, objOffcanvas };
  },
};
</script>

<style scoped>
section {
  height: 90vh;
  overflow: hidden;
  overflow-y: scroll;
}
h1 {
  font-size: 5rem;
}
.tit {
  display: flex;
  text-align: left;
  margin-left: 3rem;
  padding-top: 2rem;
}
.elements {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.offc {
  position: fixed;

  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(46, 44, 44, 0.3);
  vertical-align: ce;
}
.offch {
  display: none;
}
.bloc {
  width: 40%;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.imgoff {
  height: 9vh;
  width: 9vh;
  margin-left: 34.5vh;
}
.bnt_cerrar {
  margin-top: 5px;
  margin-left: 92%;
}
h2 {
  font-size: 3rem;
}
span {
  margin-right: 2px;
}
@media (max-width: 780px) {
  h1 {
    font-size: 3rem;
  }
  .bloc {
    width: 90%;
    margin: auto;
    background-color: white;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .imgoff {
    margin-top: 1rem;
    margin-left: 35vw;
    height: 20vw;
    width: 20vw;
  }
  .bnt_cerrar {
    margin-top: 5px;
    margin-left: 85%;
  }
}
</style>
