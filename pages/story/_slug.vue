<template>
  <div>
    <ArticleHeader />
    <main class="center mw8 ph3">
      <component
        :is="articleFormatComponent"
        v-bind="{ article: article }"
        class="pt4"
      />

      <BioContainer
        class="pt4 w-60-ns center"
        mode="small"
        :author="authordata"
      />
    </main>

    <div class="flex justify-center pv3">
      <nuxt-link
        title="Home"
        :to="{ path: '/' }"
        class="f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue
        center"
      >
        Back to Main Page
      </nuxt-link>
    </div>
    <Footer :content="articleData.main.footer" />
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleData from '../../data/data.json'
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'
import BioContainer from '~/components/BioContainer.vue'
import ArticleText from '~/components/ArticleText.vue'
import ArticleVideo from '~/components/ArticleVideo.vue'
import ArticleAudio from '~/components/ArticleAudio.vue'

export default {
  components: {
    ArticleHeader,
    Footer,
    BioContainer,
    ArticleText,
    ArticleVideo,
    ArticleAudio
  },
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    return {
      slug,
      articleData: ArticleData
    }
  },
  data() {
    return {}
  },
  computed: {
    articleFormatComponent() {
      if (this.article.format === 'print') {
        return 'article-text'
      } else if (this.article.format === 'video') {
        return 'article-video'
      } else if (this.article.format === 'audio') {
        return 'article-audio'
      }
      return null
    },
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