<script>
export default {
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    expand() {
      this.isExpanded = true;
    },
    collapse() {
      this.isExpanded = false;
    }
  }
}
</script>
<template>
  <slot v-if="isExpanded"></slot>
  <div v-else>
    <a href="javascript:;" @click="expand">read more...</a>
  </div>
  <a href="javascript:;" @click="collapse" v-if="isExpanded">read less.</a>
</template>