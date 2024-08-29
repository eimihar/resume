<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";

export default defineComponent({
  components: {StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>Linux</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Have deployed production or development env through linux based vps since 2014</li>
      <li>Studied Computer Networking 2007-2010, had basic understanding around networking</li>
      <li>Currently settled down for ubuntu-server or ubuntu based system for linux vps/instance</li>
      <li>My go-to tools to setting up typical production or development vps has been like :
        <ul>
          <li>nginx</li>
          <li>php</li>
          <li>mysql/php-mysql and related tools</li>
          <li>nodejs/npm</li>
          <li>/etc/systemd/system/* for daemon</li>
          <li>crontab</li>
          <li>git</li>
          <li>/home/user/* for codes and deployment. (Used to be at /var/www/html)</li>
        </ul>
      </li>
      <li>Have worked the boxes through cloud like aws, azure, or hardware like raspberry, NUC or wsl2</li>
      <li>Have a basic knowledge in when to use sudoer and when to not, and good enough to install stuff, setting up daemons and so on</li>
      <li>Have worked through vps migrations like moving stuff and storage, like disk mounting/unmounting stuff, or in setting up clean instance for production for migration purpose</li>
    </ul>
  </StoryContentView>
</template>