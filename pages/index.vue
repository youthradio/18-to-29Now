<template>
  <div class="relative">
    <MainHeader :copy="articleData.main.header.copy" class="relative" />
    <div class="relative">
      <div
        ref="flourishes"
        class="absolute flex flex-column justify-around z-0 top-0 left-0 right-0 bottom-0 pointer-events-none"
      />
      <h1 id="stories" class="mw8 f3 lh-title center ph3 blue ttu mt4">
        Stories
      </h1>
      <HorizontalContainer
        :articles="featured"
        class="ph3 relative z-1"
        @toggleBioModalSlug="(authorslug) => toggleBioModalSlug(authorslug)"
      />
      <section class="mw8 center ph3 relative z-1 mt2">
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
                    :data-src="article.featureImageSmall"
                    class="db lazyload"
                    src="blankfeature.jpg"
                    loading="lazy"
                    style="object-fit: cover"
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
                  <h2
                    class="blue serif mv0 lh-title f4 f3-ns"
                    v-html="article.title"
                  ></h2>
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
      <div class="bg-washed-red relative z--1">
        <blockquote
          class="flex flex-column flex-row-ns items-end f3 f2-ns center mw8 ph3"
        >
          <p class="blue serif fw9 lh-copy lh-title-ns w-80-ns mv3 mv5-ns">
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
      <section class="mw8 center relative z-1 pt4">
        <h1 id="contributors" class="blue f3 lh-title ttu ph3 relative">
          Contributors
        </h1>
        <div ref="bios" class="flex flex-wrap ph2 relative">
          <template v-for="bio in biosData">
            <div :key="bio.authorslug" class="w-50 w-20-ns relative">
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
                        loading="lazy"
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
          </template>
        </div>
      </section>
      <section class="mw8 center ph3 mt4 mt5-ns relative z-1">
        <h2 id="about" class="blue mt0 lh-title ttu">About</h2>
        <div
          class="mw9 center two-col-ns lh-copy f5 f4-ns"
          v-html="articleData.main.about.text"
        ></div>
        <div
          class="mw9 center lh-copy f7 i"
          v-html="articleData.main.about.credits"
        ></div>
      </section>
      <Modal
        v-if="modelBioData"
        class="z-10"
        :authordata="modelBioData"
        :article-data="articleData"
        @toggleModal="toggleBioModal"
      />
      <div class="flex justify-center pv4">
        <a
          href="#"
          class="pointer f6 grow no-underline br-pill ph3 pv2 mb2 dib washed-red bg-blue center"
          title="Back to Top"
        >
          Back to Top
        </a>
      </div>
    </div>
    <Footer :content="articleData.main.footer" />
  </div>
</template>

<script>
import ArticleData from '~/data/data.json'
import mixinMethods from '~/utils/mixinMethods'
import MainHeader from '~/components/MainHeader.vue'
import Footer from '~/components/Footer.vue'
import HorizontalContainer from '~/components/HorizontalContainer.vue'

export default {
  components: {
    MainHeader,
    Footer,
    HorizontalContainer,
  },
  mixins: [mixinMethods],
  asyncData(ctx) {
    const l = ArticleData.main.quotes.length

    const latest = ArticleData.main.latest.map((l) =>
      ArticleData.stories.find((e) => e.slug === l.slug)
    )
    const randomQuote = ArticleData.main.quotes[~~(Math.random() * l)]
    const featured = ArticleData.main.featured.map((l) =>
      ArticleData.stories.find((e) => e.slug === l.slug)
    )
    // bios data sorted by last name
    const bios = ArticleData.bios.filter((e) => !e.hide)
    const biosData = bios.sort((a, b) =>
      a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1
    )

    return {
      featured,
      randomQuote,
      latest,
      biosData,
      articleData: ArticleData,
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    if (window.innerWidth > 1300) {
      this.randomIcons(this.$refs.flourishes, 8, true, true)
    }

    this.$nextTick(() => {
      if (location.hash) {
        document.querySelector(location.hash).scrollIntoView()
      }
    })

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (location.hash && entry) {
          setTimeout(() => {
            document.querySelector(location.hash).scrollIntoView()
          }, 400)
        }
      }
    })

    resizeObserver.observe(this.$refs.bios)

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            history.pushState(
              {},
              null,
              '#' + encodeURIComponent(entry.target.id)
            )
          }
        })
      },
      { threshold: 1.0 }
    )
    this.$el
      .querySelectorAll('h1[id],h2[id]')
      .forEach((e) => observer.observe(e))
  },
}
</script>

<style lang="scss" scoped>
[id]::before {
  content: '';
  display: block;
  height: 50px;
  margin-top: -50px;
  visibility: hidden;
}
</style>
