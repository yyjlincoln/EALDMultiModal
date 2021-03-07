<template>
  <div>
    <frame>
      <router-view></router-view>
    </frame>
  </div>
</template>

<script>
import frame from "../components/frame.vue";
export default {
  components: { frame },
};
</script>

<style>
</style>