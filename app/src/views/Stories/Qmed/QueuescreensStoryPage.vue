<template>
  <StoryTitleView>Queuescreens</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of screen that shows the tickets currently being called</li>
      <li>First learned about websocket implementation as ticket calling must be realtime. Previously It was long-polling.</li>
      <li>Learned about raspberry and it's OS, and implemented the general firmware for raspberry, which includes stuff like :
        <ul>
          <li>Queuescreen-clinic set-up flow</li>
          <li>Ads syncing</li>
          <li>Fail handling like</li>
        </ul>
      </li>
      <li>Integrated layouts as developed along with a designer, as well as making sure the development is scalable as merchants usually would want a different layouts</li>
      <li>Worked through multiple projects that requires different layouts like PPV projects (during covid) or hospitals</li>
      <li>Development of screens management for each clinic through dashboard</li>
      <li>Developed an internal management tool to access each queuescreens, sending refresh command, reboot and so on.</li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>