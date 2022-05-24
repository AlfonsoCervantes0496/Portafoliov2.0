<template>
  <nav :class="[{ navB: menu === true }]">
    <img src="../assets/logo_small_icon_only_inverted.png" alt="" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      fill="currentColor"
      class="list"
      viewBox="0 0 16 16"
      @click="menuBtn"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
    <ul :class="[{ ulB: menu === true }]">
      <li @click="dir('home')">Home</li>
      <li  @click="dir('acerca')">Acerca de mi</li>
      <li @click="dir('proyectos')">Proyectos</li>
      <li @click="dir('sk')">Skills</li>
      <li @click="dir('contacto')">Contactame</li>
      <li class="non"
       width="16"
        height="16">
        <button v-if="dark === false"
        width="16"
            height="16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-brightness-high"
            viewBox="0 0 16 16"
            @click="changeBD()"
          >
            <path
              d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
            />
          </svg>
        </button>
        <button v-if="dark === true" class="moon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
             width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            @click="changeBD()"
          >
            <path
              d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    menuBtn() {
      this.menu = !this.menu;
    },
    dir(nombre){
      this.$router.push({name:nombre})
    },
  },
  setup() {
    const store = useStore();
    const dark = computed(() => store.state.Dark);
    const changeBD = () => {
      store.dispatch("changeDark");
    };
    return { dark, changeBD };
  },
};
</script>

<style scoped>
.list {
  display: none;
}
nav {
  justify-content: space-between;
  display: flex;
  background-color: black;
  color: white;
  height: 10vh;
  animation: inicio 3s;
  overflow: hidden;
}
nav img {
  height: 5vh;
  animation: inicioimg 3s;
}
nav ul {
  display: flex;
  list-style: none;
  animation: hm 3s;
}
nav ul li {
  margin: 1rem;
}
button {
  border-radius: 100%;
  background-color: white;
  border-style: none;
  box-shadow: 2px 2px 2px 1px #addeff;
}
.moon {
  box-shadow: 2px 2px 2px 1px #d6adff;
}
.non {
  box-shadow: 2px 2px 2px 1px black;
  margin: ;
}
@keyframes inicio {
  0% {
    height: 100vh;
    border-bottom-left-radius: 00%;
    border-bottom-right-radius: 0%;
  }
  10% {
    height: 100vh;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
  }
  90% {
    height: 10vh;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
  }

  100% {
    height: 10vh;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }
}
@keyframes inicioimg {
  0% {
    height: 40%;
    margin-left: 40%;
    margin-top: 10%;
  }
  45% {
    height: 40%;
    margin-left: 40%;
    margin-top: 10%;
  }
  75% {
    height: 9vh;
    margin-left: 40%;
    margin-top: 0%;
  }
  100% {
    height: 5vh;
  }
}
@keyframes hm {
  0% {
    color: black;
  }
  95% {
    color: black;
  }
  100% {
    color: white;
  }
}

@media (max-width: 780px) {
  .list {
    display: block;
    animation: hm 3s;
  }
  nav ul {
    display: none;
    width: 100%;
    padding-left: 0;
  }
  nav ul li {
    margin-top: 1rem;
    box-shadow: 0px 2px 0px 0px white;
    border-radius: 15px;
    width: 100%;
  }
  img {
    margin: 0;
  }

  .ulB {
    display: flex;
    flex-direction: column;
    animation: buttonM 1.5s;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }

  .navB {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: ease-in-out 2s;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 5%;
    background-color: black;
    height: 50%;
  }
  .navB img {
    height: 6vh;
    width: 6vh;
    animation: logo 1.5s;
  }
  @keyframes logo {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: 0;
    }
  }
  @keyframes buttonM {
    from {
      margin-top: 80%;
    }
    to {
      margin: 0;
    }
  }

  @keyframes inicioimg {
    0% {
      height: 50%;
      margin-left: 0%;
      margin-top: 50%;
    }
    35% {
      height: 30%;
      margin-left: 00%;
      margin-top: 50%;
    }
    75% {
      height: 9vh;
      margin-left: 40%;
      margin-top: 0%;
    }
    100% {
      height: 5vh;
    }
  }
}

@keyframes hm {
  0% {
    color: black;
  }
  95% {
    color: black;
  }
  100% {
    color: white;
  }
}
</style>
