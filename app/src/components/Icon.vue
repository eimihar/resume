<script>
import {defineComponent} from "vue";
import {Icon} from "@iconify/vue";

export default defineComponent({
  components: {Icon},
  props: {
    icon: {
      required: true
    }
  }
})
</script>
<template>
  <Icon :icon="icon" />
</template>