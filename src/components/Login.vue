<template>
  <div>
    <label for="login">Login</label>
    <input type="text" name="login" v-model="input.username" />
    <label for="password">Senha</label>
    <input type="password" name="senha" v-model="input.password" />
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store";

export default defineComponent({
  name: "Login",
  data() {
    return { input: { username: "", password: "" } };
  },
  methods: {
    login() {
      if (this.input.username && this.input.password) {
        store.commit("setAuthentication", true);
        this.$router.replace("/");
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
