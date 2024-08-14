<template>
  <StoryTitleView>Queuescreens</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of screen that shows the tickets currently being called</li>
      <li>First learned about websocket implementation as ticket calling must be realtime. Previously It was long-polling.</li>
      <li>Learned about raspberry and it's OS, and implemented the general firmware for raspberry, which includes ads syncing, queuescreen-clinic set-up flow, and so on</li>
      <li>Integrated layouts as developed along with a designer, as well as making sure the development is scalable as merchants usually would want a different layouts</li>
      <li>Worked through multiple projects that requires different layouts like PPV projects (during covid) or hospitals</li>
      <li>Developed an internal management tool to manage each queuescreens, sending commands to it to refresh, reboot and so on.</li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>