<template>
  <div class="page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }" >工作台</el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in history" :key="index">{{ item }}</el-breadcrumb-item>
</el-breadcrumb>
<div class="breadoption">
  <i></i>
</div>
  </div>

</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      history: ['首页', '活动', '活动详情']
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
.page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

}

</style>
