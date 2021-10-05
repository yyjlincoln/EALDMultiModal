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
            ><p>
              Discussing how identity is expressed in Asian Australian Poetry.
            </p>
            <p class="italic text-2xl">
              This article is composed by Lincoln
            </p></span
          >
        </div>

        <pcontent>
          <quotes>
            <p>
              "There are a thousand hamlets in a thousand people's eyes, so as a
              thousand different tales from a thousand migrants."
            </p>
          </quotes>
          <subtitle>
            <span>
              Wait --
              <dynamic-highlight
                >What's identity in the first place?</dynamic-highlight
              >
            </span>
          </subtitle>
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

          <subtitle>
            <p>
              A trip to
              <dynamic-highlight>Bondi</dynamic-highlight>,
              <dynamic-highlight> Chinatown </dynamic-highlight> and
              <dynamic-highlight> China Culture Center</dynamic-highlight>.
            </p>
          </subtitle>

          <p>
            We took a trip to Bondi Junction, Chinatown and China Culture Center
            to explore the different aspects of identity presented in the Aisan
            Australian poetry.
          </p>
          <p>
            Throughout the trip, we discussed topics about
            <dynamic-highlight
              >whether identity can change and how its fragmentation due to
              conflicts in culture</dynamic-highlight
            >
            as well as
            <dynamic-highlight
              >racism, multiculturalism and us.</dynamic-highlight
            >
          </p>

          <p>
            The video is presented with quotes from
            <dynamic-highlight class="italic"
              >Some New Perspectives</dynamic-highlight
            >
            and
            <dynamic-highlight class="italic">The Double Man</dynamic-highlight
            >.
          </p>

          <iframe
            src="https://www.youtube.com/embed/kffi_zG2LeM"
            frameborder="0"
            height="500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="mt-10 rounded-md"
          ></iframe>
          <p>
            Having issues?
            <a
              href="https://www.youtube.com/watch?v=kffi_zG2LeM"
              class="underline"
              >Click here</a
            >
          </p>

          <p class="italic">
            Youtube-generated captions are available. The video is available in
            4K UHD.
          </p>
          <p class="italic">
            A 10% variable time range was applied to the above video.
          </p>

          <subtitle>
            <p>Transcript</p>
          </subtitle>
          <div>
            <!-- Dynamically rendered -->
            <div v-for="line in transcript" :key="line">
              <div class="mt-5">{{ line }}</div>
            </div>
          </div>
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
import axios from "axios"
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
    transcript: ["Loading..."]    
  }),
  mounted() {
    axios.get("https://yyjlincoln-public-assets.nyc3.cdn.digitaloceanspaces.com/eald_transcript.txt").then((res)=>{
      this.transcript = res.data.split('\n')
    }).catch(()=>{
      this.transcript = ['There is an error while loading for the transcript. Please check your internet connection or turn on the automatic caption for the YouTube video.']
    })
  },
  methods: {},
};
</script>

<style>
</style>
