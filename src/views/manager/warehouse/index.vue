<template>
    <div>
      <div class="title">
        <el-card class="box-card">
   <div class="wid">
    <p>仓库编号</p>
    <el-input v-model="wid" placeholder="请输入内容"></el-input>

   </div>
   <div class="wname">
    <p>仓库名字</p>
    <el-input v-model="wname" placeholder="请输入内容"></el-input>

   </div>
   <div class="wstatus">
   <p> 仓库状态</p>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   </div>

   <div class="woptions">
  <p> 仓库操作</p>
   </div>
</el-card>
      </div>

<div class="wmain">
<el-card class="box-card" style="flex-direction: column !important;">
  <div class="addbtn"> <el-button type="success" round>新增仓库</el-button></div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-card>

</div>
    </div>
</template>

<script>
import request from '@/utils/request';
export default {
  props: {

  },
  data () {
    return {
      wname: '',
      wid: '',
      value: '',
      options: [
        { value: 1, label: '全部' },
        { value: 2, label: '已启用' },
        { value: 3, label: '停用' },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.getlist)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    handleClick (row) {
      console.log(row);
    },
    async getlist () {
      const res = await request({
        method: 'get',
        url: 'warehouse/list'
      })
      console.log(res);
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
.title {
  /deep/.el-card__body{
  display: flex;
  justify-content: space-around;
div {
  text-align: left;

  p {
    margin-bottom: 10px;
    font-size: 12px;
  }
}
  .wstatus {
    display: flex;
    flex-direction: column;
  }
}

}

.wmain {
  margin-top: 20px;

  .addbtn {
    text-align: left;
    margin-bottom: 10px;
  }
}
</style>
