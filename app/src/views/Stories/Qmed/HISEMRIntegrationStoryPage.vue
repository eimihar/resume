<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>EMR Integrations</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of integration with on-prem service and EMR (Electronic medical record) / CMS (Clinic Management System)</li>
      <li>Sometimes you had to integrate with more than 2 parties at a time</li>
      <li>Personally i didn't think it was really cost efficient, however i'd still go through it if it really calls for it.</li>
      <li>Some integrations takes a week, another take months</li>
      <li>Possibly one of the most challenging development and my least-liked development especially for SaaS based product</li>
    </ul>
  </StoryContentView>
</template>