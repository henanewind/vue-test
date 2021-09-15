<template>
  <div>
    <!--    <el-tree :data="templateData" :prop="templateData.tempName"  @node-contextmenu="rightClick"></el-tree>-->
    <el-table :data="tableData" @row-contextmenu="rightClick">
      <el-table-column prop="stepInst" label="指令" show-overflow-tooltip></el-table-column>
      <el-table-column prop="stepType" label="所属区域" show-overflow-tooltip></el-table-column>
    </el-table>
    <el-button size="medium" @contextmenu.prevent.native="openMenu($event)">
      ....
    </el-button>
    <div v-show="menuVisible">
      <ul id="menu" class="menu">
                <li class="menu__item">新增</li>
                <li class="menu__item">重命名</li>
                <li class="menu__item">删除</li>
        <li @click="onExportExcel" class="menu__item">导出到Excel</li>
      </ul>
    </div>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li>上移一层</li>
      <li>下移一层</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  data () {
    return {
      menuVisible: false,
      visible: false,
      top: 0,
      left: 0,
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
      }]
    }
  },
  mounted () {
    document.oncontextmenu = function () {
      return false
    }
  },
  watch: {
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  methods: {
    onExportExcel () {
      console.log('onExportExcel')
    },
    openMenu (e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY - 60 // fix 位置bug
      this.visible = true
    },
    closeMenu () {
      this.visible = false
    },
    rightClick (row, event) {
      this.menuVisible = false // 先把模态框关死，目的是 第二次或者第n次右键鼠标的时候 它默认的是true
      this.menuVisible = true // 显示模态窗口，跳出自定义菜单栏
      var menu = document.querySelector('#menu')
      this.styleMenu(menu)
    },
    delOnClick () {
      // 取消鼠标监听事件 菜单栏
      this.menuVisible = false
      document.removeEventListener('click', this.delOnClick) // 要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了
    },
    styleMenu (menu) {
      if (event.clientX > 1800) {
        menu.style.left = event.clientX - 100 + 'px'
      } else {
        menu.style.left = event.clientX + 1 + 'px'
      }
      document.addEventListener('click', this.delOnClick) // 给整个document新增监听鼠标事件，点击任何位置执行foo方法
      if (event.clientY > 700) {
        menu.style.top = event.clientY - 30 + 'px'
      } else {
        menu.style.top = event.clientY - 10 + 'px'
      }
    }
  }
}
</script>

<style scoped>
.menu__item {
  display: block;
  line-height: 20px;
  text-align: center;
  margin: 10px;
  cursor: default;
}

.menu__item:hover {
  color: #FF0000;
}

.menu {
  height: auto;
  width: auto;
  position: absolute;
  font-size: 14px;
  text-align: left;
  border-radius: 10px;
  border: 1px solid #c1c1c1;
  background-color: #ffffff;
}

li:hover {
  background-color: #E0E0E2;
  color: white;
}

ul {
  padding-inline-start: 4px;
}

.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
       background: #eee;
     }
  }
}
</style>
