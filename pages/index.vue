<template>
  <div>
    <MainHeader />
    <main class="flex flex-column flex-row-ns mw8 center ph3">
      <template v-for="feature in featured">
        <article :key="feature.slug" class="pt4 pr2-ns ph2 w-50-ns">
          <nuxt-link
            title=""
            :to="{ path: `article/${feature.slug}` }"
            class="link db dim black"
          >
            <div class="flex flex-column">
              <div class="mb4 mb0-ns">
                <img
                  :data-src="feature.featureImage"
                  src="blankfeature.jpg"
                  class="db lazyload"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                  style="object-fit: cover;"
                />
              </div>
              <div class="w-100 w-90-ns">
                <h1 class="blue f2 serif ma0 lh-title">
                  {{ feature.title }}
                </h1>
                <nuxt-link
                  title=""
                  :to="{ path: `contribuitor/${feature.authorslug}` }"
                  class="link db blue dim black"
                >
                  <h3 class="dark-red lh-title mv1">
                    {{ feature.author }} |
                    <small class="ttc"> {{ feature.format }} </small>
                  </h3>
                </nuxt-link>
                <p class="f4-l lh-copy">
                  {{ feature.summary }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </article>
      </template>
    </main>
    <section class="mw8 center ph3">
      <h3 id="latest" class="blue serif bb bw2 ttu ph2">Latest</h3>
      <template v-for="article in latest">
        <article :key="article.slug" class="pb4 ph2">
          <nuxt-link
            title=""
            :to="{ path: `article/${article.slug}` }"
            class="link db dim black"
          >
            <div class="flex flex-column flex-row-ns">
              <div class="pr3-ns mb4 mb0-ns w-30-ns">
                <img
                  :data-src="article.featureImage"
                  class="db lazyload"
                  src="blankfeature.jpg"
                  style="object-fit: cover;"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
              </div>
              <div class="w-70-ns pl3-ns">
                <h1 class="blue f3 serif mv0 lh-title">
                  {{ article.title }}
                </h1>
                <nuxt-link
                  title=""
                  :to="{ path: `contribuitor/${article.authorslug}` }"
                  class="link db blue dim black"
                >
                  <h3 class="dark-red lh-title mv1">
                    {{ article.author }} |
                    <small class="ttc"> {{ article.format }}</small>
                  </h3>
                </nuxt-link>
                <p class="f4-l lh-copy mv0">{{ article.summary }} |</p>
              </div>
            </div>
          </nuxt-link>
        </article>
      </template>
    </section>
    <div class="bg-washed-red">
      <blockquote
        class="flex flex-column flex-row-ns items-end f3 f1-ns center mw8 ph3"
      >
        <p class="blue serif fw9 lh-copy lh-title-ns w-80-ns mv3 mv5-ns">
          {{ randomQuote.quote }}
        </p>
        <cite class="blue sans f6 tracked fs-normal w-20-ns mv3 mv5-ns">
          <span class="cite-symbol">
            <nuxt-link
              title=""
              :to="{ path: `contribuitor/${randomQuote.authorslug}` }"
              class="link db blue dim black"
              >{{ randomQuote.author }}
            </nuxt-link></span
          >
          <br />{{ randomQuote.location }}</cite
        >
      </blockquote>
    </div>
    <section class="mw8 center ph3">
      <h1 id="contributors" class="blue f3 serif mt0 lh-title ttu ph2">
        Contributors
      </h1>
      <div class="mw9 center">
        <div class="cf">
          <div
            v-for="bio in articleData.bios"
            :key="bio.authorslug"
            class="fl w-50 w-25-ns ph2"
          >
            <nuxt-link
              title=""
              :to="{ path: `contribuitor/${bio.authorslug}` }"
              class="link db dim black"
            >
              <div class="bb bw2 pb3 b--dark-red">
                <div class="aspect-ratio aspect-ratio--1x1">
                  <img
                    :data-src="bio.image"
                    src="blank.jpg"
                    class="aspect-ratio--object db img-fluid lazyload"
                    alt="Photo of a dimly lit room with a computer interface terminal."
                  />
                </div>
              </div>
              <h1 class="blue f4 serif mt3 mb0 lh-title">
                {{ bio.name }}
              </h1>
              <h4 class="normal lh-title mt0">
                {{ bio.location }}
              </h4>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="mw8 center ph3 mt4 mt5-ns">
      <h1 id="about" class="blue f3 serif mt0 lh-title ttu ph2">
        About
      </h1>
      <div
        class="mw9 center two-col-ns ph2 lh-copy f5 f4-ns"
        v-html="articleData.main.about.text"
      ></div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ArticleData from '../data/data.json'
import MainHeader from '~/components/MainHeader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    MainHeader,
    Footer
  },
  asyncData(ctx) {
    return {
      articleData: ArticleData
    }
  },
  computed: {
    featured() {
      return this.articleData.stories.filter((e) => e.feature === 'true')
    },
    latest() {
      return this.articleData.stories
    },
    randomQuote() {
      const l = this.articleData.main.quotes.length
      return this.articleData.main.quotes[~~(Math.random() * l)]
    }
  },
  mounted() {
    if (this.$route.hash) {
      setTimeout(() => this.scrollFix(this.$route.hash), 1)
    }
  },
  methods: {
    scrollFix(hash) {
      location.href = hash
    }
  }
}
</script>

<style></style>
