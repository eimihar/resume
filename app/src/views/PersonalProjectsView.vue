<script>
import {defineComponent} from "vue";
import SectionProject from "@/views/Project/SectionProject.vue";
import ProjectReadMoreView from "@/views/Project/ProjectReadMoreView.vue";
import LinkOut from "@/views/LinkOut.vue";

export default defineComponent({
  components: {LinkOut, ProjectReadMoreView, SectionProject},
})
</script>
<template>
  <div class="page-title" style="font-weight: bold; font-size: 25px;">Personal Projects</div>
  <div style="opacity: 0.6;">Of what might or could have been</div>
  <div class="container-projects" style="margin-top: 15px;">
    <div class="columns">
      <div class="column">
        <SectionProject
          title="rosengate/exedra"
          link="https://exedra.rosengate.com"
          tools="php, nestful, routing, middleware, meta-programming"
          time="2015-2019">
          <em>A nestful route oriented PHP microframework, shipped with a flexibility that allow you to design, plan and prototype your application and execution hierarchically through the map of routing.</em>
          <div style="margin-top: 10px;">
            A php microframework (keyword ) i idealized around 2014-2015,
            and saw to it's final form around 2019. Still using it to this day, through laravel. Through rosengate/sigil.
            My technical baby once and forever.
          </div>
        </SectionProject>
        <SectionProject
          title="rosengate/sigil"
          link="https://github.com/Rosengate/sigil"
          tools="php, laravel, exedra"
          time="2019"
        >
          Laravel-Exedra PHP 8 attributes based routing controller package. A bridge between laravel and exedra.
          <ProjectReadMoreView>
            <p>
              I've learned over the years that rolling your own framework or
              wiring the components for your microframework gets pretty tedious especially when you had to do it again, even if you had a good boilerplates.
              I feel like it doesn't worth the mental works. So I just settled down and fall in love with laravel.
            </p>
            <p>
              However there's still thing from rosengate/exedra that i still love to use, the annotation/attributes based routing.
              I didn't like maintaining separate routes mapping files to hundred of controllers, especially when it comes to literal thousands of routing. I wish laravel have these, so i built this package which swap laravel routing, rewrite request/response cycle and
              even the way middleware works with rosengate/exedra. Also the rewiring of IoC / dependency injection strategy.
            </p>

            <p>
              A php8 attribute (or annotation/decorator in other lang) powered routing-controller, nestable, dependency injection and most importantly, laravel bootstrapped application.
            </p>
          </ProjectReadMoreView>
        </SectionProject>
        <SectionProject title="kernel.chat"
                        link="https://kernel.rosengate.com"
                        tools="npm, vue, js, ts, html, css openAI, llm, vercel"
                        time="somewhere 2023"
        >
          ChatGPT-like project just to experiment openAI APIs or even langchain, and explore the llm through my own lenses, also cause of course the nature of work call for it too.
          You'd need to input your own OpenAI access token if you wanna try it. I still use it to this day.
        </SectionProject>
        <SectionProject title="bajet.app"
                        link="https://bajet.app"
                        tools="npm, js, ts, ionic, php, mysql, exedra"
                        time="april 2019 - august 2019"
        >
          A totally free financial app with primary focuses on budget management, and expense tracking.
          Still got people using it, so I still pay for the domain. Just giving it back to the world.
        </SectionProject>
        <SectionProject title="prompteer.dev"
                        link="https://prompteer.rosengate.com"
                        tools="npm, vue, js, ts, html, css openAI, llm, vercel"
                        time="somewhere 2023"
        >
          There use to be time when prompt engineering was a thing. It's was tool i made to help with development, engineering and testing of
          llm system prompts. Requires OpenAI access token. I still believe that prompt engineering still have it's place in the future, but only with the right toolings.
        </SectionProject>
        <SectionProject
          title="eimihar/resume"
          link="https://github.com/eimihar/resume"
          time="July 2024"
          tools="vue, js, ts, html, css, bulma"
        >
          Just making the <a href="/" target="_blank">best resume</a> i can make? I promise this is not another blog cms. Just a frontend app. I love <LinkOut href="https://vuejs.org/" target="_blank">Vue.</LinkOut>
        </SectionProject>
      </div>
      <div class="column">
        <SectionProject title="Badpirates"
                        link="https://bad-pirates.blogspot.com/"
                        tools="unity, c#"
                        time="around 2018"
        >
          Game about procedural/sandboxy pirate games in the age of sails. Game development is hard.
          Quaternions? Everything is new, and math is everything. Wave function collapse? 3d modelling, projectile programming?
          3d animation? Sound effect programming and development? it's too much stuff..
          <ProjectReadMoreView>
            <p>
              The idea is to procedurally generate the oceans, and islands and the looks with the wave function collapse or whatever they're calling it.
              The random in computing is not totally random, but deterministic system by an initial configuration they call 'seed'. Imagine picking 10 marbles, and throw them all onto the ground.
            </p>
            <p>
              The position of each marble will seemingly be random to you, but given the right seed <em>(10 marbles, and the right space-time position of this reality)</em>,
              you'll be throwing onto the same exact positions of marbles, each time. So this wave function collapse is mathematical expansion of that.
            </p>
            <p>So, with the same world seed, you'd be able to revisit the same island again at the same position, and even how the islands look like is already pre-determined. Modern sandbox games
              make the same use of mechanic or however they implement it.
            </p>
          </ProjectReadMoreView>
        </SectionProject>
        <SectionProject title="code51/dialoguesmith"
                        link="https://github.com/code51/dialoguesmith"
                        tools="unity, c#"
                        time="around 2018"
        >
          A simple dialogue tree editor for unity. Initially making this for badpirates.
        </SectionProject>
        <SectionProject
          title="offworks/overnight"
          link="https://github.com/offworks/overnight"
          tools="php, mysql, pdo"
          time="2016"
        >
          An overnightly simple and consistent PHP-mysql query builder based on PDO. Was really long ago when i just love to build and reinvent the wheels, and when ORM were bit overly complicated.
          These days, I am already settled with laravel/eloquent. And cause I love query builder, wouldn't settle for less.
        </SectionProject>
        <SectionProject
          title="rosengate/sequencejs"
          link="https://github.com/Rosengate/sequencejs"
          tools="jquery, js, html, css"
          time="2015"
        >
          A programmable touring engine inspired by intro.js, written with the love of js/jQuery. Pretty old project.
        </SectionProject>
        <SectionProject
          title="eimihar/lkw-test"
          link="https://github.com/eimihar/lkw-test"
          time="october 2019"
          tools="laravel, vue, js, html, css"
        >
          An interview test i did for Lim Kok Wing, back when i tried to find job again. Took me a week or something.
          Delivered but not sure whether they've even looked at it. Not gonna do something like this again, not for an interview. Anyway..
        </SectionProject>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
p {
  margin-top: 10px;
}
</style>