<template>
  <div>
    <div
      class="h-screen w-screen flex-col flex justify-center items-center flex overflow-hidden"
    >
      <div
        class="h-screen mt-0 absolute left-0 top-0 overflow-hidden"
        style="z-index: -2"
        id="background_animate"
      >
        <div
          class="w-screen h-screen bg-black left-0 top-0 opacity-30 absolute overflow-hidden"
        ></div>
        <img
          class="object-cover w-screen h-screen overflow-hidden"
          src="https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />
      </div>
      <div
        id="title_animate"
        class="relative mx-auto text-center align-middle py-10"
      >
        <div class="overflow-hidden">
          <span
            class="relative text-6xl md:text-7xl lg:text-8xl block font-extrabold text-white overflow-hidden py-1"
            >What's your identity?</span
          >
        </div>
        <div class="overflow-hidden">
          <span
            class="mt-3 relative text-2xl md:text-3xl lg:text-4xl block text-white font-extrabold"
            >A comprehensive discussion on identity</span
          >
        </div>
      </div>

      <!-- Buttons -->
      <div
        id="buttons_animate"
        class="flex flex-col w-full max-w-sm sm:flex-row sm:w-auto sm:px-auto sm:max-w-lg"
      >
        <div class="rounded-md shadow">
          <a
            href="/explore"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-800 md:py-4 md:text-lg md:px-10"
            @click.prevent="getstarted_action"
          >
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
              v-if="getstarted"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Let's Explore!
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="/about"
            @click.prevent="$router.push('interview')"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Watch our interview
          </a>
        </div>
      </div>
      <!-- Bottom learn more -->
      <div class="absolute bottom-10">
        <span class="font-extrabold text-gray-500 relative">⬇️ Learn more</span>
      </div>
    </div>
    <div id="content" class="h-fit">
      <eald-contentblock title="Ambiguity.">
        <div class="flex flex-row justify-between w-full relative">
          <div class="pr-10">
            <p>It's hard to define identity.</p>
            <p class="mt-3">
              Identity is multi-layered, complicated, multifaceted and
              correlated. It does not have a definite shape, and it constantly
              evolves as its environment changes.
            </p>
            <p class="mt-3 italic">
              Just like water, identity is formless and shapless. "If you put
              water in a cup, it becomes the cup; It you put it in a bottle, it
              becomes the bottle"
            </p>
            <p class="mt-6">
              <a
                class="underline"
                role="button"
                @click="$router.push('/explore')"
                >Join our journey now</a
              >
              to explore the ambiguity nature of identity.
            </p>
          </div>
          <div class="flex flex-col justify-center h-full flex-shrink-0">
            <img
              class="rounded-md"
              src="@/assets/fragmented.jpg"
              alt="Image from David, livingmeanings.com"
            />
          </div>
        </div>
      </eald-contentblock>
      <eald-contentblock title="Fragility.">
        <p>Does water have a definite shape?</p>
        <p class="mt-3">Not really. At least Bruce Lee doesn't think so.</p>
      </eald-contentblock>
      <eald-contentblock title="There is no clear boundary.">
        <p>Identity is super complicated.</p>
      </eald-contentblock>
      <eald-contentblock title="It's all fragmented.">
        <p>Identity is super complicated.</p>
      </eald-contentblock>
    </div>
    <div class="h-fit py-20 px-20">
      <div
        class="flex flex-col w-full max-w-sm sm:flex-row sm:w-auto sm:px-auto sm:max-w-lg"
      >
        <div class="rounded-md shadow">
          <a
            href="/explore"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 md:py-4 md:text-lg md:px-10"
            @click.prevent="getstarted_action"
          >
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
              v-if="getstarted"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Let's explore together.
          </a>
        </div>
      </div>
    </div>
    <nam-footer></nam-footer>
  </div>
</template>
<style>
</style>


<script>
import EaldContentblock from "../components/eald-contentblock.vue";
import NamFooter from "../components/nam-footer.vue";
export default {
  data: () => ({
    getstarted: false,
    pwaloading: false,
  }),
  mounted() {},
  methods: {
    getstarted_action() {
      this.getstarted = true;
      setTimeout(() => {
        this.$router.push("/explore");
      }, 1000);
    },
  },
  components: {
    NamFooter,
    EaldContentblock,
  },
};
</script>