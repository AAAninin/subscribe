<template>
  <div class="main">
    <div class="flex">
      <div class="box">
        <h1>登陆</h1>
        <input class="username" v-model="username" type="text" id="username" placeholder="用户名">
        <p v-bind:class="{out:uistrue}">用户名格式错误</p>
        <input class="password" v-model="password" type="password" id="password" placeholder="密码">
        <p v-bind:class="{out:pistrue}">密码格式错误</p>
        <button class="login" v-on:click="lo">登陆</button>
        <div class="button_box">
          <button class="zhu">注册</button>
          <div class="kong"></div>
          <button class="wang">忘记密码</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      uistrue: true,
      pistrue: true
    };
  },
  methods: {
    lo: function() {
      console.log(this.username);
      console.log(this.password);
      if (this.username.length != 11) {
        this.uistrue = false;
      } else {
        this.uistrue = true;
      }
      if (this.password.length != 6) {
        this.pistrue = false;
      } else {
        this.pistrue = true;
      }
      if (this.pistrue && this.uistrue) {
        var instance = axios.create({
          timeout: 1000,
          headers: { "Content-Typer": "application/x-www-form-urlencoded" }
        });
        instance
          .post("http://192.168.0.119:9999/EthereumAssetsPro/login.action", {
            tel: this.username,
            password: this.password
          })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style >
* {
  color: #999b9d;
}
.main {
  /* margin: 0 auto; */
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../assets/lgoin.png");
  background-attachment: fixed;
  background-size: cover;
}
.flex {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
}
h1 {
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  color: #35a2f4;
}
input {
  width: 200px;
  height: 25px;
  padding-left: 7px;
  display: block;
  margin-bottom: 20px;
  font-size: 15px;
}
.box {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-top: 120px;
  margin-right: 200px;
}
.button_box {
  display: flex;
}
.zhu {
  height: 30px;
  flex: 1;
}
.wang {
  height: 30px;
  flex: 1;
}
.kong {
  flex: 0.3;
}
.login {
  margin-bottom: 30px;
  height: 30px;
}
button {
  border: none;
  background: #35a2f4;
  color: #000;
}
p {
  color: red;
  margin-bottom: 10px;
}
.out {
  display: none;
}
</style>
