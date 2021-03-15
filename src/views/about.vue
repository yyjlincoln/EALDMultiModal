<template>
  <div>
    <nam-page>
      <paragraph-content>
        <div class="flex flex-col">
          <span class="text-5xl font-bold">
            What's
            <dynamic-highlight>our</dynamic-highlight>
            identities?
          </span>
          <span class="text-3xl mt-2 border-b pb-5"
            >A bit of story from the author.</span
          >
        </div>

        <subtitle>Some words from us...</subtitle>
        <pcontent>
          <p>
            As you can clearly see, identity is complicated. Unlike color or
            pitch which are intrinsic properties of an object - identity is more
            like water which you can not really describe using words -
            <dynamic-highlight>
              it can hardly be articulated by language</dynamic-highlight
            >. It’s shapeless and formless, like water, quoting from Stan Lee,
            “If you put it in a cup, it becomes the cup. When you pour water in
            a bottle, it becomes the bottle”. In essence, your personal
            experiences shape your unique identity.
          </p>
          <subtitle>Who are we?</subtitle>
          <p>
            The two authors, Lincoln and Elijah came to Australia in 2017 and
            befriended each other from the outset.
            <dynamic-highlight>
              They are bent on socialising with the local community and friendly
              interaction between Australian and Chinese
              culture.</dynamic-highlight
            >
          </p>
          <p>[TODO] [IMAGE]</p>
          <p>
            It’s interesting to perceive their cultural identities, as a niche,
            international community in Australia. Let listen to how they think:
          </p>
          <subtitle> A tale from Lincoln Yan </subtitle>
          <p>[TODO] [IMAGE]</p>
          <p class="text-red-500">TODO: This should be changed.</p>
          <p>
            When I was young, the answer to the question was incredibly simple
            and funny - I’m a human being. To my young, naive self, my
            perception of my identity is simply - Who I am, literally. I am a
            person. I’m not a dog, neither a cat nor a tree, I exist as a person
            - and that was a satisfactory answer. But when I grew a bit, I
            started to realize that there is a concept called nationality - and
            naturally, my answer became “I’m Chinese”. But as I became more and
            more mature and gained some experience in the society, the answer to
            that question becomes more and more blurry - I’m Chinese, and I’m
            also a <dynamic-highlight> citizen of Shenzhen</dynamic-highlight>;
            I’m from the Chinese culture, yet I’ve gained a taste of the
            Australian culture from my education in Australia...
            <dynamic-highlight
              >Mountains of questions about identity just flush into my mind and
              eventually, I lose the answer to the simple yet complicated
              question - Who truly am I?</dynamic-highlight
            >
          </p>
          <p>
            When I was young, I had no experience in society at all, so my
            answer to identity was really simple; yet when I grew up,
            <dynamic-highlight>
              I gained some experience in society</dynamic-highlight
            >
            and therefore I identified myself as an individual of a collective
            society - <dynamic-highlight> being a Chinese</dynamic-highlight>.
            This is all driven by experiences - I would never identify myself as
            an overseas student living in Australia until I stepped on the land
            of Australia and started my first class here. Therefore, to figure
            out who I am, as well as who you are, let’s rewind back into our
            memories - from the very beginning to this very instant - where were
            you born? Where did you spend your childhood? What’s your
            educational background?
          </p>
          <subtitle>Let's hear from Elijah Liu</subtitle>
          <p>[TODO] [IMAGE]</p>
          <p>
            I perceive China as my hometown because I was born and raised up in
            Beijing, the capital city located in North China. As we all know,
            the cultural and linguistic diversity of China endows each region a
            dialect, and Beijing is not an exception. So, I am always getting
            recognised as a “Beijingnese” in the overseas Chinese community once
            a few words tumbled out from my mouth due to my conspicuous accents.
          </p>
          <p>
            I came to Australia for study in 2017 and had been
            <dynamic-highlight
              >staying with my host parent for 3 years</dynamic-highlight
            >. I
            <dynamic-highlight>
              embraced a substantial amount of exotic culture </dynamic-highlight
            >, for instance, drinking iced water rather than hot water, speaking
            funny Aussie slang (including cursing words taught by my host
            parents.). Furthermore, the experience of living overseas endowed me
            a deeper comprehension of the alternative way of thinking which I
            had never thought of previously. For me as in an
            <dynamic-highlight> intermediate phase </dynamic-highlight>
            between Western and Chinese culture, I would empathise with both
            perspectives as I see their completely different reaction to the
            same issue. I strongly believe that my cultural identity will be
            more complex as I grow up and getting more cosmopolitan because the
            perceptions can be influenced by your experiences and surrounding.
          </p>
          <subtitle> So... What about yours? </subtitle>
          <p>
            <dynamic-highlight>
              What's your cultural identity? Feel free to contact us via email
              or comment, I’m really looking forward to reading your
              remarks!</dynamic-highlight
            >
          </p>
        </pcontent>
      </paragraph-content>
    </nam-page>
  </div>
</template>

<script>
import DynamicHighlight from "../components/dynamic-highlight.vue";
import namPage from "../components/nam-page.vue";
import ParagraphContent from "../components/paragraph-content.vue";
import Pcontent from "../components/pcontent.vue";
import Subtitle from "../components/subtitle.vue";
export default {
  components: {
    namPage,
    ParagraphContent,
    DynamicHighlight,
    Subtitle,
    Pcontent,
  },
};
</script>

<style></style>