<template>
    <div>
    <div class="usertitle">
      <div class="title-left">
        <el-card class="box-card">
         <img src="@/assets/image/dashboard-banner-left@2x.5afd2949.png" alt="">
         <div class="saying"></div>
         <img src="@/assets/image/dashboard-banner-right@2x.28195570.png" alt="">
         <div class="useravatar">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="60"></el-avatar>
          <p>仓库管理员</p>
         </div>
         <div class="saying">
          <p>年少不识愁滋味，为赋新词强说愁</p>
          <p>—————— 辛弃疾</p>
         </div>
         <div class="site">北京总仓</div>

</el-card>
      </div>
      <div class="title-right"></div>
    </div>
    </div>
</template>

<script>
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

  },
  components: {

  },
};
</script>

<style scoped lang="less">
   .usertitle {
    display: flex;
     .title-left {
     width: 942px;

      .el-card {
        border-radius: 18px;
        height: 148px;
        background: linear-gradient(270deg,#ffc771,#ffa634);

        /deep/.el-card__body {
          display: flex;
          padding: 0%;
          height: 100%;
          justify-content: space-between;
          position: relative;
          .useravatar{
            position: absolute;
            left: 30px;
            top: 30px;
            p {
              margin-top: 5px;
            }
          }

          .saying {
            text-align: right;
            position: absolute;
            left: 35%;
            top: 50%;
            transform: translate(-50%,-50%);
            color: #fff;
            font-size: 20px;
          }
        .site {
          background: #f8f5f5;
          opacity: .79;
          position: absolute;
         width: 147px;
         height: 40px;
         line-height: 40px;
         text-align: center;
          right: 20px;
          top: 20px;
          border-radius: 5px;
        }
              }
        }

          //  .addone {
          //   display: flex;
          //   height: 100%;
          //  }
        }
      }
     </style>
