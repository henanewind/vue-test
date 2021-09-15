<template>
<!--    <el-table :data="tableData" border style="width: 100%" @contextmenu.native="handleContextMenu"-->
<!--              @row-contextmenu="rowContextmenu2" v-contextmenu="buttonActionData2" @contextmenu-action="buttonAction">-->
<!--      <el-table-column prop="stepInst" label="指令" show-overflow-tooltip></el-table-column>-->
<!--      <el-table-column prop="stepType" label="所属区域" show-overflow-tooltip></el-table-column>-->
<!--    </el-table>-->

  <div>
    <el-table :data="tableData" border style="width: 100%" @row-contextmenu="rowContextmenu1">
      <el-table-column prop="stepInst" label="指令" show-overflow-tooltip></el-table-column>
      <el-table-column prop="stepType" label="所属区域" show-overflow-tooltip></el-table-column>
    </el-table>
    <ContextMenu
      @action="action"
      :tip-show="false"
      :data="contextmenuData"
      :width="120"
      :visible="rowContextmenu"
      :x="pos.x"
      :y="pos.y">
    </ContextMenu>
  </div>
</template>

<script>
import ContextMenu from './content-menu/index'

export default {
  name: 'CustomMenu',
  components: {
    ContextMenu
  },
  data () {
    return {
      contextmenuData: [
        {label: '新增', action: 'add', icon: 'ri-add-line'},
        {label: '编辑', action: 'edit', icon: 'ri-edit-box-line', disabled: true},
        {label: '删除', action: 'delete', icon: 'ri-delete-bin-7-line'}
      ],
      pos: {
        x: 0,
        y: 0
      },
      tableData: [{
        'stepInst': 'authVerify',
        'stepType': '输入区',
        'actions': [{'icon': 'uex-icon-edit', 'label': 'test1test1test1', 'action': 'aaaa'}, {
          'label': 'test2',
          'action': 'bbbb'
        }]
      }, {
        'stepInst': 'authVerify',
        'stepType': '输入区',
        'actions': [{'label': 'test1test1test1', 'action': 'aaaa'}, {'label': 'test2', 'action': 'bbbb'}]
      }, {
        'stepInst': 'paramCheck',
        'stepType': '输入区',
        'actions': [{'label': 'test3', 'action': 'aaaa1'}, {'label': 'test4', 'action': 'bbbb1'}]
      }, {
        'stepInst': 'paramsConvert',
        'stepType': '输入区',
        'actions': [{'label': 'test1test1test1test1', 'action': 'action1'}, {
          'label': 'test2test2test2',
          'action': 'action2',
          'children': [{
            'label': 'test21est21est21',
            'action': 'action21',
            'children': [{'label': 'test211test211test211', 'action': 'action211'}, {
              'label': 'test212test212test212',
              'action': 'action212'
            }]
          }, {'label': 'test22test22test22', 'action': 'action22'}]
        }]
      }],
      buttonActionData2: [],
      rowContextmenu: false
    }
  },
  // methods: {
  //   buttonAction: function (data) {
  //     console.log(data.action)
  //   },
  //   rowContextmenu2: function (row, event) {
  //     this.rowContextmenu = true
  //     this.activeRow = row
  //   },
  //   handleContextMenu: function () {
  //     if (this.rowContextmenu) {
  //       this.buttonActionData2 = this.activeRow.actions
  //     } else {
  //       this.buttonActionData2 = []
  //     }
  //     this.rowContextmenu = false
  //   }
  // }
  methods: {
    getEventPos: function (e) {
      var x = e.clientX
      var y = e.clientY
      return {'x': x, 'y': y}
    },
    rowContextmenu1: function (row, event) {
      var e = event || window.event
      var pos = this.getEventPos(e)
      if (e.which === 3) {
        this.contentMenuShow = false
        this.pos.x = pos.x
        this.pos.y = pos.y
        this.actionData = row.actions
        console.log(this.actionData)
        this.contentMenuShow = true
      }
      this.preventDefault(e)
      e.returnValue = false
      return false
    },
    preventDefault: function (e) {
      e = e || window.event
      if (e.preventDefault) {
        e.preventDefault()
      } else {
        e.returnvalue = false
      }
    },
    action: function (data) {
      alert(data.action)
      this.contentMenuShow = false
    }
  },
  created: function () {
  },
  mounted: function () {
    var _self = this
    this.$nextTick(function () {
      var el = document.body
      var handleDisplay = function () {
        _self.contentMenuShow = false
      }
      if (el.addEventListener) {
        el.addEventListener('click', handleDisplay)
      } else if (el.attachEvent) {
        el.attachEvent('onclick', handleDisplay)
      }
    })
  }
}
</script>

<style scoped>

</style>
