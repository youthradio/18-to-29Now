<template>
  <div>
    <h1>VIDEO</h1>
    <vue-plyr>
      <div class="plyr__video-embed">
        <iframe
          src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        >
        </iframe>
      </div>
    </vue-plyr>
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
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '~@/node_modules/plyr/dist/plyr.css';
</style>
