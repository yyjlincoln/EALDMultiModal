<template>
  <div>
    <nam-page :global_centered="false">
      <nam-text title="Test"></nam-text>
    </nam-page>
    <nam-footer></nam-footer>
  </div>
</template>

<script>
import NamFooter from "../components/nam-footer.vue";
import namPage from "../components/nam-page.vue";
import namText from "../components/nam-text.vue";
export default {
  components: { namPage, NamFooter, namText },
  data: () => ({

  }),
  mounted(){
   
  }
};
</script>

<style>
</style>
