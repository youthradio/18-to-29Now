<template>
  <header ref="header" class="min-vh-100 bg-washed-red">
    <nav class="serif pl2 dn db-ns pv2 z-2 f6 f4-ns bg-blue">
      <div class="tc">
        <nuxt-link
          class="link dib mr3 pv1 underline-hover washed-red"
          title="About"
          :to="{ path: '/', hash: 'about' }"
        >
          About this Project
        </nuxt-link>
        <nuxt-link
          class="link dib mr3 pv1 underline-hover washed-red"
          title="Latest"
          :to="{ path: '/', hash: 'latest' }"
        >
          Stories
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: 'contributors' }"
          class="link dib mr3 pv1 underline-hover washed-red"
          title="Contributors"
        >
          Contributors
        </nuxt-link>
      </div>
    </nav>
    <div
      class="layers relative flex flex-row-ns flex-column justify-center ph3 ph0-ns mt0-ns mb3-ns z-2"
    >
      <img
        alt=""
        src="logos/youngamerica.svg"
        class="db dn-ns z-3 w-50 mt3 nb4 ml3"
      />
      <div class="grid-container grid-container-ns">
        <div class="grid-col-start-2 dn db-ns">
          <img
            alt=""
            src="images/grid/1.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class=" ">
          <img
            alt=""
            src="images/grid/2.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class=" ">
          <img
            alt=""
            src="images/grid/3.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class=" ">
          <img
            alt=""
            src="images/grid/4.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="dn db-ns grid-col-1-4 z-2">
          <div class="flex justify-end items-end h-100">
            <img alt="" src="logos/ygamerica.svg" class="db h-100" />
          </div>
        </div>
        <!-- <div class="dn db-ns"></div> -->
        <div class=" ">
          <img
            alt=""
            src="images/grid/5.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class=" ">
          <img
            alt=""
            src="images/grid/6.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="grid-col-start-1 dn db-ns">
          <div class="">
            <img
              src="logos/yrlogo.svg"
              class="db ml-auto pa1"
              alt="YR Media Logo"
            />
            <img
              src="logos/wnyclogo.svg"
              class="db ml-auto pa1"
              alt="WNYC Logo"
            />
            <img
              src="logos/radio-rookies.svg"
              class="db ml-auto pa1"
              alt="Radio Rookies"
            />
          </div>
        </div>
        <div class=" grid-col-start-2 dn db-ns">
          <img
            alt=""
            src="images/grid/7.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class=" relative">
          <img
            alt=""
            src="images/grid/8.jpg"
            class="gridimg db mw-none w-100"
          />
          <img
            alt=""
            src="logos/18to29stroke.svg"
            class="absolute mw-none bottom-1 dn db-ns"
            style="width: 220%"
          />
        </div>
        <div class=" ">
          <img
            alt=""
            src="images/grid/9.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class="dn db-ns grid-col-5-7 z-3">
          <div class="flex h-100">
            <img alt="" src="logos/speaksup.svg" class="db h-100" />
          </div>
        </div>
        <div class=" grid-col-start-2">
          <img
            alt=""
            src="images/grid/10.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>

        <div class=" ">
          <img
            alt=""
            src="images/grid/11.jpg"
            class="gridimg db mw-none w-100"
          />
        </div>
        <div class=" ">
          <img
            alt=""
            src="images/grid/13.jpg"
            class="gridimg db mw-none w-100 db-ns"
          />
        </div>
        <div class=" db dn-ns">
          <img
            alt=""
            src="images/grid/14.jpg"
            class="gridimg db mw-none w-100 db-ns"
          />
        </div>
        <div class="measure dn db-ns">
          <p class="serif lh-title mt0">
            Young adults from around the country document what’s at stake for
            them in this election
          </p>
        </div>
      </div>
    </div>

    <div class="ml-auto ph4 db dn-ns">
      <p class="serif lh-title">
        Young adults from around the country document what’s at stake for them
        in this election
      </p>
    </div>
  </header>
</template>
<script>
import mixinMethods from './../utils/mixinMethods'
export default {
  mixins: [mixinMethods],
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.randomIcons(this.$refs.header)
    const randomImgs = Array(19)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5) // array possible images

    this.$el.querySelectorAll('.gridimg').forEach((img, i) => {
      const r = randomImgs.pop()
      setTimeout(() => (img.src = `images/grid/${r}.jpg`), 200 * (i + 1))
    })
  }
}
</script>

<style lang="scss"></style>
