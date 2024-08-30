<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>Kiosk</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Developed the APIs for kiosk consumption, ranging from Auth to journey APIs</li>
      <li>Handled API revamp / unified APIs for kiosk integration, as qmed often does number of integration with third parties</li>
    </ul>
  </StoryContentView>
</template>