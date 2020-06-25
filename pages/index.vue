<template>
  <div class="overflow-hidden">
    <MainHeader />
    <main id="header" class="flex flex-column flex-row-ns mw8 center ph3">
      <template v-for="(feature, i) in featured">
        <article
          :key="feature.slug"
          :class="[i % 2 ? 'pl2-ns' : 'pr2-ns', 'pt4 w-50-ns']"
        >
          <div class="flex flex-column">
            <div class="mb2">
              <nuxt-link
                :title="feature.title"
                :to="{ path: `story/${feature.slug}` }"
                class="link db dim black"
              >
                <img
                  :data-src="feature.featureImage"
                  src="blankfeature.jpg"
                  class="db lazyload"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                  style="object-fit: cover;"
                />
              </nuxt-link>
            </div>
            <div class="w-100 w-90-ns">
              <nuxt-link
                :title="feature.title"
                :to="{ path: `story/${feature.slug}` }"
                class="link db underline-hover blue"
              >
                <h2 class="blue f3 f2-ns serif ma0 lh-title">
                  {{ feature.title }}
                </h2>
              </nuxt-link>
              <a
                :title="`${feature.author} Bio`"
                class="pointer link db blue dim black"
                @click.prevent="toggleBioModalSlug(feature.authorslug)"
              >
                <h3 class="dark-red lh-title mv1 f5 f4-ns">
                  {{ feature.author }} |
                  <span class="ttc normal"> {{ feature.format }} </span>
                </h3>
              </a>
              <nuxt-link
                :title="feature.summary"
                :to="{ path: `story/${feature.slug}` }"
                class="link db dim black"
              >
                <p class="f4-l lh-copy mt0">
                  {{ feature.summary }}
                </p>
              </nuxt-link>
            </div>
          </div>
        </article>
      </template>
    </main>
    <section class="mw8 center ph3">
      <h3 id="latest" class="blue bb bw2 ttu">Latest</h3>
      <template v-for="article in latest">
        <article :key="article.slug" class="pb4">
          <div class="flex flex-column flex-row-ns">
            <div class="pr3-ns mb4 mb0-ns w-30-ns">
              <nuxt-link
                :title="article.title"
                :to="{ path: `story/${article.slug}` }"
                class="link db dim black"
              >
                <img
                  :data-src="article.featureImage"
                  class="db lazyload"
                  `
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
                @click.prevent="toggleBioModalSlug(article.authorslug)"
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
    <div ref="blockquote" class="bg-washed-red">
      <blockquote
        class="flex flex-column flex-row-ns items-end f3 f1-ns center mw8 ph3 z-1"
      >
        <p class="blue serif fw9 lh-copy lh-title-ns w-80-ns mv3 mv5-ns z-1">
          {{ randomQuote.quote }}
        </p>
        <cite class="blue sans f6 fs-normal w-20-ns mv3 mv5-ns">
          <a
            :title="`${randomQuote.author} Bio`"
            class="pointer link db blue dim black"
            @click.prevent="toggleBioModalSlug(randomQuote.authorslug)"
          >
            <div class="cite-symbol">
              {{ randomQuote.author }}
            </div>
            {{ randomQuote.location }}
          </a>
        </cite>
      </blockquote>
    </div>
    <section class="mw8 center">
      <h1 id="contributors" class="blue f3 mt0 lh-title ttu ph3">
        Contributors
      </h1>
      <div class="flex flex-wrap ph2">
        <div v-for="bio in biosData" :key="bio.authorslug" class="w-50 w-20-ns">
          <div class="ph2 ph2-ns">
            <a
              class="link pointer db dim black"
              :title="`${bio.name}\n${bio.location}`"
              @click.prevent="toggleBioModal(bio)"
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
              <h3 class="blue serif mt3 mb0 lh-title f5 f4-ns">
                {{ bio.name }}
              </h3>
              <h4 class="normal lh-title mt0 f6 f5-ns">
                {{ bio.location }}
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="mw8 center ph3 mt4 mt5-ns">
      <h2 id="about" class="blue mt0 lh-title ttu">
        About
      </h2>
      <div
        class="mw9 center two-col-ns lh-copy f5 f4-ns"
        v-html="articleData.main.about.text"
      ></div>
    </section>
    <Modal
      v-if="modelBioData"
      :authordata="modelBioData"
      @toggleModal="toggleBioModal"
    />
    <div class="flex justify-center pv3">
      <a
        href="#header"
        class="pointer f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue
        center"
        title="Back to Top"
      >
        Back to Top
      </a>
    </div>
    <Footer :content="articleData.main.footer" />
  </div>
</template>

<script>
import ArticleData from '../data/data.json'
import mixinMethods from './../utils/mixinMethods'
import MainHeader from '~/components/MainHeader.vue'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    MainHeader,
    Footer,
    Modal
  },
  mixins: [mixinMethods],
  asyncData(ctx) {
    return {
      articleData: ArticleData
    }
  },
  data() {
    return {
      modelBioData: null
    }
  },
  computed: {
    featured() {
      return this.articleData.stories
        .filter((e) => e.feature === 'true')
        .slice(0, 2)
    },
    latest() {
      return this.articleData.stories
    },
    randomQuote() {
      const l = this.articleData.main.quotes.length
      return this.articleData.main.quotes[~~(Math.random() * l)]
    },
    biosData() {
      // bios data sorted by last name
      const bios = this.articleData.bios
      return bios.sort((a, b) =>
        a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1
      )
    }
  },
  mounted() {
    if (this.$route.hash) {
      setTimeout(() => this.scrollFix(this.$route.hash), 1)
    }
    this.randomIcons(this.$refs.blockquote, 2)
  },
  methods: {
    scrollFix(hash) {
      location.href = hash
    },
    toggleBioModal(authordata) {
      if (authordata) {
        this.modelBioData = authordata
        return
      }
      this.modelBioData = null
    },
    toggleBioModalSlug(slug) {
      if (slug) {
        this.modelBioData = this.biosData.find((e) => e.authorslug === slug)
        return
      }
      this.modelBioData = null
    }
  }
}
</script>

<style></style>
