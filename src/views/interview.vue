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
            <span>A note to assessment markers</span>
          </subtitle>
          <p>
            The following video
            <dynamic-highlight>
              should not be directly assessed
            </dynamic-highlight>
            as a part of the video modal due to its length (so it does not count
            towards the time limit). It's provided for a sense of completeness.
            This should also be assessible as a part of the website modal.
          </p>
          <p>
            We still do recommend you to watch this part even though it may not
            be directly assessed.
          </p>
          <p>
            Due to the time arrangements, the interview was conducted by Elijah
            alone. Both Elijah and Lincoln had contributed to the interviewing
            process.
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
            src="https://www.youtube.com/embed/E7ltdNN6PKs"
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
      "Transcript is not available for this video due to its length. Please turn on automatic captions in YouTube's settings.",
  }),
};
</script>

<style
NamPage>
</style>