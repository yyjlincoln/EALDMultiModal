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
            Wait --
            <dynamic-highlight
              >What's identity in the first place?</dynamic-highlight
            >
          </span>
        </subtitle>

        <pcontent>
          <p class="italic">
            How do you define identity? Can you categorize it? What is the shape
            of identity? When you move to another culture, are you still
            connected with your original culture? Is there a clear boundary
            between the two cultures?
          </p>
          <p>
            Not many people can clearly answer those questions. There are a
            thousand Hamlets in a thousand people's eyes, and it’s the same
            situation for identity - different people have their own
            perspectives on identity.
            <dynamic-highlight
              >It does not have an intrinsic shape!</dynamic-highlight
            >
            Identity is more like water -
            <quotes
              >“shapeless, formless, if you put it into a cup, it becomes the
              cup; If you put it in a bottle, it becomes the bottle”, says Bruce
              Lee</quotes
            >
            <dynamic-highlight
              >It adapts with the environment and it blends with one’s
              experience</dynamic-highlight
            >
            -- It’s not that simple.
          </p>
          <p>
            So why do we even care about identity? Why should we bother? Well,
            knowing one’s identity can greatly help us understand that person,
            therefore help
            <dynamic-highlight>
              establish a connection with that person</dynamic-highlight
            >. This allows us to understand their human experiences,
            <dynamic-highlight
              >to take a sneak peek into their lives</dynamic-highlight
            >
            -- isn’t that interesting?
          </p>
          <p>
            So, how may we get started? Well, texts convey meanings --
            <span class="italic">obviously</span>
            -- so why don’t we start with some Asian Australian poetry?
          </p>

          <p>
            We’ll be exploring
            <dynamic-highlight class="italic"
              >Some New Perspectives</dynamic-highlight
            >
            and
            <dynamic-highlight class="italic">The Double Man</dynamic-highlight>
            in this article.
          </p>

          <subtitle> Identity: It's a puzzle </subtitle>
          <div class="flex flex-row justify-center h-full relative rounded-md my-10">
            <img
              src="https://images.unsplash.com/photo-1549616014-08d94f85e697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80"
              class="object-contain mx-auto max-w-2xl rounded-md w-fit"
            />
          </div>

          <!-- OLD -->

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
  </div>
</template>


<script>
import pcontent from "../components/pcontent.vue";
import DynamicHighlight from "../components/dynamic-highlight.vue";
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
