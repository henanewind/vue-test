<template>
  <div>
    <el-row>
      数值: {{ num }} <br>
      <el-input-number ref="myInput" v-model="num" controls-position="right" :step="0.1" :precision="2" step-strictly
                       @change="handleChange" :min="0" :max="10"/>
      <el-button type="primary" icon="el-icon-edit" @click="showText">选择文字</el-button>
    </el-row>
    <el-row>
      <el-input-number v-model="num1"></el-input-number>
      <el-input-number size="medium" v-model="num2"></el-input-number>
      <el-input-number size="small" v-model="num3"></el-input-number>
      <el-input-number size="mini" v-model="num4"></el-input-number>
    </el-row>
    <!--    <el-row>-->
    <!--      <label>已选择:{{ value }}</label><br>-->
    <!--      <el-select v-model="value" clearable filterable placeholder="请选择">-->
    <!--        <el-option-->
    <!--          v-for="item in options"-->
    <!--          :key="item.value"-->
    <!--          :label="item.label"-->
    <!--          :value="item.value">-->
    <!--        </el-option>-->
    <!--      </el-select>-->
    <!--    </el-row>-->
    <!--    <el-row>-->
    <!--      <el-col :span="8">-->
    <!--        <label>已选择:{{ value1 }}</label><br>-->
    <!--        <el-select v-model="value1" multiple placeholder="请选择">-->
    <!--          <el-option-->
    <!--            v-for="item in options"-->
    <!--            :key="item.value"-->
    <!--            :label="item.label"-->
    <!--            :value="item.value">-->
    <!--          </el-option>-->
    <!--        </el-select>-->
    <!--      </el-col>-->
    <!--      <el-col :span="8">-->
    <!--        <label>已选择:{{ value2 }}</label><br>-->
    <!--        <el-select-->
    <!--          v-model="value2"-->
    <!--          multiple-->
    <!--          collapse-tags-->
    <!--          style="margin-left: 20px;"-->
    <!--          placeholder="请选择">-->
    <!--          <el-option-->
    <!--            v-for="item in options"-->
    <!--            :key="item.value"-->
    <!--            :label="item.label"-->
    <!--            :value="item.value">-->
    <!--          </el-option>-->
    <!--        </el-select>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <el-row>
      <label>已选择:{{ value }}</label><br>
      <el-select
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'selects',
  data () {
    return {
      num: 1,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      // options: [{
      //   value: '选项1',
      //   label: '黄金糕'
      // }, {
      //   value: '选项2',
      //   label: '双皮奶'
      // }, {
      //   value: '选项3',
      //   label: '蚵仔煎'
      // }, {
      //   value: '选项4',
      //   label: '龙须面'
      // }, {
      //   value: '选项5',
      //   label: '北京烤鸭'
      // }],
      // value: '',
      // value1: [],
      // value2: []
      options: [],
      value: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming']
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    handleChange (value) {
      console.log('当前值：', value)
    },
    showText () {
      this.$refs.myInput.select()
      // console.log(text)
    }
  }
}
</script>

<style scoped>

</style>
