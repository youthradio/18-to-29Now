<template>
  <header
    ref="header"
    class="min-vh-100 bg-washed-red flex flex-column justify-around relative"
  >
    <nav class="serif pl2 pl4-ns ph3 dn db-ns center pv2 z-2 f6 f4-ns">
      <div class="">
        <nuxt-link
          class="link blue b dim  dib mr3 pv1"
          title="About"
          :to="{ path: '/', hash: 'about' }"
        >
          About this Project
        </nuxt-link>
        <nuxt-link
          class="link blue b dim dib mr3 pv1"
          title="Lates"
          :to="{ path: '/', hash: 'latest' }"
        >
          Stories
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: 'contributors' }"
          class="link blue b dim dib mr3 pv1"
          href="#contributors"
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
        src="logos/youngamerica.svg"
        class="db dn-ns z-3 w-50 mt3 nb4 ml3"
        alt="Photo of a dimly lit room with a computer interface terminal."
      />
      <div class="grid-container grid-container-ns">
        <div class="grid-col-start-2 dn db-ns">
          <img src="images/grid/Rectangle-1.jpg" class="db mw-none w-100" />
        </div>
        <div class="">
          <img src="images/grid/Rectangle-2.jpg" class="db mw-none w-100" />
        </div>
        <div class="">
          <img src="images/grid/Rectangle-3.jpg" class="db mw-none w-100" />
        </div>
        <div class="">
          <img src="images/grid/Rectangle-4.jpg" class="db mw-none w-100" />
        </div>
        <div class="dn db-ns grid-col-1-4 z-2">
          <div class="flex justify-end items-end h-100">
            <img
              src="logos/ygamerica.svg"
              class="db h-100"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
        </div>
        <!-- <div class="dn db-ns"></div> -->
        <div class="">
          <img src="images/grid/Rectangle-5.jpg" class="db mw-none w-100" />
        </div>
        <div class="">
          <img src="images/grid/Rectangle-6.jpg" class="db mw-none w-100" />
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
        <div class="grid-col-start-2 dn db-ns">
          <img src="images/grid/Rectangle-7.jpg" class="db mw-none w-100" />
        </div>
        <div class="relative">
          <img src="images/grid/Rectangle-8.jpg" class="db mw-none w-100" />
          <img
            src="logos/18to29stroke.svg"
            class="absolute mw-none bottom-1 dn db-ns"
            style="width: 220%"
            alt="Photo of a dimly lit room with a computer interface terminal."
          />
        </div>
        <div class="">
          <img src="images/grid/Rectangle-9.jpg" class="db mw-none w-100" />
        </div>
        <div class="dn db-ns grid-col-5-7 z-3">
          <div class="flex h-100">
            <img
              src="logos/speaksup.svg"
              class="db h-100"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
        </div>
        <div class="grid-col-start-2">
          <img src="images/grid/Rectangle-10.jpg" class="db mw-none w-100" />
        </div>

        <div class="">
          <img src="images/grid/Rectangle-11.jpg" class="dbmw-none w-100" />
        </div>
        <div class="">
          <img
            src="images/grid/Rectangle-13.jpg"
            class="db mw-none w-100 db-ns"
          />
        </div>
        <div class="db dn-ns">
          <img
            src="images/grid/Rectangle-1.jpg"
            class="db mw-none w-100 db-ns"
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
import icons from './../utils/icons'
export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
    // const vh = window.innerHeight
    const num = 5
    const scaleFact = window.innerWidth < 900 ? 0.5 : 1
    for (const dir of ['left', 'right']) {
      for (let i = 0; i < num; i++) {
        const ico = icons[~~(Math.random() * icons.length)]
        const svg = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'svg'
        )
        const randx = Math.random() * 10
        const randy = Math.random() * 2

        svg.setAttribute('width', ico.width * scaleFact)
        svg.setAttribute('height', ico.height * scaleFact)
        svg.setAttribute('viewBox', `0 0 ${ico.width} ${ico.height}`)
        svg.innerHTML = ico.path
        svg.style.cssText = `
        position:absolute;
        z-index:1;
        top:${randy + (i * 100) / num}%;
        ${dir}: ${randx}%;
      `
        this.$refs.header.appendChild(svg)
      }
    }
  }
}
</script>

<style lang="scss"></style>
