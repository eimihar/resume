<script>
import Icon from "@/components/Icon.vue";

export default {
  components: {Icon},
  props: {
    href: {
      require: true
    }
  }
}
</script>
<template>
  <a target="_blank" :href="href"><Icon style="position: relative; top: 3px; margin-right: 3px;" icon="eva:external-link-outline" /><slot></slot></a>
</template>