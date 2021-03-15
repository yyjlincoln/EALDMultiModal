<template>
  <div class="inline">
    <div class="text-highlight">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".text-highlight").forEach((highlight) => {
      ScrollTrigger.create({
        trigger: highlight,
        start: "-150px center",
        onEnter: () => {
          setTimeout(() => {
            highlight.classList.add("active");
          }, 100);
        },
      });
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap");

:root {
  --bg-color-hsl: 59, 3%, 94%;
  --bg-color: hsl(var(--bg-color-hsl));
  --bg-color-translucent: hsla(var(--bg-color-hsl), 0.95);
  --bg-color-highlight: hsl(60, 90%, 50%);
  --color-text: hsl(192, 14%, 20%);
  --color-text-highlight: hsl(192, 14%, 0%);
  --page-width: 80ch;
  --paragraph-font-size: min(max(1.2rem, 4vw), 1.4rem);
  --header-font-size: min(max(2rem, 8vw), 4rem);
  --space: 2rem;
  --padding: 8vmin;
  --duration: 2.5s;
  --ease: cubic-bezier(0.25, 1, 0.5, 1);
}

.text-highlight {
  all: unset;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: color calc(var(--duration) / 4) var(--ease),
    background-color calc(var(--duration) / 4) var(--ease),
    background-size var(--duration) var(--ease);
}

.active {
  color: var(--color-text-highlight);
  background-size: 100% 100%;
  --line-size: 0.5em;
  background-image: linear-gradient(
    transparent calc(100% - var(--line-size)),
    var(--bg-color-highlight) var(--line-size)
  );
}
</style>