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
      <div class="w-20-ns">
        <h5 class="dark-red lh-title pr3-ns normal mb0">WRITTEN BY</h5>
        <h3 class="dark-red lh-title pr3-ns mt1 mb1">
          {{ article.author }}
        </h3>
        <h3 class="dark-red lh-title pr3-ns mt1 mb1">
          {{ article.location }}
        </h3>
        <h5 class="dark-red lh-title pr3-ns normal ma0 mt2">
          {{ article.date }}
        </h5>
      </div>

      <p class="dn db-ns lh-copy order-2 w-20-ns pl3-ns">
        {{ article.summary }}
      </p>
      <div class="measure-wide w-60-ns ph3-ns lh-copy f5 f4-ns">
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
