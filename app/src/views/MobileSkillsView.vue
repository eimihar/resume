<script>
import {defineComponent} from "vue";
import SkillsView from "@/views/SkillsView.vue";

export default defineComponent({
  components: {SkillsView},
})
</script>
<template>
  <div class="page-title" style="font-weight: bold; font-size: 25px;">Skills</div>
  <div style="opacity: 0.6;">Weight and loss that i've gained over the time</div>
  <SkillsView style="margin-top: 20px;" />
</template>