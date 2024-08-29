<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>Patient App</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Lead the development of an hybrid app/web app for patient portal</li>
      <li>Development or porting the original features of patient portal, like orders (appointment, history etc), ticket page, book flow and so on.</li>
      <li>Development of user profile, and basic qmed implementation of user</li>
      <li>Worked with a hybrid dedicated developer for further maintenance and development of patient portal (who also manage the builds and deployment for mobile)</li>
      <li>One of the first projects to have fully used SPA and decoupled from main development on qmed.asia</li>
    </ul>
  </StoryContentView>
</template>