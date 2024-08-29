<script>
export default {
  props: ['duration']
}
</script>
<template>
  <RouterLink to="/">Home</RouterLink> > <slot></slot>
  <div style="margin-bottom: 12px;">
    <div style="font-weight: bold; font-size: 25px;">
      <slot></slot>
    </div>
    <div v-if="duration" style="opacity: 0.6;">{{ duration }}</div>
  </div>
</template>