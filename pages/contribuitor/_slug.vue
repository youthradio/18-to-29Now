<template>
  <div>
    <ArticleHeader />
    <main class="center mw8 pa3">
      <BioContainer />
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
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'
import BioContainer from '~/components/BioContainer.vue'

export default {
  components: { ArticleHeader, Footer, BioContainer },
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    return {
      slug
    }
  }
}
</script>

<style lang="scss"></style>
