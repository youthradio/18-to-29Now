<template>
  <div>
    <audio ref="player" controls="false" class="dn" :src="songData.songUrl">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <div
      class="flex items-center br-pill white"
      style="background-color:#204D8F"
      tabindex="0"
      @keyup.left="seekAudio(-1)"
      @keyup.right="seekAudio(1)"
      @keyup.space="togglePlay"
    >
      <div class="pa4 pl4 pr2">
        <a
          tabindex="1"
          role="button"
          href="#"
          class="grow no-underline dib"
          @click.prevent="togglePlay"
        >
          <svg class="pointer db" width="50" height="50" viewBox="0 0 552 552">
            <path
              v-if="isPlaying"
              style="fill:white;"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"
              class=""
            ></path>
            <path
              v-else
              style="fill:white;"
              d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
              class=""
            ></path>
          </svg>
        </a>
      </div>
      <div class="ph2">
        <a
          tabindex="2"
          role="button"
          style="text-decoration:none!important;"
          class="grow no-underline dib"
          target="_blank"
          :href="songData.url"
        >
          <h2 class="f6 white sans-serif">{{ songData.title }}</h2>
          <h3 class="f7 white sans-serif fw4">{{ songData.author }}</h3>
        </a>
      </div>
      <div
        ref="waveform"
        tabindex="3"
        class="ph2"
        v-html="songData.svgStr"
      ></div>
      <p class="lh-title pl2 pr4 b nowrap f7 f5-ns">
        <span
          tabindex="4"
          role="button"
          class="pointer"
          @keyup.enter="toggleTimeMode"
          @click="toggleTimeMode"
        >
          <span :style="!reverseTimeMode ? { visibility: 'hidden' } : {}"
            >-</span
          >{{ getCurrentTime | formatSeconds }}
        </span>
        / {{ duration | formatSeconds }}
      </p>
    </div>
  </div>
</template>

<script>
// import { event as currentEvent } from 'd3-selection'
import * as selection from 'd3-selection'
import * as d3Array from 'd3-array'
import * as d3Scale from 'd3-scale'
import * as d3Drag from 'd3-drag'

const d3 = Object.assign({}, selection, d3Array, d3Scale, d3Drag)

export default {
  filters: {
    formatSeconds(n) {
      const d = new Date(n * 1000)
      return `${String(d.getMinutes()).padStart(2, '0')}:${String(
        d.getSeconds()
      ).padStart(2, '0')}`
    }
  },
  props: {
    songData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: this.value,
      waveformSVG: null,
      cursor: null,
      player: null,
      w: null,
      h: null,
      duration: null,
      currentTime: 0,
      reverseTimeMode: false,
      isPlaying: false
    }
  },
  computed: {
    getCurrentTime() {
      if (!this.reverseTimeMode) return this.currentTime
      return this.duration - this.currentTime
    }
  },
  mounted() {
    this.player = this.$refs.player
    this.player.addEventListener('play', this.onPlay)
    this.player.addEventListener('pause', this.onPause)
    this.player.addEventListener('timeupdate', this.onTime)
    this.player.addEventListener('loadedmetadata', this.onMetaData)
    // this.player.addEventListener('loadeddata', (e) => console.log(e))

    this.waveformSVG = d3.select(this.$refs.waveform).select('svg')

    this.waveformSVG.call(
      d3
        .drag()
        .on('start', this.dragged)
        .on('drag', this.dragged)
        .on('end', this.dragended)
    )
    this.w = this.waveformSVG.attr('width')
    this.h = this.waveformSVG.attr('height')
    this.cursor = this.waveformSVG
      .append('rect')
      .attr('height', this.h)
      .attr('width', 2)
      .attr('rx', 1)
      .attr('ry', 1)
      .attr('x', 0)
      .attr('fill', 'white')
  },
  methods: {
    onPlay() {
      console.log(this.player.currentTime)
    },
    onPause() {
      console.log(this.player.currentTime)
    },
    onTime() {
      this.currentTime = this.player.currentTime
      const p = this.player.currentTime / this.duration
      this.updateCursor(p)
    },
    onMetaData() {
      this.duration = this.player.duration
    },
    dragged(d) {
      const w = ~~this.waveformSVG.node().getBoundingClientRect().width
      const x = Math.max(0, Math.min(selection.event.x, w))
      const p = x / w
      this.player.currentTime = this.duration * p
      this.currentTime = this.player.currentTime
      this.updateCursor(p)
    },
    dragended(d) {},
    updateCursor(p) {
      const w = this.waveformSVG.node().getBoundingClientRect().width
      this.cursor.attr('x', w * p)
    },
    toggleTimeMode() {
      this.reverseTimeMode = !this.reverseTimeMode
    },
    seekAudio(dir) {
      this.player.currentTime = this.player.currentTime + dir * 5
    },
    async togglePlay() {
      if (!this.player.paused) {
        this.isPlaying = false
        this.player.pause()
        return
      }
      try {
        await this.player.play()
        this.isPlaying = true
      } catch (err) {
        this.isPlaying = false
      }
    }
  }
}
</script>

<style lang="scss"></style>
