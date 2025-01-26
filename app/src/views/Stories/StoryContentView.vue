<template>
  <div class="container-story-content">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.container-story-content {
  ul {
    list-style: circle;
    padding: 10px 30px;
  }
}

@media screen and (max-width: 600px) {
  .container-story-content ul > li {
    margin-bottom: 5px;
  }
}
</style>