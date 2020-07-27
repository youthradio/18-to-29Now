<template>
  <section class="mw8 center ph3 relative z-1 mt2">
    <template v-for="article in articlesPage">
      <article :key="article.slug" class="pb4">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-30-ns">
            <nuxt-link
              :title="article.title"
              :to="{ path: `story/${article.slug}` }"
              class="link db dim black"
            >
              <img
                :data-src="article.featureImageSmall"
                class="db lazyload"
                src="blankfeature.jpg"
                style="object-fit: cover;"
                alt="Photo of a dimly lit room with a computer interface terminal."
              />
            </nuxt-link>
          </div>
          <div class="w-70-ns pl3-ns">
            <nuxt-link
              :title="article.title"
              :to="{ path: `story/${article.slug}` }"
              class="link db blue underline-hover"
            >
              <h2 class="blue serif mv0 lh-title f4 f3-ns">
                {{ article.title }}
              </h2>
            </nuxt-link>
            <a
              :title="`${article.author} Bio`"
              class="pointer link db blue dim black"
              @click.prevent="$emit('toggleBioModalSlug', article.authorslug)"
            >
              <h3 class="dark-red lh-title mv1 f5 f4-ns">
                {{ article.author }} |
                <span class="ttc normal"> {{ article.format }}</span>
              </h3>
            </a>
            <nuxt-link
              :title="article.summary"
              :to="{ path: `story/${article.slug}` }"
              class="link db dim black"
            >
              <p class="f4-l lh-copy mv0">{{ article.summary }}</p>
            </nuxt-link>
          </div>
        </div>
      </article>
    </template>
  </section>
</template>
<script>
import mixinMethods from '~/utils/mixinMethods'

// numbers per page  is a constant
const NUM_PER_PAGE = 3
export default {
  mixins: [mixinMethods],
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    // return totatl pages integerer
    // you use it for the numbers of pages
    totalPages() {
      return Math.ceill(this.articles.length / NUM_PER_PAGE)
    },
    articlesPage() {
      return this.articles.slice(0, NUM_PER_PAGE)
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss"></style>
