<template>
  <Nav />
  <section
    :class="[
      { 'bg-dark text-light': color === true },
      { 'bg-light text-dark': color == false },
    ]"
  >
    <h1>*Contacto</h1>
    <div class="container">
      <hr />
      <div class="principal">
        <div class="p">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
          </svg>

          <p>Hagamos cosas grandes</p>
          <p>Podemos hacer un gran equipo,</p>
          <p>¡Colaboremos juntos!</p>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="p">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            fill="currentColor"
            class="bi bi-envelope-paper"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"
            />
          </svg>
          <p>Llena este formulario y me pondre en contacto contigo</p>
          <div class="alert alert-success" role="alert" v-if="val == 1">
            Se han enviado tus datos con exito, en breve me pondre en contacto
            contigo
          </div>
          <div class="alert alert-danger" role="alert" v-if="val == 2">
            {{ msg }}
          </div>
          <form
            ref = "form"
            @submit.prevent="send"
          >
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="uno"
                placeholder="name@example.com"
                required
                v-model="Nombre"
                name="Nombre"
              />
              <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating">
              <input
                type="tel"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
                v-model="Telefono"
                name="Telefono"
              />
              <label for="floatingPassword">Telefono</label>
            </div>
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                ref=""
                v-model="Correo"
                name="Correo"
              />
              <label for="floatingPassword">Correo Electronico</label>
            </div>

            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                required
                v-model="Mensaje"
                name="Mensaje"
              ></textarea>
              <label for="floatingTextarea">Mensaje</label>
            </div>
            <input type="submit" class="btn btn-success" value="Enviar" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
      <hr />
    </div>
    <div class="container ico">
      <a href="https://www.facebook.com/alfoso.cervantes/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
      </a>
      <a href="https://wa.me/+525513828896"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
          />
        </svg>
      </a>
      <a href="https://www.instagram.com/alfonso_cervantes117/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          />
        </svg>
      </a>
      <a href="https://github.com/AlfonsoCervantes0496">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
      <br />
      <h3>ALFONSO CERVANTES</h3>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/runtime-core";

import { useStore } from "vuex";
import Nav from "../components/Nav.vue";
import emailjs from '@emailjs/browser'
export default {
  name: "contactoView",
  components: {
    Nav,
  },
  setup() {
    const store = useStore();
    const color = computed(() => store.state.Dark);
    return { color };
  },
  methods: {
   send(){
     emailjs.sendForm("pts117","template_7qbvzln",this.$refs.form,"GrVmuxIjLAXeFrZpa")
     .then((result) => {
            console.log('SUCCESS!', result.text);
            this.Nombre=""
            this.Telefono=""
            this.Correo=""
            this.Mensaje=""
            this.val=1

        }, (error) => {
            console.log('FAILED...', error.text);
        });
       

     
   }
  },
  data() {
    return {
      Nombre: "",
      Telefono: "",
      Correo: "",
      Mensaje: "",
      val: 0,
      msg: "",
    };
  },
};
</script>

<style>
section {
  height: 90vh;
  overflow: hidden;
  overflow-y: scroll;
}
h1 {
  text-align: left;
  padding-left: 7rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-size: 4rem;
}
.principal {
  display: flex;
  width: 100%;
}
.p {
  width: 50%;
  padding-top: 1rem;
}
p {
  padding-top: 2rem;
  font-size: 2rem;
}
svg {
  margin-left: 5%;
}
h3 {
  padding-top: 1rem;
  font-size: 15px;
}
a{
  color:#EF9740 ;
}
label{
  color: black;
}
@media (max-width: 780px) {
  .principal {
    display: flex;
    flex-direction: column-reverse;
  }
  .p {
    width: 100%;
  }
  h1 {
    text-align: center;
    padding-left: 0;
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-size: 4rem;
  }
}
</style>
