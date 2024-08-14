<template>
  <StoryTitleView>AWS (Amazon Web Services)</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>
        Worked with aws since avana.asia (2014). Self learned most of the services in aws as most of them are pretty straight-forward as long as you know
        concepts like cloud vps, database/mysql, cloud storage as well computer networking.
      </li>
      <li>
        Developed lot of ec2 instances since then, and most of the is related to setting up production webservices.
      </li>
      <li>
        Used to work with centOS, but these days I just settled with ubuntu with standards setup. (nginx, php, composer, git etc).
      </li>
      <li>
        Worked with other services such as RDS (relational database service), SES (simple mailing service), S3 (aws cloud storage service)
      </li>
      <li>
        Have worked a migration stuff especially when you need to migrate local production mysql to RDS, and also like moving local production files to S3.
        These however involved development of planning, of down windows, migration codes, tests, also tons of links handling by codebase.
      </li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>