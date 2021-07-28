<template>

  <!-- 只贴出item部分 -->
  <!--  <el-form-item label="出产国别" prop="countryType">-->
  <!--    <el-select v-model="form.countryType" placeholder="请选择出产国别">-->
  <!--      <el-option  v-for="item in countryList" :key="item.value" :label="item.label"-->
  <!--                  :value="item.value"></el-option>-->
  <!--    </el-select>-->
  <!--  </el-form-item>-->
  <div>
    Hello World!

    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <span>{{ form.countryType }}</span>
    <el-form>
      <el-form-item label="出产国别" prop="countryType">
        <el-select v-model="form.countryType" placeholder="请选择出产国别">
          <el-option
            v-for="item in countryList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
    </div>
    <div>
      <!--      <span @click="$router.back()">返回</span>-->
      <el-button type="primary" :loading="loading" plain="true">加载中....</el-button>
      <el-button type="primary" @click="loading = !loading">停止加载</el-button>
      <el-button type="primary" @click="$router.back()" round="true">返回</el-button>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ComboBox',
  data () {
    return {
      loading: true,
      input: '这是一个element-ui的输入标签',
      form: {countryType: 'CN'},
      countryList: [
        {
          value: '0',
          label: '比亚迪'
        },
        {
          value: '1',
          label: '长城'
        }
      ], // 定义数组
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      value: ''
    }
  },
  methods: {
    doGetDicts () {
      // if (this.dialog) {
      //   getDicts()
      //     .then(res => {
      //       this.countryList= res.data.countryList;//把请求返回的列表，赋值给之前定义的
      //     })
      //     .catch(err => {
      //       this.loading = false;
      //       console.log(err.response.data.message);
      //     });
      // }
    },
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          // message: '删除成功!'
          message: '____' + this.form.countryType
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
