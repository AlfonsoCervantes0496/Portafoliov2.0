<template>
  <div class="home">
    <Nav />
    <section
      :class="[
        { 'bg-white ': color == false },
        { 'bg-dark text-white': color == true },
      ]"
    >
      <div class="pa-1">
        <div class="contenedor">
          <h1>
            Hola
            <span
              :class="[
                { 'bg-white ': color == false },
                { 'bg-dark': color == true },
              ]"
              >&#160;</span
            >
          </h1>
        </div>
        <h3>soy Desarrollador Front-End</h3>
        <button type="button" class="btn btn-outline-success">
          <a
            href="https://drive.google.com/file/d/1T8vyIHjJiJS8l5V8braxjbP99GY9uM1d/view?usp=sharing"
          >
            Descargar CV</a
          >
        </button>
        <div class="sk">
          <img src="../assets/brands.png" alt="" />
          <img src="../assets/physics.png" alt="" />
          <img src="../assets/nodejs.png" alt="" />
          <img src="../assets/javascript.png" alt="" />
          <img src="../assets/python.png" alt="" />
        </div>
      </div>
      <div class="pa-2">
        <div class="pa-2-1">
          <div class="d">
            <div class="c bg-dark"></div>
            <div class="c c5"></div>
            <div class="c c1"></div>
            <div class="c c3"></div>
            <div class="c c4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90%"
                height="90%"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                />
              </svg>
            </div>
          </div>
          <div class="d">
            <div class="c c3">
              <a href="https://wa.me/+525513828896"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90%"
                  height="90%"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  /></svg
              ></a>
            </div>
            <div class="c c2"></div>
            <div class="c bg-dark"></div>
            <div class="c c4"></div>
            <div class="c c1"></div>
          </div>
          <div class="d">
            <div class="c c1"></div>
            <div class="c c5"></div>

            <div class="c c2"></div>
            <div class="c c4">
              <a
                href="
https://www.facebook.com/alfoso.cervantes/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90%"
                  height="90%"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
              </a>
            </div>
            <div class="c bg-dark"></div>
          </div>
          <div class="d">
            <div class="c c2"></div>
            <div class="c c4"></div>
            <div class="c c1">
              <a href="https://github.com/AlfonsoCervantes0496">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90%"
                  height="90%"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
            <div class="c bg-dark"></div>
            <div class="c c5"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "HomeView",
  components: {
    Nav,
  },
  setup() {
    const store = useStore();
    const color = computed(() => store.state.Dark);

    return { color };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
section {
  display: flex;
  overflow: hidden;
}
.pa-1 {
  width: 50%;
}
.pa-2 {
  width: 50%;
  height: 90vh;
  overflow: hidden;
  animation: pa2 6s;
  margin-top: 1rem;
}
.pa-2-1 {
  width: 100%;
}

h1 {
  font-size: 25vh;
  text-align: left;
  font-family: "Anton", sans-serif;
  float: left;
  position: relative;
  animation: init 3s;
}
h1 span {
  position: absolute;
  right: 0;
  width: 0;
  border-left: 3px solid #000;
  animation: maquina 4.5s steps(4);
}
h3 {
  font-size: 4rem;
  animation: secundario 6s;
  margin-left: 10%;
  text-align: left;
}
@keyframes secundario {
  0% {
    margin-left: -110%;
    font-size: 1rem;
    margin-top: -2%;
  }
  70% {
    margin-left: -110%;
    font-size: 1rem;
    margin-top: -2%;
  }
  95% {
    margin-left: 10%;
    font-size: 1rem;
    margin-top: -2%;
  }

  100% {
    margin-left: 10%;
    font-size: 4rem;
  }
}
@keyframes init {
  from {
    display: none;
  }
  to {
    display: block;
  }
}
@keyframes maquina {
  0% {
    width: 100%;
  }
  70% {
    width: 100%;
  }
  to {
    width: 0;
  }
}

.contenedor {
  display: table;
  margin-left: 1rem;
  margin-top: 3rem;
}
button {
  margin-top: 10%;
  align-content: left;
  font-size: 4vh;
  animation: btnn 8s;
}
@keyframes btnn {
  0% {
    margin-left: -200%;
  }
  80% {
    margin-left: -200%;
  }

  100% {
    margin-left: 0;
  }
}
@keyframes pa2 {
  0% {
    padding-right: 100%;
  }
  50% {
    padding-right: 100%;
  }
  100% {
    padding-right: 0;
  }
}
.d {
  display: flex;
  width: 100%;
}
.c {
  width: 20vw;
  height: 20vh;
  border-radius: 8px;
  margin: 6px;
  color: black;
}
.c1 {
  animation: c1 4s infinite;
  color: black;
}
.c2 {
  animation: c2 5s infinite;
}
.c3 {
  animation: c3 6s infinite;
}
.c4 {
  animation: c4 5s infinite;
}
.c5 {
  background-color: white;
}
@keyframes c1 {
  from {
    background-color: yellow;
  }
  to {
    background-color: orange;
  }
}
@keyframes c4 {
  from {
    background-color: blue;
  }
  to {
    background-color: purple;
  }
}
@keyframes c2 {
  from {
    background-color: green;
  }
  to {
    background-color: rgb(255, 0, 204);
  }
}
@keyframes c3 {
  from {
    background-color: red;
  }
  to {
    background-color: goldenrod;
  }
}
a {
  color: black;
}
.sk {
  display: flex;
  width: 50%;
  margin-top: 10%;
  margin-left: 25%;
  margin-left: 25%;
  height: 5vh;
  justify-content: space-between;
  animation: btnn 8s;
}
.sk img {
  width: 5vh;
  height: 5vh;
}
@media (max-width: 780px) {
  section {
    display: flex;
    flex-direction: column;
    height: 85vh;
  }
  .pa-1 {
    width: 100%;
    margin-bottom: 1rem;
  }
  .pa-2 {
    width: 100%;
  }
  h1 {
    font-size: 9vh;
  }
  h3 {
    font-size: 2rem;
    animation: secundario 6s;
    margin-left: 10%;
    text-align: left;
  }
  button {
    margin-top: 1rem;
  }
  @keyframes secundario {
    0% {
      margin-left: -110%;
      font-size: 1rem;
      margin-top: -2%;
    }
    70% {
      margin-left: -110%;
      font-size: 1rem;
      margin-top: -2%;
    }
    95% {
      margin-left: 10%;
      font-size: 1rem;
      margin-top: -2%;
    }

    100% {
      margin-left: 10%;
      font-size: 2rem;
    }
  }
  .c {
    width: 20vw;
    height: 8vh;
    border-radius: 8px;
    margin: 6px;
  }
  .sk {
    display: none;
  }
}
</style>
