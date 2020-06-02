<template>
  <div class="debug-grid">
    <MainHeader />
    <main class="flex flex-column flex-row-ns mw8 center ph3">
      <article class="pt4 pr2-ns">
        <div class="flex flex-column">
          <div class="mb4 mb0-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              class="db img-fluid"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
          <div class="w-100 w-90-ns">
            <h1 class="blue f2 serif mt0 lh-title">
              In Conversation with Grecia Sánchez Blanco
            </h1>
            <h3 class="dark-red sans-serif lh-title">
              Antonio Villaseñor-Baca | <small>Print</small>
            </h3>
            <p class="sans-serif f4-l lh-copy">
              A conversation with Grecia Sánchez Blanco, a student who used to
              cross the U.S.-Mexico border daily for school.
            </p>
          </div>
        </div>
      </article>
      <article class="pt4 pl2-ns">
        <div class="flex flex-column">
          <div class="mb4 mb0-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              class="db img-fluid"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
          <div class="w-100">
            <h1 class="blue f2 serif mt0 lh-title">
              In Conversation with Grecia Sánchez Blanco
            </h1>
            <h3 class="dark-red sans-serif lh-title">
              Antonio Villaseñor-Baca | <small>Print</small>
            </h3>
            <p class="sans-serif f4-l lh-copy">
              A conversation with Grecia Sánchez Blanco, a student who used to
              cross the U.S.-Mexico border daily for school.
            </p>
          </div>
        </div>
      </article>
    </main>
    <section class="mw8 center ph3">
      <h3 class="blue serif bb bw2 ttu ph3 ph0-l">Latest</h3>
      <article class="pb4 ph3 ph0-l">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-100 w-30-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              class="db"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
          <div class="w-100 w-70-ns pl3-ns">
            <h1 class="blue f3 serif mt0 lh-title">
              In Conversation with Grecia Sánchez Blanco
            </h1>
            <h3 class="dark-red sans-serif lh-title">
              Antonio Villaseñor-Baca | <small>Print</small>
            </h3>
            <p class="sans-serif f4-l lh-copy">
              A conversation with Grecia Sánchez Blanco, a student who used to
              cross the U.S.-Mexico border daily for school.
            </p>
          </div>
        </div>
      </article>
      <article class="pv4 ph3 ph0-l">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-100 w-30-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              class="db img-fluid"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
          <div class="w-100 w-70-ns pl3-ns">
            <h1 class="blue f3 serif mt0 lh-title">
              In Conversation with Grecia Sánchez Blanco
            </h1>
            <h3 class="dark-red sans-serif lh-title">
              Antonio Villaseñor-Baca | <small>Print</small>
            </h3>
            <p class="sans-serif f4-l lh-copy">
              A conversation with Grecia Sánchez Blanco, a student who used to
              cross the U.S.-Mexico border daily for school.
            </p>
          </div>
        </div>
      </article>
      <article class="pv4 ph3 ph0-l">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-100 w-30-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              class="db img-fluid"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
          <div class="w-100 w-70-ns pl3-ns">
            <h1 class="blue f3 serif mt0 lh-title">
              In Conversation with Grecia Sánchez Blanco
            </h1>
            <h3 class="dark-red sans-serif lh-title">
              Antonio Villaseñor-Baca | <small>Print</small>
            </h3>
            <p class="sans-serif f4-l lh-copy">
              A conversation with Grecia Sánchez Blanco, a student who used to
              cross the U.S.-Mexico border daily for school.
            </p>
          </div>
        </div>
      </article>
    </section>
    <div class="bg-light-pink black-80">
      <logo />
      <h1 class="serif mt0 f-headline bb">
        18-to-29Now
      </h1>
      <h2 class="subtitle">
        My first-class Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MainHeader from '~/components/MainHeader.vue'

export default {
  components: {
    Logo,
    MainHeader
  }
}
</script>

<style></style>
