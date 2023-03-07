<template>
  <div>
    <div class="title">
      <el-card class="box-card">
 <div class="wid">
  <p>仓库名称</p>
  <el-input v-model="wid" placeholder="请输入内容"></el-input>

 </div>
 <div class="wname">
  <p>库区名称</p>
  <el-input v-model="wname" placeholder="请输入内容"></el-input>

 </div>
 <div class="wstatus">
 <p>库区状态</p>
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
  <el-button type="warning" round>搜索</el-button>
  <el-button type="info" round>重置</el-button>
 </div>
</el-card>
    </div>

<div class="wmain">
<el-card class="box-card" style="flex-direction: column !important;">
<div class="addbtn"> <el-button type="success" round>新增库区</el-button></div>
<el-table
  :data="tableData"
  border
  stripe
  width:100
  style="width: 100%;font-size: 12px;"
  highlight-current-row
  @current-change="handleCurrentChange">
  <el-scroll style="width: 100%;height: 100%;">
  <!-- <el-table-column
    prop="id"
    label="序号"
    width="150"
    fixed="left"
  >
  </el-table-column>
  <el-table-column
    prop="warehouseID"
    label="所属仓库"
    width="150">
  </el-table-column> -->
  <el-table-column
    prop="code"
    label="库区编号"
    width="120"
    fixed="left">
  </el-table-column>
  <el-table-column
    prop="name"
    label='库区名称'
    width="120">
  </el-table-column>
<el-table-column
    label="温度类型"
    width="200">
    <template slot-scope="scope">
      {{ scope.row.temperatureType == 'CW'?'常温':'' }}
      {{ scope.row.temperatureType == 'LC'?'冷藏':'' }}
      {{ scope.row.temperatureType == 'HW'?'恒温':'' }}
</template>
  </el-table-column>

  <el-table-column
    prop="address"
    label="承重类型"
    width="200">
    <template slot-scope="scope">
      {{ scope.row.bearingType == 'ZX'?'重型':'' }}
      {{ scope.row.bearingType == 'BX'?'中型':'' }}
      {{ scope.row.bearingType == 'QX'?'轻型':'' }}
</template>
  </el-table-column>
  <el-table-column
    label="用途属性"
    width="120">
    <template slot-scope="scope">
      {{ scope.row.useType == 'RKHCQ'?'入库缓存区':'' }}
      {{ scope.row.useType == 'CKHCQ'?'出库缓存区':'' }}
      {{ scope.row.useType == 'ZJQ'?'质检区':'' }}
      {{ scope.row.useType == 'CCQ'?'储存区':'' }}
    </template>
  </el-table-column>
  <el-table-column
    label="库区状态"
    width="120">
    <template slot-scope="scope">
      {{ scope.row.status == '1'?'启用':'禁用' }}
    </template>
  </el-table-column>
  <el-table-column
    prop="includedNum"
    label="库区数量"
    width="120">
  </el-table-column>
  <el-table-column
    prop="personName"
    label="负责人"
    width="120">
  </el-table-column>
  <el-table-column
    prop="phone"
    label="联系电话"
    width="120">
  </el-table-column>
  <el-table-column
    prop="updateTime"
    label="更新时间"
    width="140"
    >
  </el-table-column>
  <el-table-column
    fixed="right"
    label="操作"
    width="120">
    <template slot-scope="scope" >
      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      <el-button type="text" size="small">{{ scope.row.status == '1' ? '停用' : '启用' }}</el-button>
      <el-button type="text" size="small">编辑</el-button>
    </template>
  </el-table-column>
</el-scroll>
</el-table>
</el-card>
<div class="block">
<span class="demonstration"></span>
<el-pagination
  layout="prev, pager, next"
  :total="50">
</el-pagination>
</div>
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
      tableData: [],
      newtype: ''
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
        url: 'area/list'
      })
      console.log(res);
      this.tableData = res
      console.log(this.tableData);
    },
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange (val) {
      this.currentRow = val;
    },
    changestatus (status) {
      return !status
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

.woptions {
display: flex;
align-items: center;
}

.el-table {
/deep/.el-table__body-wrapper::-webkit-scrollbar {
width: 10px; /*滚动条宽度*/
 height: 10px; /*滚动条高度*/}
/*定义滚动条轨道 内阴影+圆角*/
/deep/.el-table__body-wrapper::-webkit-scrollbar-track {/*滚动条的背景区域的内阴影*/
border-radius: 10px; /*滚动条的背景区域的圆角*/
 background-color: transparent; /*滚动条的背景颜色*/
}

/deep/.el-table__body-wrapper::-webkit-scrollbar-thumb {
/*滚动条的内阴影*/
border-radius: 10px; /*滚动条的圆角*/
background-color: #ccc; /*滚动条的背景颜色*/
}
}

</style>
