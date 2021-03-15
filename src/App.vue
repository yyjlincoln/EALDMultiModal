<template>
  <div id="app" class="h-fit w-fit overflow-hidden">
    <div class="min-h-screen">
      <transition :name="transition_name" mode="out-in">
        <router-view />
      </transition>
    </div>
    <nam-footer></nam-footer>
  </div>
</template>

<style>
.slide-left-leave-active {
  display: none;
}

.slide-left-enter-active {
  /* position: absolute; */
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

/* .slide-right-leave-active, */
.slide-left-enter {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-up-leave-active {
  /* display: none; */
  transform: translateY(-150px);
}

.slide-up-enter-active {
  /* position: absolute; */
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

/* .slide-right-leave-active, */
.slide-up-enter {
  opacity: 0;
  transform: translateY(150px);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<style>
.text-gradient {
  background: linear-gradient(90deg, #4e46e5, #9c2f9e);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.bg-gradient {
  background: linear-gradient(
    90deg,
    rgb(78, 70, 229, 0.8),
    rgb(156, 47, 158, 0.8)
  );
}

.app {
  font-family: "Helvetica";
}
</style>

<script>
import "boxicons";
import "tailwindcss/dist/tailwind.css";
import namFooter from "./components/nam-footer.vue";
export default {
  name: "App",
  data: () => ({
    transition_name: "slide-left",
    // transition_name: "fade",
    lastPath: "/",
  }),
  components: {
    namFooter,
  },
  watch: {
    // $route: function (before, after) {
    // },
  },
};
</script>
