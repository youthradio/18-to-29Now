<template>
  <div
    class="vh-100 w-100 flex flex-column justify-center-ns overflow-scroll fixed top-0 z-999 bg-oc-washed-red bg-blur"
  >
    <div class="relative bg-washed-red mw8 center pv5 ph4 mt-auto mb-auto">
      <a
        class="absolute right-2 pointer f7 f6-ns grow no-underline br-pill ph3 pv2 dib washed-red bg-blue
        center"
        @click.prevent="$emit('toggleModal')"
      >
        Close
      </a>
      <BioContainer :author="authordata" />
    </div>
  </div>
</template>

<script>
// import matchAll from 'string.prototype.matchall'
import BioContainer from '~/components/BioContainer.vue'

export default {
  components: { BioContainer },
  props: {
    authordata: { type: Object, required: true, default: null }
  }
}
</script>

<style lang="scss"></style>
