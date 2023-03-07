<template>
<el-container>
  <div></div>
  <el-aside width="200px">

    <el-col>
    <img src="@/assets/image/formtitle.png" width="150px" alt="">
    <el-scrollbar style="height: 100%; overflow-x: hidden;">

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style="height: 550px;">

      <el-menu-item index="1" @click="() => this.$router.push('/home/bench')">
        <i class="el-icon-s-operation"></i>
        <span slot="title" >工作台</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-postcard"></i>
          <span>基础信息管理</span>
        </template>
        <el-menu-item index="2-1"  @click="() => {
          this.$router.push('/home/manage-base-info/warehouse')
        }">仓库管理</el-menu-item>
          <el-menu-item index="2-2" @click="()=>{
            this.$router.push('/home/manage-base-info/area')
          }">库区管理</el-menu-item>
          <el-menu-item index="2-3" @click="() => {
            this.$router.push('/home/manage-base-info/location')
          }">库位管理</el-menu-item>
          <el-menu-item index="2-4">库位视图</el-menu-item>
          <el-menu-item index="2-5">货品管理</el-menu-item>
          <el-menu-item index="2-6">货品类型管理</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <span>商务管理</span>
        </template>
        <el-menu-item index="3-1" >货主管理</el-menu-item>
        <el-menu-item index="3-2" >承运商管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>库内管理</span>
        </template>
        <el-menu-item index="4-1" >盘点单</el-menu-item>
        <el-menu-item index="4-2" >盘点任务</el-menu-item>
        <el-menu-item index="4-3" >库存损益</el-menu-item>
        <el-menu-item index="4-4" >实时库存</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span>入库管理</span>
        </template>
        <el-menu-item index="5-1" >入库单</el-menu-item>
        <el-menu-item index="5-2" >收货任务</el-menu-item>
        <el-menu-item index="5-3" >上架任务</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-fold"></i>
          <span>出库管理</span>
        </template>
        <el-menu-item index="6-1" >出库单</el-menu-item>
        <el-menu-item index="6-2" >拣货任务</el-menu-item>
        <el-menu-item index="6-3" >交接任务</el-menu-item>
        </el-submenu>
    </el-menu>

  </el-scrollbar>
  </el-col>
  <el-card class="box-card">
    <div class="userino">
      <div class="useravant">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="uname">admin</div>
      <div class="fengexian"></div>
      <img src="@/assets/image/logout.png" alt="" class="logout" @click="tologout">
    </div>
</el-card>
  </el-aside>

  <el-container>
    <el-header>
    <headerpage />
    </el-header>
    <el-main>
      <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    </el-main>
  </el-container>
</el-container>
</template>

<script>
import headerpage from '@/views/header'
export default {
  props: {

  },
  data () {
    return {

    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    tologout () {
      this.$router.push('/login')
    }
  },
  components: {
    headerpage
  },
};
</script>

<style scoped lang="less">
.zhanwei {
  width: 300px;
}
.el-aside{
  text-align: left;
  position: fixed;
  left: 0;
  padding: 10px 0;
  box-shadow: 3px 2px 9px 1px rgba(202, 201, 199, 0.47);
  z-index: 9999;
  img {
    margin-left: 20px;
  }
}
// .el-col::-webkit-scrollbar{
//   display: none;
// }
// .is-active {
//   background-color: #ffb200;
// }
.el-submenu .el-menu-item{
  color: rgb(136, 126, 126);
}
.is-active {
  background: #fff6e2;
  color: #333;
}

.el-submenu .is-active {
  background-color: transparent;
  border-radius: 0;
    color: #333;
    font-weight: 700;
}

.box-card {
  width: 210px;
  height: 90px;
  margin-left: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  .userino{
    display: flex;
   justify-content: center;
   align-items:center ;
   margin-top: 10px;
   .useravant {
    margin-right: 10px;
   }
   .uname {
     margin-right: 10px;
   }
   .logout {
    margin-left: 5px;
    width: 30px;

   }
   .fengexian {
    height: 18px;
    width: 1px;
    background-color: #333;
   }
  }
}

.el-header {
  background-color: #f5f1f1;
}
.el-container {
  margin-left: 100px;
}
.fade-enter-active,
.fade-leave-avtive {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
