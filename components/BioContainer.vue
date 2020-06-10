<template>
  <aside class="pt3 measure-wide center">
    <h1 id="about" class="blue f3 serif mt0 lh-title ttu ph2">
      Contributor
    </h1>
    <div class="flex items-end">
      <div class="pr3">
        <img
          src="blank.jpg"
          :data-src="author.image"
          class="lazyload mw5"
          :alt="`${author.name} Profile Picture`"
        />
      </div>
      <div class="bb bw2 b--dark-red">
        <h1 class="blue f4 serif ma0 p0 lh-title">
          {{ author.name }}
        </h1>
        <h4 class="normal lh-title ma0">
          {{ author.location }}
        </h4>
      </div>
    </div>
    <div v-html="author.text"></div>
  </aside>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: ''
    },
    author: {
      type: Object,
      required: false,
      default: null
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss"></style>
