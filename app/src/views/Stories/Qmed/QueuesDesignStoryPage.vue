<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>Queues Design</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Improved, designed and maintained queue system for qmed.asia</li>
      <li>The realtime-ness for queue system and how the changes are propagated through number of fronts like queuescreens, ticket page and even notification</li>
      <li>Have lived through PPV and optimized for hundred of clinics that could serve like hundred of patienteach.</li>
    </ul>
  </StoryContentView>
</template>