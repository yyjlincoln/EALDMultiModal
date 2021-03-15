<template>
  <div>
    <nam-page v-if="completed" :unbounded="true" class="max-w-7xl">
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
          <quotes>
            <span>"i possess two countries, </span>
            <span>or else</span>
            <span>i possess neither"</span>
            <span>-- The Double Man</span>
          </quotes>
          <p>
            Many people with dual identity have this feeling. Probably you do as
            well. We always naively feel like we can handle both identities at
            the same time, yet without knowing, our identity shifts as our
            surronding environment changes.
            <dynamic-highlight
              >Just like the Australian coastlines -- no matter how robust your
              structure is, it can never conquer the nature, and eventually
              erodes over time.</dynamic-highlight
            >
          </p>
          <img
            class="rounded-md my-5 object-fit"
            src="https://images.unsplash.com/photo-1563003150-c142eb86a66e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
          />
          <p>
            We feel like we are gradually being disconnected from the original
            culture and our motherland shifts to become "otherlands".
            <quotes>
              <span>"although there is han jian in chinese</span>
              <span>there isn't ao jian in english</span>
              <span>i write in chinese</span>
              <span>like australians do in english</span>
              <span>our motherlands have one thing in common,</span>
              <span
                ><dynamic-highlight>they've both lost M</dynamic-highlight
                >"</span
              >
            </quotes>
            Nobody wants to be disconnected from their original culture, neither
            does Ouyang.
            <dynamic-highlight
              >He urges to connect back to his original culture, to create a
              "connected disconnection" with both of his
              identities.</dynamic-highlight
            >
            This is achieved through his use of wordplay, "lost a M", which
            "Motherland" becomes "otherland", highlighting his disconnections
            with both cultures while resonating with the "I possess neither",
            depicting his eager to identify with both cultures.
          </p>
          <p>
            This <dynamic-highlight>ambiguity of identity</dynamic-highlight> is
            not only experienced by Yu; It's also evident in
            <span class="italic">Some New Perspectives</span> by Ee Tiang Hong.
            As an English-Malaysian born during the British colonial period, he
            was used to communicate in English rather than Malay.
          </p>
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
import Quotes from "../components/quotes.vue";
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
    pcontent,
    Quotes,
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
