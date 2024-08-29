<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
import LinkOut from "@/views/LinkOut.vue";

export default defineComponent({
  components: {LinkOut, StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>Qmed Copilot</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Kickstarted major development of <LinkOut href="https://dr.qmed.asia">qmed copilot</LinkOut> around early 2023</li>
      <li>Handled early development of LLMs based DDx, careplan, chat with CPG (clinical practice guideline), gpt writes and so on</li>
      <li>Development of basic features like user auth and stuff</li>
      <li>API developments and integrations with qmed.asia and node.js based API service</li>
      <li>Initially the portal was for doctors for the use of teleconsultation implementation for qmed-go project</li>
    </ul>
  </StoryContentView>
</template>