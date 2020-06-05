<template>
  <header class="min-vh-100 bg-washed-red flex flex-column justify-between">
    <nav class="serif pl2 pl4-ns ph3 pv2">
      <div class="dn db-ns">
        <nuxt-link
          class="link blue b dim f6 f5-ns dib mr3 pv1"
          title="About"
          :to="{ path: '/', hash: 'about' }"
        >
          About this Project
        </nuxt-link>
        <nuxt-link
          class="link blue b dim f6 f5-ns dib mr3 pv1"
          title="Lates"
          :to="{ path: '/', hash: 'latest' }"
        >
          Stories
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: 'contributors' }"
          class="link blue b dim f6 f5-ns dib mr3 pv1"
          href="#contributors"
          title="Contributors"
        >
          Contributors
        </nuxt-link>
      </div>
    </nav>
    <div class="layers relative flex justify-center">
      <div class="grid-container grid-container-ns">
        <div class="aspect-ratio aspect-ratio--1x1 grid-col-start-2">
          <img src="images/grid/Rectangle-1.jpg" class="db mw-none w-100" />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-2.jpg" class="db mw-none w-100" />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-3.jpg" class="db mw-none w-100" />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-4.jpg" class="db mw-none w-100" />
        </div>
        <div class="dn db-ns grid-col-1-4 z-2">
          <div class="flex justify-end items-end h-100">
            <img
              src="logos/ygamerica.svg"
              class="db h-100"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
        </div>
        <!-- <div class="dn db-ns"></div> -->
        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-5.jpg" class="db mw-none w-100" />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-6.jpg" class="db mw-none w-100" />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1 grid-col-start-2">
          <img src="images/grid/Rectangle-7.jpg" class="db mw-none w-100" />
        </div>
        <div class="relative">
          <img src="images/grid/Rectangle-8.jpg" class="db mw-none w-100" />
          <img
            src="logos/18to29stroke.svg"
            class="absolute mw-none bottom-1 z-1"
            style="width: 220%"
            alt="Photo of a dimly lit room with a computer interface terminal."
          />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-9.jpg" class="db mw-none w-100" />
        </div>
        <div class="dn db-ns grid-col-5-7">
          <div class="flex h-100">
            <img
              src="logos/speaksup.svg"
              class="db h-100"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
        </div>
        <div class="aspect-ratio aspect-ratio--1x1 grid-col-start-2">
          <img src="images/grid/Rectangle-10.jpg" class="db mw-none w-100" />
        </div>

        <div class="aspect-ratio aspect-ratio--1x1">
          <img src="images/grid/Rectangle-11.jpg" class="dbmw-none w-100" />
        </div>
        <div class="aspect-ratio aspect-ratio--1x1">
          <img
            src="images/grid/Rectangle-13.jpg"
            class="db mw-none w-100 db-ns"
          />
        </div>
      </div>
    </div>
    <div class="ml-auto ph3">
      <p class="serif">
        Young adults from around the country document what’s at stake for them
        in this election
      </p>
    </div>
  </header>
</template>
<script>
export default {}
</script>

<style lang="scss"></style>
