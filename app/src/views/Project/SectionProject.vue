<script>
import LinkOut from "@/views/LinkOut.vue";

export default {
  components: {LinkOut},
  props: ['title', 'about', 'link', 'body', 'tools', 'time']
}
</script>
<template>
  <div class="section-project">
    <div class="project-header">
      <div class="project-title columns">
        <div class="column">
          <LinkOut v-if="link" :href="link" target="_blank">{{ title }}</LinkOut>
          <template v-else>
            {{ title }}
          </template>
          <span v-if="time" style="float: right; font-size: 0.8em; font-weight: normal; opacity: 0.5;">{{ time }}</span>
        </div>
<!--        <div class="column" style="text-align: right; font-size: 0.8em; font-weight: normal; opacity: 0.5;" v-if="time">-->
<!--          {{ time }}-->
<!--        </div>-->
      </div>
    </div>
    <div class="project-body">
      <slot>{{ body }}</slot>
      <div v-if="tools" style="opacity: 0.6;">{{ tools }}</div>
    </div>
  </div>
</template>
<style lang="scss">
.section-project {
  margin-bottom: 15px;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 15px;
  .project-title {
    font-weight: 500;
    font-size: 1.3em;
  }
}
</style>