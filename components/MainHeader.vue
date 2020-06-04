<template>
  <header class="min-vh-100 bg-washed-red pv4 flex flex-column justify-between">
    <nav class="serif pl2 pl4-ns ph3">
      <div class="">
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
    <div class="mw8 center ph3">
      <img
        src="logos/logoindexstroke.svg"
        class="db"
        alt="Photo of a dimly lit room with a computer interface terminal."
      />
    </div>
    <div class="ml-auto ph3">
      <p class="serif">
        Young adults from around the country document what’s at stake for them
        in this election
      </p>
    </div>
  </header>
</template>
<script>
export default {}
</script>

<style lang="scss"></style>
