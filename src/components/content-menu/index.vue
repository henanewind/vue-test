<template>
  <transition name="fade">
    <div
      class="elx-context-menu"
      v-show="visible"
      :style="{width: width+'px', top: currentY+'px', left: currentX+'px'}">
      <ul>
        <context-menu-item
          v-for="item in data"
          :key="item.label"
          :data="item"
          :tip-show="tipShow"
          @action="action">
        </context-menu-item>
      </ul>
    </div>
  </transition>
</template>

<script>
import ContextMenuItem from './item'

export default {
  name: 'ContextMenu',
  componentName: 'ContextMenu',

  components: {
    ContextMenuItem
  },

  props: {
    width: {// 宽
      type: Number,
      default: 80
    },
    x: {// X坐标
      type: Number,
      default: 0
    },
    y: {// Y坐标
      type: Number,
      default: 0
    },
    data: {// 显示右键菜单的数据
      type: Array,
      default: function () {
        return []
      }
    },
    visible: {// 是否显示右键菜单
      type: Boolean,
      default: false
    },
    tipShow: {// 是否显示提示
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentX: 0,
      currentY: 0
    }
  },
  methods: {
    action (data) {
      if (!data.disabled) {
        this.$emit('action', data)
      }
    },
    changePos () {
      const gap = 5
      const bodyClientHeight = document.body.clientHeight
      const bodyClientTop = document.body.clientTop
      const height = this.$el.clientHeight
      const elBottom = height + this.currentY
      const viewHeight = bodyClientHeight + bodyClientTop
      if (viewHeight < elBottom) {
        this.currentY = viewHeight - height - gap
      }
    },
    handleDisplay () {
      this.contentMenuShow = false
    }
  },
  watch: {
    visible (val) {
      if (val) {
        const self = this
        self.$nextTick(() => {
          self.changePos()
        })
      }
    },
    x (val) {
      this.currentX = val
    },
    y (val) {
      this.currentY = val
      this.changePos()
    }
  },
  created () {
    this.currentX = this.x
    this.currentY = this.y
  },
  mounted () {
    this.changePos()
    window.addEventListener('resize', this.handleDisplay)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleDisplay)
  }
}
</script>

<style scoped>

</style>
