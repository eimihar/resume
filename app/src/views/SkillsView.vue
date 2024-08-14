<template>
  <div class="section-skills">
    <div>
      <div class="side-subskills">
        <div class="side-subtitle">languages</div>
        <div>
          <StoryLink path="skills/php">php</StoryLink>, <StoryLink path="skills/js">js</StoryLink>, typescript, mysql
        </div>
        <div>
          html, css
        </div>
        <div class="minor">
          python, c#, node.js
        </div>
        <div class="minor">
          dart (flutter), kotlin
        </div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">frameworks</div>
        <div>laravel, exedra, vue, quasar</div>
        <div class="minor">ionic, flutter</div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">backend</div>
        <div>
          laravel, exedra, <StoryLink path="skills/php">php</StoryLink>, mysql, node.js, lamp, ubuntu, linux, <StoryLink path="skills/orm">orm / active record</StoryLink>, rest APIs, express.js
        </div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">architectural</div>
        <div>design pattern, oop, mvc, composite, adapter, IoC, meta / decorators, php PSR, async, b2b2c</div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">frontend</div>
        <div>html, css, js, jquery, vue, typescript, flutter, ionic, quasar, bulma, bootstrap</div>
        <div class="minor">electron, chrome extension</div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">ops</div>
        <div>
          vps, aws, ec2, rds, s3, ses, bash, system.d, linux, ubuntu, ssh, sftp, vercel, azure, digitalocean
        </div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">others</div>
        <div>
          openai, llm, raspberry, websocket, pusher.js
        </div>
      </div>
      <div class="side-subskills">
        <div class="side-subtitle">tools</div>
        <div>phpstorm, vscode, notion, asana, trello, github, bitbucket, google, chatgpt</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.side-subskills {
  margin-bottom: 15px;
}

.side-title {
  font-weight: bold;
  font-size: 1.1em;
}

.side-subtitle {
  font-weight: bold;
}
</style>
<script setup lang="ts">
import StoryLink from "@/views/StoryLink.vue";
</script>