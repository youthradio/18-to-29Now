<template>
  <div>
    <ArticleHeader />
    <main class="center mw8 pa3">
      <div class="center w-60-ns lh-copy f5 f4-ns">
        <h1 class="blue f3 sans-serif mt0 lh-title ttu ph3-ns">
          Contributor
        </h1>
        <BioContainer :author="authordata" />
        <div class="ph3-ns">
          <h4 class="dark-red ttu">WRITTEN BY {{ authordata.name | first }}</h4>
          <template v-for="article in articlesbyauthor">
            <article :key="article.slug" class="pb4">
              <div class="">
                <nuxt-link
                  :title="article.title"
                  :to="{ path: `/story/${article.slug}` }"
                  class="link db blue underline-hover"
                >
                  <h2 class="blue serif mv0 lh-title f4 f3-ns">
                    {{ article.title }}
                  </h2>
                </nuxt-link>
                <a
                  :title="`${article.author} Bio`"
                  class="pointer link db blue dim black"
                  @click.prevent="toggleBioModalSlug(article.authorslug)"
                >
                  <h3 class="dark-red lh-title mv1 f5 f4-ns">
                    {{ article.author }} |
                    <span class="ttc normal"> {{ article.format }}</span>
                  </h3>
                </a>
                <nuxt-link
                  :title="article.summary"
                  :to="{ path: `/story/${article.slug}` }"
                  class="link db dim black"
                >
                  <p class="f4-l lh-copy mv0">{{ article.summary }}</p>
                </nuxt-link>
              </div>
            </article>
          </template>
        </div>
        <div class="flex justify-center pv3">
          <nuxt-link
            title="Home"
            :to="{ path: '/' }"
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue"
          >
            Back to Main Page
          </nuxt-link>
        </div>
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
  filters: {
    first(val) {
      return val.split(' ')[0]
    }
  },
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
    },
    articlesbyauthor() {
      return this.articleData.stories.filter((e) => e.authorslug === this.slug)
    }
  }
}
</script>

<style lang="scss"></style>
