<template>
  <div>
    <div class="py-7 px-7 lg:pt-20 lg:px-20 rounded-md">
      <span
        class="relative text-4xl block text-gray-700 font-extrabold text-gradient py-1"
        id="tip-main"
        >{{ title }}</span
      >
      <span
        class="text-2xl block text-gray-700 font-bold mt-10 flex flex-col border-l-8 px-6 border-dashed"
        >
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({}),
  methods: {},
  props: {
    title: {
      required: true,
    },
  },
};
</script>

<style>
</style>
