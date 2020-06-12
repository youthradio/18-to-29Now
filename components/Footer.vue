<template>
  <footer class="bg-washed-red">
    <div class="mw8 center ph3">
      <div class="bb bw2 flex flex-column flex-row-ns items-center">
        <NewsletterSignup :message="content.newsletter.text" />
        <div class="blue ml4-ns" v-html="content.text"></div>
      </div>
      <div
        class="flex flex-wrap flex-nowrap-ns items-center justify-between justify-start-ns pv3"
      >
        <div class="w-33 w-auto-ns">
          <img
            src="logos/yrlogo.svg"
            class="db ph3-ns h3-ns"
            alt="YR Media Logo"
          />
        </div>
        <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
        <div class="w-33 w-auto-ns">
          <img
            src="logos/wnyclogo.svg"
            class="db ph3-ns h3-ns center"
            alt="WNYC Logo"
          />
        </div>
        <div class="w-33 w-auto-ns">
          <img
            src="logos/radio-rookies.svg"
            class="db ph3-ns h3-ns ml-auto"
            alt="Radio Rookies"
          />
        </div>
        <!-- <div class="dn db-ns ph3">
          <p class="mb1 mt0">WNYC Social</p>
          <div class="flex items-center justify-between">
            <img
              src="social/instagram.svg"
              class="db mw2 ph1"
              alt="Instagram Logo."
            />
            <img
              src="social/twitter.svg"
              class="db mw2 ph1"
              alt="Twitter Logo."
            />
            <img
              src="social/facebook.svg"
              class="db mw2 ph1"
              alt="Facebook Logo."
            />
            <img
              src="social/youtube.svg"
              class="db mw2 ph1"
              alt="Youtube Logo."
            />
          </div>
        </div> -->
        <div class="mt3 mt0-ns pl3-ns center mr-unset-ns">
          <p class="di db-ns ph2 ph0-ns">Privacy Policy</p>
          <p class="di db-ns ph2 ph0-ns">Terms of Use</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import NewsletterSignup from '~/components/NewsletterSignup.vue'

export default {
  components: {
    NewsletterSignup
  },
  props: {
    content: {
      type: Object,
      required: false,
      default: null
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss"></style>
