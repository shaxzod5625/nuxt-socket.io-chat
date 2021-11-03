<template>
  <div class="login">
    <!-- Error alerts -->
    <el-alert
      title="Ошибка"
      type="error"
      description="Поле имя не должно быть пустым"
      show-icon
      v-if="$v.name.$dirty && !$v.name.required"
    />
    <el-alert
      title="Ошибка"
      type="error"
      description="Поле комната не должно быть пустым"
      show-icon
      v-if="$v.room.$dirty && !$v.room.required"
    />
    <!-- Form -->
    <form action="" @submit.prevent="submitHandler">
      <h1>Вход в систему</h1>
      <hr />
      <label for="">Введите имя</label>
      <el-input
        suffix-icon="el-icon-user"
        placeholder="Имя"
        v-model="name"
        :class="{ invalid: $v.name.$dirty && !$v.name.required }"
      />
      <label for="">Введите комнату</label>
      <el-input
        suffix-icon="el-icon-lock"
        placeholder="Комната"
        v-model="room"
        :class="{ invalid: $v.room.$dirty && !$v.room.required }"
      />
      <div>
        <button class="login-btn" type="submit" @click="submitHandler" round>
          Войти
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required } from "vuelidate/lib/validators";
export default {
  head: {
    title: "Bxoд"
  },
  data: () => ({
    name: "",
    room: ""
  }),
  validations: {
    name: { required },
    room: { required }
  },
  methods: {
    ...mapMutations(["setUser"]),
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const user = {
        name: this.name,
        room: this.room
      };
      this.$socket.emit("userJoined", user, data => {
        if (typeof data === "string") {
          console.error(data);
        } else {
          user.id = data.userId;
          this.setUser(user);
          this.$router.push("/chat");
        }
      });
    }
  }
};
</script>
<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.login form {
  background: #fff;
  border: 1px solid #eee;
  padding: 15px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 9px;
  max-width: 450px;
}
.login .el-input {
  margin-bottom: 15px;
}
.login h1 {
  font-family: Arial;
  font-size: 35px;
  font-weight: normal;
  color: #363636;
}
.el-alert.el-alert--error.is-light {
  position: fixed;
  top: 0;
  left: 0;
}
.login .login-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
