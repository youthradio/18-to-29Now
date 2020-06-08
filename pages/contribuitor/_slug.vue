<template>
  <div>
    <ArticleHeader />
    <main class="center mw8 ph3">
      <h1 class="serif blue f3 f2-ns lh-title tc-ns mb0">
        In Conversation with Grecia Sánchez Blanco
      </h1>
      <h3 class="dark-red sans-serif lh-title mt1">
        Antonio Villaseñor-Baca | <small class="normal">El Paso, TX</small>
      </h3>
      <p class="dn db-ns sans-serif f4 lh-copy">
        A conversation with Grecia Sánchez Blanco, a student who used to cross
        the U.S.-Mexico border daily for school.
      </p>
      <article class="sans-serif measure-wide lh-copy center">
        <p>
          Green juice semiotics church-key direct trade forage palo santo. Tacos
          pour-over tbh la croix, pop-up trust fund bushwick cred XOXO brooklyn.
          Butcher migas neutra, everyday carry yuccie coloring book semiotics
          glossier flannel fam truffaut yr. Beard kale chips meditation, 8-bit
          waistcoat mixtape ramps. DIY man braid pug PBR&amp;B narwhal scenester
          lomo jean shorts intelligentsia pabst flannel. Hell of fashion axe
          fanny pack ennui vinyl, austin ramps four dollar toast authentic
          unicorn taxidermy prism four loko salvia pop-up. Meditation chia
          organic, godard hot chicken typewriter before they sold out narwhal
          kickstarter brooklyn vegan hoodie keytar man braid.
        </p>

        <p>
          Flannel actually gastropub umami, pour-over lyft palo santo trust fund
          venmo. Sustainable tacos chia mixtape chartreuse beard tousled selfies
          shoreditch aesthetic ethical franzen. Celiac helvetica pitchfork
          occupy photo booth whatever distillery live-edge. Man braid cloud
          bread direct trade meggings, typewriter yr brunch kale chips. Af
          whatever viral portland, waistcoat poutine green juice glossier
          coloring book. Lyft farm-to-table skateboard air plant tote bag
          selvage raclette enamel pin ethical stumptown mumblecore tilde
          cold-pressed street art organic.
        </p>

        <p>
          Keytar organic chia offal ennuvi. Pour-over freegan YOLO, shaman
          skateboard godard pinterest banjo put a bird on it af +1 retro poke.
          Live-edge master cleanse tofu organic. Venmo artisan selfies tilde.
        </p>

        <p>
          Sustainable crucifix seitan direct trade DIY keffiyeh before they sold
          out plaid fixie flexitarian synth +1. Chia health goth franzen squid,
          wolf raclette roof party microdosing iceland craft beer kickstarter
          hoodie gluten-free chartreuse. Af yuccie live-edge, ethical health
          goth leggings blog air plant artisan forage jean shorts. Helvetica
          everyday carry kogi pinterest banjo, gluten-free ennui cray hexagon.
          Waistcoat chartreuse master cleanse slow-carb. Marfa deep v direct
          trade, vegan semiotics godard chambray ramps vape hammock asymmetrical
          venmo dreamcatcher pabst. Vape palo santo photo booth chillwave
          intelligentsia, ugh crucifix.
        </p>

        <p>
          I&#39;m baby chia plaid asymmetrical hot chicken hoodie 3 wolf moon
          keytar hell of pickled. Health goth skateboard you probably
          haven&#39;t heard of them, DIY single-origin coffee blog thundercats
          small batch waistcoat green juice hexagon ramps. Vexillologist poutine
          waistcoat keytar 3 wolf moon, semiotics hella. Typewriter four loko
          you probably haven&#39;t heard of them shabby chic paleo live-edge.
          Coloring book woke four dollar toast sartorial austin.
        </p>

        <p>
          Sustainable crucifix seitan direct trade DIY keffiyeh before they sold
          out plaid fixie flexitarian synth +1. Chia health goth franzen squid,
          wolf raclette roof party microdosing iceland craft beer kickstarter
          hoodie gluten-free chartreuse. Af yuccie live-edge, ethical health
          goth leggings blog air plant artisan forage jean shorts. Helvetica
          everyday carry kogi pinterest banjo, gluten-free ennui cray hexagon.
          Waistcoat chartreuse master cleanse slow-carb. Marfa deep v direct
          trade, vegan semiotics godard chambray ramps vape hammock asymmetrical
          venmo dreamcatcher pabst. Vape palo santo photo booth chillwave
          intelligentsia, ugh crucifix.
        </p>

        <p>
          I&#39;m baby chia plaid asymmetrical hot chicken hoodie 3 wolf moon
          keytar hell of pickled. Health goth skateboard you probably
          haven&#39;t heard of them, DIY single-origin coffee blog thundercats
          small batch waistcoat green juice hexagon ramps. Vexillologist poutine
          waistcoat keytar 3 wolf moon, semiotics hella. Typewriter four loko
          you probably haven&#39;t heard of them shabby chic paleo live-edge.
          Coloring book woke four dollar toast sartorial austin.
        </p>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import ArticleHeader from '~/components/ArticleHeader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { ArticleHeader, Footer },
  async asyncData(ctx) {
    const slug = await ctx.params.slug
    return {
      slug
    }
  },
  data() {
    return {
      selectedComment: null
    }
  },
  computed: {},
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
