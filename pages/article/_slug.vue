<template>
  <div>
    <ArticleHeader />
    <article class="pa3 pa5-ns">
      <h1 class="f2">Title Text with Image</h1>
      <img
        src="http://tachyons.io/img/space.jpg"
        class="w-100 f5 measure"
        alt="Photo of outer space"
      />
      <p class="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <p class="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </article>
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleHeader from '~/components/ArticleHeader.vue'

export default {
  components: { ArticleHeader },
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    return {
      slug
    }
  },
  data() {
    return {
      selectedComment: null
    }
  },
  computed: {},
  mounted() {},
  methods: {},
  head() {
    return {
      // title: this.markupdata.title
    }
  }
}
</script>

<style lang="scss"></style>
