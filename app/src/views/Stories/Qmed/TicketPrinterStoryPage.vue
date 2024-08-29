<template>
  <StoryTitleView>Ticket Printer</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of thermal based ticket printer to print the ticket for the queue system</li>
      <li>Laragon-php based to serve the printing</li>
      <li>Packaged through Inno Installer along with vcredist for ticket printer installation</li>
      <li>If I were to do it again, maybe i'd use node.js and packaged first through node.js pkg. Or maybe i'd still use php.</li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>