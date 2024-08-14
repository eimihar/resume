<template>
  <StoryTitleView>Vercel</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>
        First working with vercel around 2022-2023 when I need to deploy a frontend app for work stuff.
      </li>
      <li>
        Fell in love with it and the simplicity. Even this SPA web app is deployed on vercel.
      </li>
      <li>
        Without vercel, I'll need to setup nginx that points to the dist folder of the npm run build, and figure out how to deploy on git commit.
        Well, vercel took care of it along with the CI/CD. However, manual deployment for frontend stuff is still a good fallback.
      </li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>