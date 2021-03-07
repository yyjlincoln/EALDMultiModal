<template>
  <div>
    <nam-page :global_centered="true">
      <transition name="fade">
        <div>{{ content }}</div>
      </transition>
    </nam-page>
    <nam-footer></nam-footer>
  </div>
</template>

<script>
import NamFooter from "../components/nam-footer.vue";
import namPage from "../components/nam-page.vue";
export default {
  components: { namPage, NamFooter },
  data: () => ({
    content: "w",
  }),
  mounted(){
      setInterval(() => {
          this.content=this.content+"w"
      }, 1000);
  }
};
</script>

<style>
</style>