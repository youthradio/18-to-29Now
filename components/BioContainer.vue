<template>
  <aside>
    <div class="flex items-end flex-wrap ph3-ns">
      <div class="pr3">
        <img
          src="blank.jpg"
          :data-src="author.image"
          class="db lazyload mw4"
          :alt="`${author.name} Profile Picture`"
        />
      </div>
      <div class="bb bw2 b--dark-red">
        <h1 class="blue f5 f4-ns serif ma0 p0 lh-title">
          {{ author.name }}
        </h1>
        <h4 class="normal f6 5-ns lh-title ma0">
          {{ author.location }}
        </h4>
      </div>
    </div>
    <div class="f5 f4-ns measure-wide ph3-ns" v-html="author.text"></div>
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
      required: true,
      default: null
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss"></style>
