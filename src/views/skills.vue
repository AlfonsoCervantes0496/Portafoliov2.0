<template>
  <Nav />
  <section
    :class="[
      { 'bg-dark text-light': color == false },
      { 'bg-light text-dark': color == true },
    ]"
  >
    <h1>Mis Skills</h1>
    <div class="container">
      <div class="SLICE">
        <ul  :class="[{'front': btn=== 0},{'back': btn===1},{'info': btn===2},{'cert': btn===3}]">
          <li>
            <front-E />
          </li>

          <li>
            <backE />
          </li>
          <li><infor /></li>
          <li><certificaciones /></li>
        </ul>
      </div>
      <hr />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary" @click="bt(0)">
          Front-end
        </button>
        <button type="button" class="btn btn-outline-info" @click="bt(1)">Back-end</button>
        <button type="button" class="btn btn-outline-warning" @click="bt(2)">
          Informatica
        </button>
        <button type="button" class="btn btn-outline-success" @click="bt(3)">
          Certificaciones
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import frontE from "../components/skils/front.vue";
import backE from "../components/skils/Back.vue";
import infor from "../components/skils/infor.vue";
import certificaciones from "../components/skils/Certificaciones.vue";
export default {
  components: { Nav, frontE, backE, infor, certificaciones },
  data() {
    return {
      btn: 1,
    };
  },
  methods: {
    bt(v) {
      this.btn = v;
    },
  },
  setup() {
    const store = useStore();
    const color = computed(() => store.state.Dark);
    return { color };
  },
};
</script>

<style scoped>
section {
  height: 90vh;
}
h1 {
  padding-top: 4rem;
  font-size: 4rem;
  text-align: left;
  padding-left: 7rem;
}
.t {
  font-size: 1.5rem;
}
.SLICE {
  width: 100%;

  height: 60vh;
  overflow: hidden;
}
ul {
  width: 400%;
  height: 100%;
  display: flex;
  margin-left: 0;
  list-style: none;
  overflow: hidden;
  transition: ease-in 3s;
}
li {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;

  margin-left: 1%;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.front {
  margin-left: 0;
}
.back {
  margin-left: -108%;
}
.info {
  margin-left: -205%;
}
.cert {
  margin-left: -305%;
}
@media(max-width: 780px){
    section {
  height: 93vh;
  overflow: hidden;
  overflow-y: scroll;
}
h1 {
  padding-top: 2rem;
  font-size: 4rem;
  text-align: left;
  padding-left: 3rem;
}
}
</style>
