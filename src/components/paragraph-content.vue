<template>
  <div
    id="pcontent"
    class="flex flex-col md:border-l-8 px-3 md:px-8"
    :style="'z-index: ' + z"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    z: {
      default: 1,
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap");

#pcontent {
  font-family: "Lora", serif;
}
</style>