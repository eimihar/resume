<template>
  <StoryTitleView>Teleconsultation</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of teleconsultation module of qmed dashboard, and qmed go</li>
      <li>Developed the understanding of what it usually needs for a teleconsultation to work, the components around it and how to design the session</li>
      <li>Development of integrations between jitsi provider like <LinkOut href="https://jaas.8x8.vc/#/">8x8 Jaas</LinkOut> through their own webhook events (hooking into session events), or just against simple <LinkOut href="https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-events/">jitsi events</LinkOut> like when user is joined etc.
        Personally, I'd preferred the latter, as it's more flexible and less dependent on the provider.
      </li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryContentView from "@/views/Stories/StoryContentView.vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import LinkOut from "@/views/LinkOut.vue";
</script>