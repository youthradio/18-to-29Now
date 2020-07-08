<template>
  <div>
    <ArticleHeader />
    <div class="relative">
      <div
        ref="flourishes"
        class="absolute flex flex-column justify-between z-0 top-0 left-0 right-0 bottom-0 pointer-events-none"
      />
      <main class="center mw8 ph3 relative z-1">
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

        <h3 id="latest" class="blue bb bw2 ttu">Read More</h3>

        <HorizontalContainer
          :articles="randomArticles()"
          @toggleBioModalSlug="(authorslug) => toggleBioModalSlug(authorslug)"
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
    </div>
    <Modal
      v-if="modelBioData"
      class="z-10"
      :authordata="modelBioData"
      :article-data="articleData"
      @toggleModal="toggleBioModal"
    />
    <Footer :content="articleData.main.footer" />
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleData from '~/data/data.json'
import POSTCONFIG from '~/post.config'
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'
import BioContainer from '~/components/BioContainer.vue'
import ArticleText from '~/components/ArticleText.vue'
import ArticleVideo from '~/components/ArticleVideo.vue'
import ArticleAudio from '~/components/ArticleAudio.vue'
import HorizontalContainer from '~/components/HorizontalContainer.vue'
import mixinMethods from '~/utils/mixinMethods'

export default {
  components: {
    ArticleHeader,
    Footer,
    BioContainer,
    ArticleText,
    ArticleVideo,
    ArticleAudio,
    HorizontalContainer
  },
  mixins: [mixinMethods],
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
  mounted() {
    if (window.innerWidth > 900) {
      this.randomIcons(this.$refs.flourishes, 6, true, true)
    }
  },
  methods: {
    randomArticles() {
      const stories = this.articleData.stories.filter(
        (e) => e.slug !== this.slug
      )
      const r = stories.sort(() => 0.5 - Math.random()).slice(0, 2)
      return r
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.summary
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.article.title
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: POSTCONFIG.url + this.$route.fullPath
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: POSTCONFIG.url + this.article.featureImage
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.summary
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.article.summary
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.summary
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: POSTCONFIG.url + this.article.featureImage
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.featureImage
        },
        {
          hid: 'itemprop:description',
          itemprop: 'description',
          content: this.article.summary
        },
        {
          hid: 'itemprop:image',
          itemprop: 'image',
          content: POSTCONFIG.url + this.article.featureImage
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
