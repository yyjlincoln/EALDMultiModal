<template>
  <div>
    <div class="flex flex-col">
      <span class="font-extrabold text-gradient pb-2" :class="title_config">{{
        title
      }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    title: {
      default: "",
    },
    title_config: {
      default: "text-4xl",
    },
  },
};
</script>

<style>
</style>
