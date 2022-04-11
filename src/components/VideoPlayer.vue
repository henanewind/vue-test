<template>
  <div class="video-box">
    <video controls="controls" class="demo-video" ref="player" muted  @dblclick="fullScreen"></video>
  </div>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: 'VideoPlayer',
  data () {
    return {
      player: null,
      loading: true
    }
  },
  mounted () {
    this.playVideo()
  },
  watch: {
    rtsp: {
      handler: function (val) {
        if (val) {
          if (this.player) {
            this.player.unload()
            this.player.destroy()
            this.player = null
            this.loading = true
          }
          this.$nextTick(() => {
            this.playVideo()
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    fullScreen () {
      if (this.$refs.player.requestFullScreen) {
        this.$refs.player.requestFullScreen()
      } else if (this.$refs.player.mozRequestFullScreen) {
        this.$refs.player.mozRequestFullScreen()
      } else if (this.$refs.player.webkitRequestFullScreen) {
        this.$refs.player.webkitRequestFullScreen()
      }
    },
    playVideo () {
      const time1 = new Date().getTime()
      if (flvjs.isSupported()) {
        let video = this.$refs.player
        if (video) {
          this.player = flvjs.createPlayer({
            type: 'flv',
            isLive: true,
            // ffmpeg -re -stream_loop -1 -i 20211102104550/front1.mp4 -c copy -f rtsp rtsp://localhost:8554/mystream
            // url: `ws://192.168.80.49:8888/rtsp/id123?url=rtsp://192.168.80.49:8554/mystream`
            // url: `ws://127.0.0.1:7788/rtsp/12345678?url=rtsp://localhost:7789/mystream`
            url: `ws://127.0.0.1:7788/rtsp/12345678?url=rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4`
          })
          this.player.attachMediaElement(video)
          try {
            this.player.load()
            this.player.play().then(() => {
              console.log(new Date().getTime() - time1)
              this.loading = false
            })
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  },
  beforeDestroy () {
    if (this.player) {
      this.player.unload()
      this.player.destroy()
      this.player = null
    }
  }
}
</script>

<style scoped>

.video-box {
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
video {
  display: block;
}
</style>
