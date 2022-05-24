<template>

  <div class="card ca" style="width: 18rem">
    <img
      src="../../assets/logo_small_icon_only_inverted.png"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-dark">{{ Nombre }}</h5>
      <span
        class="badge bg-primary"
        v-for="Tecnologias in Tecnologias"
        :key="Tecnologias"
        >{{ Tecnologias }}</span
      >
    </div>
    <button type="button" class="btn btn-success" @click="change()">
      Ver mas
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "card",
  props: {
    Nombre: String,
    Tecnologias: [],
    Descripcion:String,
    dir: String
  },
  methods: {
    change() {
      let passto = {
        Nombre: this.Nombre,
        Tecnologias: this.Tecnologias,
        Descripcion: this.Descripcion,
        dir: this.dir
      };
      this.changeObj(passto);
      this.changeVal();
    },
  },
  setup() {
    const store = useStore();

    const changeVal = () => {
      store.dispatch("changeSateteOffcanvas");
    };
    const changeObj = (obj) => {
      console.log(obj);
      store.dispatch("updateOffCanvasObj", obj);
    };
    return { changeVal, changeObj };
  },
};
</script>

<style scoped>
img {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
span {
  margin-right: 2px;
}

.ca {
  margin: 1rem;
}
</style>

