<template>
  <div>
    <img
      :data-src="article.featureImage"
      src="blankfeature.jpg"
      class="db img-fluid lazyload"
      alt="Photo of a dimly lit room with a computer interface terminal."
    />
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

<style lang="scss"></style>
