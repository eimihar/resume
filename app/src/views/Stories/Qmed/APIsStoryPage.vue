<template>
  <StoryTitleView>APIs Development</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Had an APIs-first development approach to most development in qmed.asia</li>
      <li>APIs development can be really hard. Especially if it needs to scale against number of fronts and in this case are :
        <ul>
          <li>Dashboard</li>
          <li>Patient app</li>
          <li>Kiosks Development</li>
          <li>Copilot Project</li>
          <li>Third-parties</li>
          <li>Prototypes projects</li>
        </ul>
      </li>
      <li>
        You do not want your endpoints break often, neither you want your APIs to grow without control. Usually it always boils down to
        planning the APIs domains of implementation and structure, and at least being a step ahead of your company especially and knowing who's you gonna be developing for in the future.
      </li>
      <li>
        Development of standards on how APIs are developed, or the development of APIs standard themselves (REST) and how you'd
        need to adhere to these standard even if you work alone.
      </li>
      <li>
        Development of standardization of API responses, structure and schema. Used <LinkOut target="_blank" href="https://fractal.thephpleague.com/">phpleague fractal</LinkOut> to describe a consistent response that's truly fitting for REST.
      </li>
      <li>
        Development of general error handling
      </li>
      <li>
        Also lead the APIs development of other projects like doktoraku (2021), node.js/express.js based APIs for copilot
      </li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
import LinkOut from "@/views/LinkOut.vue";
</script>