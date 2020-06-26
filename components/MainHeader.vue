<template>
  <header class="min-vh-100 bg-washed-red">
    <div
      ref="flourishes"
      class="absolute flex flex-column justify-around w-100 h-100 z-0 top-0 left-0"
    />
    <div class="absolute w-100 h-100 z-1">
      <nav class="serif pl2 dn db-ns pv2  f6 f4-ns bg-blue b">
        <div class="tc">
          <nuxt-link
            class="link dib mh4 pv1 underline-hover washed-red"
            title="About"
            :to="{ path: '/', hash: 'about' }"
          >
            About this Project
          </nuxt-link>
          <nuxt-link
            class="link dib mh4 pv1 underline-hover washed-red"
            title="Latest"
            :to="{ path: '/', hash: 'latest' }"
          >
            Stories
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/', hash: 'contributors' }"
            class="link dib mh4 pv1 underline-hover washed-red"
            title="Contributors"
          >
            Contributors
          </nuxt-link>
        </div>
      </nav>
      <div
        class="layers relative flex flex-row-ns flex-column justify-center ph3 ph0-ns mt0-ns mb3-ns "
      >
        <img
          alt=""
          src="logos/youngamerica.svg"
          class="db dn-ns w-50 mt3 nb4 ml3"
        />
        <div class="grid-container grid-container-ns relative">
          <div class="grid-col-start-2 dn db-ns ">
            <img
              alt=""
              src="images/grid/1.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="">
            <img
              alt=""
              src="images/grid/2.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="">
            <img
              alt=""
              src="images/grid/3.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="">
            <img
              alt=""
              src="images/grid/4.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="dn db-ns grid-col-1-4 ">
            <div class="flex justify-end items-end h-100 pl4">
              <img alt="" src="logos/ygamerica.svg" class="db h-100" />
            </div>
          </div>
          <!-- <div class="dn db-ns"></div> -->
          <div class="">
            <img
              alt=""
              src="images/grid/5.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="">
            <img
              alt=""
              src="images/grid/6.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="grid-col-start-1 dn db-ns ">
            <div class="">
              <img
                src="logos/yrlogo.svg"
                class="db ml-auto pa1 pr0"
                alt="YR Media Logo"
              />
              <img
                src="logos/wnyclogo.svg"
                class="db ml-auto pa1 pr0"
                alt="WNYC Logo"
              />
              <img
                src="logos/radio-rookies.svg"
                class="db ml-auto pa1 pr0"
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
          <div class="relative ">
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
          <div class="">
            <img
              alt=""
              src="images/grid/9.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="dn db-ns grid-col-5-7 ">
            <div class="flex h-100 pr5">
              <img alt="" src="logos/speaksup.svg" class="db h-100" />
            </div>
          </div>
          <div class="grid-col-start-2 ">
            <img
              alt=""
              src="images/grid/10.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>

          <div class="">
            <img
              alt=""
              src="images/grid/11.jpg"
              class="gridimg db mw-none w-100"
            />
          </div>
          <div class="">
            <img
              alt=""
              src="images/grid/13.jpg"
              class="gridimg db mw-none w-100 db-ns"
            />
          </div>
          <div class="db dn-ns ">
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
      <div class="db dn-ns mt3 ph3">
        <div
          class="flex w-80 center justify-around justify-start-ns items-baseline"
        >
          <div class="ph2 ">
            <img src="logos/yrlogo.svg" class="db h-100" alt="YR Media Logo" />
          </div>
          <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
          <div class="ph2 ">
            <img src="logos/wnyclogo.svg" class="db h-100" alt="WNYC Logo" />
          </div>
          <div class="ph2 ">
            <img
              src="logos/radio-rookies.svg"
              class="db h-100"
              alt="Radio Rookies"
            />
          </div>
        </div>
      </div>
      <div class="flex ml-auto ph4 db dn-ns ">
        <p class="serif lh-title b">
          Young adults from around the country document what’s at stake for them
          in this election
        </p>
      </div>
    </div>
  </header>
</template>
<script>
import mixinMethods from '~/utils/mixinMethods'
export default {
  mixins: [mixinMethods],
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.randomIcons(this.$refs.flourishes)
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
