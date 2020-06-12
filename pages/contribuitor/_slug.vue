<template>
  <div>
    <ArticleHeader />
    <main class="center mw8 pa3">
      <h1 class="blue f3 serif mt0 lh-title ttu ph2">
        Contributor
      </h1>
      <BioContainer :author="authordata" />
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
    <Footer :content="articleData.main.footer" />
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
  computed: {
    authordata() {
      return this.articleData.bios.find((e) => e.authorslug === this.slug)
    }
  }
}
</script>

<style lang="scss"></style>
