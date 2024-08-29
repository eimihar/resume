<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView duration="August 2023 - September 2023">Ads Management</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of ads management for what ads to show and for which clinics/hospitals queuescreens they're for</li>
      <li>Previously managed by third-parties back then since the inception of raspberry based queuescreen (2020). However it's consumed through the playlist API as served through qmed APIs.
        Therefore the migrations of ads doesn't requires update on raspberry end as it's already much future compatible.
      </li>
      <li>Developed features that allows operations to manage ad videos, and playlists and which clinics or list of clinics they're for</li>
      <li>Deployment through flag of which clinics to show to first so it doesn't break the previous implementation</li>
    </ul>
  </StoryContentView>
</template>