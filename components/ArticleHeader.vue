<template>
  <header class="bg-washed-red pv4">
    <div class="flex mw8 center ph3 justify-between items-center">
      <div class="w-50 w-auto-ns">
        <nuxt-link title="Home" :to="{ path: '/' }">
          <img
            src="logos/logoarticle.svg"
            class="db"
            alt="Young America 18 to 29 Now Speaks UP"
          />
        </nuxt-link>
      </div>
      <nav class="serif pl2 pl4-ns">
        <div class="flex flex-column justify-between">
          <nuxt-link
            class="link blue b dim f6 f5-ns dib mr3 pv1"
            title="About"
            :to="{ path: '/', hash: 'about' }"
          >
            About this Project
          </nuxt-link>
          <nuxt-link
            class="link blue b dim f6 f5-ns dib mr3 pv1"
            title="Lates"
            :to="{ path: '/', hash: 'latest' }"
          >
            Stories
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/', hash: 'contributors' }"
            class="link blue b dim f6 f5-ns dib mr3 pv1"
            href="#contributors"
            title="Contributors"
          >
            Contributors
          </nuxt-link>
        </div>
      </nav>
      <div class="dn db-ns w-30 ml-auto">
        <p class="sans-serif">
          Young adults from around the country document what’s at stake for them
          in this election
        </p>
      </div>
    </div>
  </header>
</template>
<script>
export default {}
</script>

<style lang="scss"></style>
