<template>
  <div>
    <AudioPlayer v-if="songData.svgStr" :song-data="songData" />
    <!-- <iframe
      frameborder="0"
      scrolling="no"
      height="130"
      width="100%"
      src="https://www.wnyc.org/widgets/ondemand_player/18-to-29-now/#file=/audio/json/975844/&share=1"
    ></iframe> -->
    <h1 class="serif blue f3 f2-ns lh-title mb0 ttc">
      {{ article.title }}
    </h1>
    <div class="flex flex-column flex-row-ns justify-between">
      <h3 class="dark-red lh-title w-20-ns pr3-ns">
        {{ article.author }} <span class="di dn-ns"> | </span>
        <br class="dn db-ns" /><small class="normal">{{
          article.location
        }}</small>
      </h3>

      <p class="dn db-ns f4 lh-copy order-2 w-20-ns pl3-ns">
        {{ article.summary }}
      </p>
      <div class="measure-wide ph3-ns lh-copy center f5 f4-ns">
        <article v-html="article.text"></article>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from '~/components/AudioPlayer.vue'
import generateWaveform from '~/utils/waveformGenerator'

export default {
  components: { AudioPlayer },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      svgStr: null
    }
  },
  computed: {
    songData() {
      return {
        svgStr: this.svgStr,
        songUrl: this.article.audioURL,
        title: this.article.title,
        url: '',
        author: this.article.author
      }
    }
  },
  mounted() {
    this.svgStr = this.generateWaveformSVG(
      JSON.parse(atob(this.article.audioWaveform)),
      {
        height: 100,
        width: 500,
        padding: 0.8
      }
    )
  },
  methods: {
    generateWaveformSVG(data, options) {
      return generateWaveform(data, options)
    }
  }
}
</script>

<style lang="scss">
@import '~@/node_modules/plyr/dist/plyr.css';
@import '~@/assets/css/variables';

.plyr--full-ui input[type='range'] {
  // -webkit-appearance: none;
  // background: 0 0;
  // border: 0;
  // border-radius: 26px;
  color: $blue;
  // display: block;
  // height: 19px;
  // margin: 0;
  // padding: 0;
  // transition: box-shadow .3s ease;
  // width: 100%;
}

.plyr--audio .plyr__control.plyr__tab-focus,
.plyr--audio,
.plyr--video,
.plyr--audio .plyr__control:hover,
.plyr--audio .plyr__control[aria-expanded='true'],
.plyr--video .plyr__control:hover,
.plyr--video .plyr__control[aria-expanded='true'],
.plyr__control--overlaid {
  background: $blue;
}
</style>
