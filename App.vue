<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="router">
      <p><router-link to="/">경력별</router-link></p>
      <p><router-link to="/result">해결 건수별</router-link></p>
      <p><router-link to="/rating">평점별</router-link></p>
    <router-view/>

    </div>
 
    <!-- <p>  <Login></Login>   </p> -->
  </div>
</template>

<script>
// import Login from "./components/LoginView.vue"
export default {
  name: 'App',
  components: {
    // Login: Login,
  }
}
</script>

<style scoped>
html,
body,
#app {
  height:100%
}
body 
#app {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.form-signin {
  /* width: 100px;
  max-width: 330px; */
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom:  -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom:  10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>