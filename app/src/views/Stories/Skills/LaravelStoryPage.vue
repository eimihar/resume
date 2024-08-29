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
  <StoryTitleView>Laravel</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Have worked with <LinkOut href="https://laravel.com">Laravel</LinkOut> since version 5.5 or 2019 (when I started working with qmed.asia)</li>
      <li>Most of the time only as a backend for API services for SPA projects</li>
      <li>Have heard of livewire or inertia, however would give chance to this paradigm if it calls for it</li>
      <li>Familiar with how Laravel construct itself, from App providers to response of it's request/response cycle due
        to how I made <LinkOut href="https://exedra.rosengate.com">exedra</LinkOut> back then</li>
      <li>Have integrated Laravel with exedra through <LinkOut href="https://github.com/rosengate/sigil">sigil</LinkOut> that through laravel kernel
        bridging and how similar Laravel is to modern framework architecture. (Request/Response cycle, middleware, IoC container for service provider registry)
      </li>
    </ul>
  </StoryContentView>
</template>