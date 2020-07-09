<template>
  <header class="bg-washed-red pv4">
    <div class="flex mw8 center ph3 justify-between items-center">
      <div class="w-80 w-auto-ns">
        <nuxt-link title="Home" :to="{ path: '/' }">
          <img
            src="logos/logoarticle.svg"
            class="db"
            alt="Young America 18 to 29 Now Speaks UP"
          />
        </nuxt-link>
      </div>
      <nav class="serif pl2 pl4-ns f7 f5-ns b">
        <div class="flex flex-column justify-between b">
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="Home"
            :to="{ path: '/' }"
          >
            Home
          </nuxt-link>
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="About"
            :to="{ path: '/', hash: 'about' }"
          >
            About this Project
          </nuxt-link>
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="Stories"
            :to="{ path: '/', hash: 'stories' }"
          >
            Stories
          </nuxt-link>
          <nuxt-link
            class="link b dib pv1 underline-hover blue"
            title="Contributors"
            :to="{ path: '/', hash: 'contributors' }"
          >
            Contributors
          </nuxt-link>
        </div>
      </nav>
      <div class="dn db-ns w-30 ml-auto serif tr">
        <p v-html="copy"></p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    copy: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
