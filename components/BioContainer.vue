<template>
  <aside class="pt3 measure-wide center">
    <h1 id="about" class="blue f3 serif mt0 lh-title ttu ph2">
      Contributor
    </h1>
    <div class="flex items-end">
      <div class="pr3">
        <img
          src="profile.jpg"
          class="db img-fluid"
          alt="Photo of a dimly lit room with a computer interface terminal."
        />
      </div>
      <div class="bb bw2 b--dark-red">
        <h1 class="blue f4 serif ma0 p0 lh-title">
          Kharon Benson
        </h1>
        <h4 class="normal lh-title ma0">
          New York, NY
        </h4>
      </div>
    </div>
    <p>
      Kharon Benson is a filmmaker from Brooklyn, New York. As part of the
      Osborne Association’s Youth Advisory Board, Kharon successfully lobbied
      state legislators to change laws affecting children with incarcerated
      parents. In 2019, his film about his relationship with his father, who is
      serving a 25-year sentence, was screened at the The Rhode Island Film
      Festival. For 18-29 Now, Kharon reports on recent changes to the criminal
      justice system and how reforms are playing out in people’s lives.
    </p>
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
