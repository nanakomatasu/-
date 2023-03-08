<template>
  <div class="loginmain">
    <div class="box-card">
      <div class="left">
<img src="@/assets/image/formtitle.png" alt="" width="150px">
         <div class="form">
          <el-input
placeholder="请输入用户名"
prefix-icon="el-icon-user-solid"
v-model="username"
clearable style="width: 300px;margin-bottom: 50px;">
</el-input>
<p class="erruser" v-show="isuser">账号错误啦！</p>
<el-input placeholder="请输入密码" v-model="password" prefix-icon="el-icon-s-tools" show-password style="width: 300px;margin-bottom: 50px;"></el-input>
<p class="errpas" v-show="ispas">密码错误啦！</p>
<el-button type="warning" @click="tohome" :loading="loding">立即登录</el-button>
         </div>
      </div>
      <div class="right">
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {

  },
  data () {
    return {
      username: 'admin',
      password: '111111',
      isuser: false,
      ispas: false,
      loding: false
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
    tohome () {
      this.loding = true
      setTimeout(() => {
        if (this.username === 'admin' && this.password === '111111') { this.$router.push('/home/bench') } else {
          if (this.password !== '111111' && this.username !== 'admin') {
            this.ispas = true
            this.isuser = true
          } else if (this.username !== 'admin') {
            this.isuser = true
          } else {
            (
              this.ispas = true
            )
          }
        }
      }, 300)
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
.loginmain {
  background-color: #fff;
.box-card {
  width: 958px;
  margin: 100px auto  0;
  border: 1px solid #ccc;
  border-radius: 40px;
  box-shadow: 0 0 20px rgb(93 93 93 / 33%);
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 516px;
  .left {
    width: 398px;
  img {
    width: 150px;
    margin-top: 40px;
  }

    .form {
      margin-top: 50px;
      .erruser {
        width: 300px;
        margin: -50px auto 20px;
        text-align: left;
        color: red;
        font-size: 12px;
      }

      .errpas {
        width: 300px;
        margin: -50px auto 20px;
        text-align: left;
        color: red;
        font-size: 12px;
      }
      .el-button {
        display: block;
        width: 200px;
        margin: 0 auto;
        color: #333;
        font-weight: 700;
        font-size: 14px;
        box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
      }
    }
  }
  .right {
  width: 560px;
  background-image: url(@/assets/image/welcome.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
    overflow: hidden;
  }
}
}

</style>
