<template>
  <div>
    <nam-page v-if="completed" :unbounded="false">
      <paragraph-content>
        <div class="flex flex-col">
          <span class="text-5xl font-bold">
            Let's explore identity
            <dynamic-highlight>together.</dynamic-highlight>
          </span>
          <span class="text-3xl mt-2 border-b pb-5"
            >Discussing how identity is expressed in Asian Australian
            Poetry.</span
          >
        </div>

        <subtitle>
          <span>
            The <dynamic-highlight>Connected Disconnections</dynamic-highlight>,
          </span>
          <span>
            And the
            <dynamic-highlight>Disconnected Connections</dynamic-highlight>.
          </span>
        </subtitle>

        <pcontent>
          <p>""</p>
        </pcontent>


      </paragraph-content>
    </nam-page>
    <nam-page v-if="!completed" :global_centered="true">
      <span class="font-extrabold text-gradient pb-2 text-4xl">
        <vue-typed-js
          :strings="['But...', 'What is identity?', '']"
          :typespeed="200"
          :backSpeed="100"
          :backDelay="2000"
          @onComplete="completed = true"
          class="text-gradient"
        >
          <h1 class="typing"></h1>
        </vue-typed-js>
      </span>
      <nam-text :title="animatedText" id="identitytitle"> </nam-text>
    </nam-page>
    <nam-footer></nam-footer>
  </div>
</template>


<script>
import pcontent from "../components/pcontent.vue";
import DynamicHighlight from "../components/dynamic-highlight.vue";
import NamFooter from "../components/nam-footer.vue";
import namPage from "../components/nam-page.vue";
import namText from "../components/nam-text.vue";
import ParagraphContent from "../components/paragraph-content.vue";
import Subtitle from "../components/subtitle.vue";
// import ealdTag from "../components/eald-tag.vue";
// import { gsap } from "gsap";

export default {
  components: {
    namPage,
    NamFooter,
    namText,
    DynamicHighlight,
    ParagraphContent,
    Subtitle,
    pcontent
  },
  data: () => ({
    animatedText: "",
    completed: true,
  }),
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
