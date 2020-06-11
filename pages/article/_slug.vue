<template>
  <div>
    <ArticleHeader />
    <div class="center mw8 pa3">
      <img
        data-src="images/feature.jpg"
        src="blank.jpg"
        class="db img-fluid lazyload"
        alt="Photo of a dimly lit room with a computer interface terminal."
      />
    </div>
    <main class="center mw8 ph3">
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
          <BioContainer mode="small" :author="authordata" />
        </div>
      </div>
      <div class="flex justify-center pv3">
        <nuxt-link
          title="Home"
          :to="{ path: '/' }"
          class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue
        center"
        >
          Back to Main Page
        </nuxt-link>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleData from '../../data/data.json'
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'
import BioContainer from '~/components/BioContainer.vue'

export default {
  components: { ArticleHeader, Footer, BioContainer },
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    return {
      slug,
      articleData: ArticleData
    }
  },
  data() {
    return {
      selectedComment: null
    }
  },
  computed: {
    article() {
      return this.articleData.stories.find((e) => e.slug === this.slug)
    },
    authordata() {
      return this.articleData.bios.find(
        (e) => e.authorslug === this.article.authorslug
      )
    }
  },
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
