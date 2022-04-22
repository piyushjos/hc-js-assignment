<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="container">
        <div class="heading">
          <h3>Sign In</h3>
          <hr />
        </div>
        <form>
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" v-model="username" />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>

        <div>
         <input class="form-check-input mt-0" type="checkbox" id="check" required value=""/>
         <span>Remember Me! </span>
        </div>

          <div class="my-3">
            <button @click="loginUser" type="submit" class="btn btn-primary">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      username: this.username,
      password: this.password,
    };
  },

  methods: {
    loginUser(event) {
      event.preventDefault();
        
      let preventCorsError = {
        headers: {
    
          "Content-Type": "application/json",
           Accept: "*/*",
        }, 
      };

      this.postData(preventCorsError)
    },

    postData(preventCorsError) {
      const credentials = {
        username: this.username,
        password: this.password
      }

      axios.post(
        "https://fakestoreapi.com/auth/login",
        
        credentials,
        preventCorsError
      ).then((res) => {

        localStorage.token = JSON.stringify(res.data.token);
        console.log(res)
        console.log("hello");


        this.sendUserToHome(localStorage.token)
        
      }).catch((err) => {
        alert(err);
      })
    },

    sendUserToHome(token) {
      if(token) {
        this.$router.push('/')
      } else {
        alert("Unautorized user")
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>