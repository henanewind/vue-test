<template>
  <div>
    <div>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group title="地区" v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{ city }}
        </el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
<!--        我的行程-->
        <live-record type="1"></live-record>
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import LiveRecord from './LiveRecord'

const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  name: 'ElementComponent',
  components: {
    'live-record': LiveRecord
  },
  data () {
    return {
      dialogVisible: false,
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      cities: cityOptions
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(() => {
          debugger
          console.log('关闭。')
          done()
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style scoped>

</style>
