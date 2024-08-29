<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>Payment Gateways</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Have worked with payment gateways integration since avana.asia and have worked with qmed.asia on payment gateway implementation</li>
      <li>Have typical understanding of how payment gateways work for SaaS or b2b2c based product (escrow) along with the additional development of payout management.
        However I may still open to new understanding as I only managed to work through them by myself.
      </li>
      <li>
        Have understanding of typical returns from payment gateways integrations which either through webhook or redirects.
      </li>
    </ul>
  </StoryContentView>
</template>