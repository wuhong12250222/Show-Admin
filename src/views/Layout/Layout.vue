<template>
  <div class="layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <img src="./logo.png" alt="" class="pic">
            </div>
          </el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light"><h1>电商后台管理系统</h1></div></el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple quit">
              <a href="#" class="quit"><h3>退出</h3></a>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1"><i class="el-icon-menu"></i>角色列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="2-2"><i class="el-icon-menu"></i>权限列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1"><i class="el-icon-menu"></i>商品列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="3-2"><i class="el-icon-menu"></i>分类参数</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="3-3"><i class="el-icon-menu"></i>商品分类</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据统计</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1"><i class="el-icon-menu"></i>数据报表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  components: {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.layout {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pic {
  margin-top: 38px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 90px;
    height: 70px!important;
    display: flex;
    align-items: center;
    justify-content: center
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
  width: 220px!important;
}
.el-submenu__title {
  padding-left: 0px!important;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-col-12 {
  width: 100%;
  height: 100%;
}
.el-menu {
  height: 100%;
  border-right: none;
}
.el-menu-item {
  padding-left: 90px!important;
}
.el-menu-item-group {
  padding-left: 0;
}
div.el-menu-item-group__title {
  padding-left: 25px!important;
  height: 0px!important;
}
.element.style {
  padding-left: 0!important;
}
</style>
