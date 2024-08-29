<template>
  <StoryTitleView>ORM (Object Relational Mapper)</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>
        My go-to query tool when working with backend stuff that requires talking/working with database/mysql.
      </li>
      <li>
        Have worked since php doctrine when it was an active record. Have worked data mapper back then (2016), and not really fan of it.
      </li>
      <li>
        Now I settling for Laravel Eloquent / active record through Laravel whenever possible for php ecosystem.
      </li>
      <li>
        Love the aspect of query builder in any given ORM especially in their chainability when building query, however still prefer simplicity cause that's the point of ORM.
        I once made my own query builder called <LinkOut href="https://github.com/offworks/overnight">offworks/overnight</LinkOut>
      </li>
      <li>
        Have some experiences with <LinkOut href="https://typeorm.io/">TypeORM</LinkOut> for typescript, and wouldn't mind learning new ORMs given that how mature the concept and implementation has already becoming these days.
      </li>
      <li>
        Used to dislike ORM due to how complicated it was back in 2015 (especially in setting up the properties, model and all the works), now I couldn't really live without it.
      </li>
      <li>
        Some people can confuse sql migrations with ORM however they can exist as separate tooling. Some ORM allows you to generate migration diff from their model definitions.
        These years, I prefer writing/maintaining the migrations code separately knowing that they execute be exactly what I write. Migration diff can be nice when setting up new project and database design,
        however you might run into issues when it comes to renaming types, length and so on of your models.
      </li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
import LinkOut from "@/views/LinkOut.vue";
</script>