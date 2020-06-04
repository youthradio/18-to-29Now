<template>
  <footer class="bg-washed-red sans-serif">
    <div class="mw8 center ph3">
      <div
        class="bb bw2"
        data-pym-src="https://apps.nypr.org/newsletter-signup/?partnerOrg=Other&brand=wnyc-studios-gray&headline=Sign%20up%20for%20our%20newsletter&legalText=By%20submitting%20your%20information%2C%20you're%20agreeing%20to%20receive%20communications%20from%20New%20York%20Public%20Radio%20in%20accordance%20with%20our%20Terms%20of%20Use%20(https%3A%2F%2Fwww.wnyc.org%2Fterms)%20and%20in%20accordance%20with%20the%20Privacy%20Policy%20of%20YR%20Media%20(https%3A%2F%2Fyr.media%2Fprivacy-policy).&mailchimpId=04ba4787d5&mailchimpName=Newsletter%3A%20Radio%20Rookies"
      ></div>
      <div
        class="flex flex-wrap flex-nowrap-ns items-center justify-between justify-start-ns pv3"
      >
        <div class="w-33 w-auto-ns">
          <img
            src="logos/yrlogo.svg"
            class="db ph3-ns mw3-ns"
            alt="YR Media Logo"
          />
        </div>
        <!-- <div class="dn db-ns br bw1 self-stretch mv3"></div> -->
        <div class="w-33 w-auto-ns">
          <img
            src="logos/wnyclogo.svg"
            class="db ph3-ns mw3-ns center"
            alt="WNYC Logo"
          />
        </div>
        <div class="w-33 w-auto-ns">
          <img
            src="logos/radio-rookies.svg"
            class="db ph3-ns mw3-ns ml-auto"
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
        <div class="mt3 mt0-ns pl3-ns w-100-ns center">
          <div class="fr-ns">
            <p class="di db-ns ph2 ph0-ns">Privacy Policy</p>
            <p class="di db-ns ph2 ph0-ns">Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  mounted() {
    this.loadPym()
  },
  methods: {
    loadPym() {
      const script = document.createElement('script')
      script.src = 'https://pym.nprapps.org/pym.v1.min.js'
      script.type = 'text/javascript'
      script.defer = true
      document.head.appendChild(script)
    }
  }
}
</script>

<style lang="scss"></style>
