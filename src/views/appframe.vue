<template>
  <div>
    <div class="flex flex-col w-full">
      <div class="fixed bg-opacity-80 border-b bl w-screen bg-white z-10">
        <div class="h-16 w-full flex flex-row justify-center">
          <div class="flex flex-col justify-center">
            <img
              src="@/assets/logo.png"
              role="button"
              @click="$router.push('/')"
              class="object-contain h-10"
            />
          </div>
          <div class="h-full flex flex-col justify-center">
            <div class="mx-3 flex hidden sm:block">
              <router-link
                to="/"
                class="px-3 border-r"
                :class="$route.meta.nav == 1 ? 'font-bold' : ''"
                >Home</router-link
              >
              <router-link
                to="/explore"
                class="px-3 border-r"
                :class="$route.meta.nav == 2 ? 'font-bold' : ''"
                >Explore</router-link
              >
              <router-link
                to="/interview"
                class="px-3 border-r"
                :class="$route.meta.nav == 3 ? 'font-bold' : ''"
                >Interview</router-link
              >
              <router-link
                to="/motivation"
                class="px-3"
                :class="$route.meta.nav == 4 ? 'font-bold' : ''"
                >Motivation</router-link
              >
              <router-link
                to="/about"
                class="px-3"
                :class="$route.meta.nav == 5 ? 'font-bold' : ''"
                >About us</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <transition name="slide-left" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    if (this.$route.path == "/appframe") {
      this.$router.replace("/");
    }
  },
};
</script>

<style>
.bl {
  backdrop-filter: saturate(50%) blur(5px);
}
</style>