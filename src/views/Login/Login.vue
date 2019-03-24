<template>
  <div class="login-wrap">
    <div class="login-content">
      <el-form :model="loginForm" class="demo-form-inline" :rules="rules" ref="loginFormEl">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="onSubmit" :plain="true">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginFormEl.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    async login () {
      const { data: { data, meta } } = await axios.post('http://localhost:8888/api/private/v1/login', this.loginForm)
      // status === 200 && this.$message({ message: '恭喜你，登录成功', type: 'success' })
      if (meta.status === 200) {
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        })
        window.localStorage.setItem('token', data.token)
        this.$router.push('/')
      } else {
        this.$message('登录失败')
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
