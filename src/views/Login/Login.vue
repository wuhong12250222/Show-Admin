<template>
  <div class="login-wrap">
    <div class="login-content">
      <el-form label-position="top" label-width="80px" :model="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click.prevent="onSubmit">登录</el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm:{
        username: '',
        password: ''
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
.login-wrap {
  height: 100%;
  background: #2f4050;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content {
  width: 500px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
}
.login-btn {
  width: 100%;
}
</style>
