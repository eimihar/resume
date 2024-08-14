<template>
  <StoryTitleView>PHP</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>
        My bread and butter software development language. Professionally worked with <LinkOut href="https://www.php.net/">PHP</LinkOut> since 2011 as a backend language.
        The best language of the web. Gets the job done.
      </li>
      <li>
        Have worked through PHP ecosystem like codeigniter 2, symfony (since 1.4), laravel, and tons of microframeworks like slim and tons of composer packages
      </li>
      <li>
        Developed a routing framework called <LinkOut href="https://exedra.rosengate.com">exedra</LinkOut> which in the end was manifested as laravel attribute based routing package through <LinkOut href="https://github.com/rosengate/sigil">rosengate/sigil</LinkOut>, and also number of php libraries
        you might find throughout <LinkOut href="https://github.com/eimihar">my github repo</LinkOut>.
      </li>
      <li>
        A beautiful dynamic/strict typed language depending on how you want to look at it and how backward compatible the language is.
      </li>
      <li>
        Familiar with <LinkOut href="https://www.php-fig.org/psr/">PSR</LinkOut> stuff when it comes to standard. Have worked with PSR http message, PSR container interface, PSR autoload, during my time making <LinkOut href="https://exedra.rosengate.com">exedra</LinkOut>.
      </li>
      <li>
        Already settled down with <LinkOut href="https://laravel.com/">Laravel</LinkOut>, through <LinkOut href="https://github.com/rosengate/sigil">rosengate/sigil</LinkOut>. No more making up my own frameworks, or deciding what to build stuff with.
      </li>
      <li>
        I use <LinkOut href="https://www.jetbrains.com/phpstorm/">PHPStorm</LinkOut> these days and can't live without it. Thanks Jeevan (my ex-colleague from 2016) for introducing me to this IDE. Used sublime and notepad++ before, but good IDE helps you
        write better codes, and save you tons of time (in autocompletion and looking up stuff). Used to think that you only gets better when you do everything from raw scratch. I did so until 2016. However, you're only hitting your cognitive limit eventually.
        The only upward cognitively isn't through raw power of memories but your lookup systems.<br><br>IDE, google, stackoverflow, chatGPT.. They're all your lookup systems.
      </li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
import LinkOut from "@/views/LinkOut.vue";
</script>