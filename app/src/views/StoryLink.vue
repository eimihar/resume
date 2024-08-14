<script>
export default {
  props: {
    path: {
      required: true
    }
  }
}
</script>
<template>
  <RouterLink :to="`/stories/${path}`"><slot></slot></RouterLink>
</template>