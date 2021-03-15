<template>
  <div>
    <nam-page>
      <paragraph-content>
        <div class="flex flex-col">
          <span class="text-5xl font-bold"> Our interviews </span>
          <span class="text-3xl mt-2 border-b pb-5"
            >Beyond the paper and into the
            <dynamic-highlight>real world</dynamic-highlight></span
          >
        </div>
        <pcontent>
          <p>
            We decided to go beyond the paper and get out and interview people
            in the real world, to help us with a better understanding of
            identity and the themes encapsulated by the Asian Australian poems.
          </p>
          <subtitle>
            <span>Interviewing Ms Shirley Cai</span>
          </subtitle>
          <p>
            As a representative of
            <dynamic-highlight> Chinese-Australian </dynamic-highlight> migrant,
            Ms Cai explains her perspectives on identity.
          </p>
          <iframe
            src="https://www.youtube.com/embed/buUiubsPpyM"
            frameborder="0"
            height="500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="mt-10 rounded-md"
          ></iframe>
          <subtitle><p>Transcript</p></subtitle>
          <div>
            <!-- Dynamically rendered -->
            <div v-for="line in transcript.split('\n')" :key="line">
              <div class="mt-5">{{ line }}</div>
            </div>
          </div>
        </pcontent>
      </paragraph-content>
    </nam-page>
    <!-- <nam-page :global_centered="true"> -->
    <!-- <iframe
        class="rounded-md w-screen h-screen"
        src="https://www.youtube.com/embed/buUiubsPpyM?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> -->
    <!-- </nam-page> -->
  </div>
</template>

<script>
import DynamicHighlight from "../components/dynamic-highlight.vue";
import NamPage from "../components/nam-page.vue";
import ParagraphContent from "../components/paragraph-content.vue";
import Pcontent from "../components/pcontent.vue";
import Subtitle from "../components/subtitle.vue";
export default {
  components: {
    NamPage,
    ParagraphContent,
    DynamicHighlight,
    Pcontent,
    Subtitle,
  },
  data: () => ({
    transcript:
      "E: Hi everybody, this is Elijah from EliCon. One interesting thing that we noticed is that people’s identity can be changed according to the changes in the environment. Well, is that true? Let’s do a quick interview in our school!\n(Find Mrs. Cai, shooting with time lapse)\nE: Hi Mrs. Cai, as we know, you are the most typical Asian immigrant representative around us. Where are you from? And how long have you been in Australia?\nC:(answering)\nE: As a person who has lived in Hong Kong with a Chinese background, why did you choose to immigrate to Australia?\nC:(Answering)\nE: How do you perceive yourself as your culture identity?\nC: (Answering)\nE: Do you think one’s cultural identity can be changed?\nC: (Answering)\nE: How did your identity change since you started living in Australia?\nC: (Answering)\nE: Thanks for your cooperation",
  }),
};
</script>

<style
NamPage>
</style>