<script>
export default {
  props: ['duration'],
  computed: {
    type() {
      const type = this.$route.path.split('/')[2];

      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  }
}
</script>
<template>
  <RouterLink to="/">Home</RouterLink> > Stories > {{ type }} > <slot></slot>
  <div style="margin-bottom: 12px;">
    <div style="font-weight: bold; font-size: 25px;">
      <slot></slot>
    </div>
    <div v-if="duration" style="opacity: 0.6;">{{ duration }}</div>
  </div>
</template>