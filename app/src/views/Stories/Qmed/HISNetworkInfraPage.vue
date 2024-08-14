<template>
  <StoryTitleView>HIS Network Infra</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Worked on setting up network related proxies as most HISs (Hospital Information System) are on-prem</li>
      <li>Sometimes setting up proxy through vpn, or proxies through ngrok where your service which act as a proxy to the internal on-prem as some network could be closed</li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>