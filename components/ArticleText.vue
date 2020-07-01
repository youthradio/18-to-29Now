<template>
  <div>
    <div ref="container" />
    <div class="relative">
      <img
        :data-src="article.featureImage"
        src="blankfeature.jpg"
        class="db img-fluid lazyload"
        alt="Photo of a dimly lit room with a computer interface terminal."
      />
    </div>
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
      <div class="relative measure-wide w-60-ns lh-copy f5 f4-ns">
        <article v-html="article.text"></article>
      </div>
    </div>
  </div>
</template>

<script>
import mixinMethods from '~/utils/mixinMethods'

export default {
  mixins: [mixinMethods],

  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.randomImage(this.$refs.container)
  }
}
</script>

<style lang="scss"></style>
