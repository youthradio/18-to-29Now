<template>
  <section id="latest" ref="section" class="mw8 center ph3 relative z-1 mt2">
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
                width="700"
                height="394"
                :data-src="article.featureImageSmall"
                class="db lazyload img-fluid"
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
    <div>
      <ul class="paginator-container">
        <li v-for="page in totalPages" :key="page">
          <a
            :class="[
              currentPage == page ? 'button-active' : 'button-non-active',
              'button'
            ]"
            @click="currentPage = page"
          >
            {{ page }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import mixinMethods from '~/utils/mixinMethods'

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
      currentPage: 1, // current multiplier
      numPerPage: 3 // base of each page
    }
  },
  computed: {
    // return totatl pages integerer
    // you use it for the numbers of pages
    totalPages() {
      return Math.ceil(this.articles.length / this.numPerPage)
    },
    articlesPage() {
      const bottomFilter = (this.currentPage - 1) * this.numPerPage // starts selecting by 0, but then jumps to 3s after
      const topFilter = this.currentPage * this.numPerPage // also jumps by 3s
      return this.articles.slice(bottomFilter, topFilter)
    }
  },
  watch: {
    currentPage() {
      // when page change, jump to top
      this.$refs.section.scrollIntoView()
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.paginator-container {
  li {
    display: inline;
    padding: 0 5px 0 5px;
    line-height: 30px;
  }
  display: flex;
  justify-content: center;

  list-style-type: none;
  margin: 0;
  padding: 0;
}
.button {
  display: inline-block;

  border: none;
  background-color: transparent;
  border-radius: 50%;

  width: 32px;
  height: 32px;

  color: #204d8f;
  text-align: center;
  text-decoration: none;

  font-weight: bold;
}
.button-non-active {
  cursor: pointer;
}
.button-active {
  background-color: #ffd299;
  pointer-events: none;
}
</style>
