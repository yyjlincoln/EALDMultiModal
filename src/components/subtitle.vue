<template>
  <div class="subtitle mt-10 text-3xl font-bold flex flex-col bg-white">
    <slot></slot>
  </div>
</template>

<script>


export default {
  mounted() {


    // gsap.utils.toArray(".subtitle").forEach((highlight) => {
    //   ScrollTrigger.create({
    //     trigger: highlight,
    //     start: "-20px top top",
    //     end: "bottom",
    //     pin: ".subtitle"
    //   });
    // });


  },
};
</script>

<style>
</style>