<script>
import WorkExperiencesView from "@/views/WorkExperiencesView.vue";
import PersonalProjectsView from "@/views/PersonalProjectsView.vue";
import SkillsView from "@/views/SkillsView.vue";
import MobileSkillsView from "@/views/MobileSkillsView.vue";
import LinkOut from "@/views/LinkOut.vue";

export default {
  components: {LinkOut, MobileSkillsView, SkillsView, PersonalProjectsView, WorkExperiencesView},
  data() {
    return {
      tab: 'experiences'
    }
  }
}
</script>
<template>
  <div class="container container-resume">
    <div class="columns resume-header">
      <div class="column">
        <div style="font-weight: bold; font-size: 1.3em;">
          <RouterLink to="/">
            Rahimie Ahmad
          </RouterLink>
        </div>
        <div>
          Polyglot Software Engineer
        </div>
        <div style="opacity: 0.7;">Still working at
          <LinkOut href="https://qmed.asia" target="_blank">qmed.asia</LinkOut>. not actively looking</div>

      </div>
      <div class="tabs is-centered" style="overflow: hidden;">
        <ul style="border: 0px;">
          <li>
            <RouterLink to="/">Work Experiences</RouterLink>
          </li>
          <li>
            <RouterLink to="personal-projects">
              Personal Projects
              </RouterLink>
          </li>
          <li class="tab-skills"><RouterLink to="skills">Skills</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="columns resume-body">
      <div class="column is-one-fifth container-side">
        <div class="section-contact">
          <div class="side-title">Links</div>
          <div>newrehmi@gmail.com</div>
          <div><LinkOut href="https://github.com/eimihar">github.com/eimihar</LinkOut></div>
          <div><LinkOut href="https://www.linkedin.com/in/eimihar">linked.in/in/eimihar</LinkOut></div>
          <div><LinkOut href="https://twitter.com/eimihar">twitter.com/eimihar</LinkOut></div>
        </div>
        <SkillsView></SkillsView>
      </div>
      <div class="column container-main">
        <RouterView />
<!--        <WorkExperiencesView v-if="tab == 'experiences'" />-->
<!--        <PersonalProjectsView v-if="tab == 'projects'" />-->
<!--        <MobileSkillsView v-if="tab == 'skills'" />-->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
* a {
  color: rgb(198, 75, 89) !important;
}

.tabs li.is-active a {
  border-bottom-color: rgb(198, 75, 89) !important;
}

.tabs li.is-active {
  font-weight: bold;
}
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 768px) {
  .container-side {
    display: none !important;
  }

  .page-title {
    display: none;
  }

  .container-main {
    padding-top: 10px !important;
  }
}

@media screen and (min-width: 769px) {
  .tab-skills {
    display: none !important;
  }
}

.section-skills {
  .minor {
    opacity: 0.6;
  }
}

.container-resume {
  margin-top: 50px;
  background: white;

  .resume-header {
    border-bottom: 1px solid gainsboro;
    padding: 15px;
  }

  .resume-body {
    border-top: 1px solid gainsboro;
  }

  .columns {
    .container-side {
      padding: 25px;
      border-right: 1px solid gainsboro;

      .side-title {
        font-weight: bold;
        font-size: 1.1em;
      }

      > div {
        margin-bottom: 25px;
      }
    }

    .container-main {
      margin-bottom: 150px;
      padding: 25px;
    }
  }
}

.section-experience {
  padding-bottom: 30px;
  border-bottom: 1px solid gainsboro;
  padding-top: 15px;

  .exp-detail ul {
    list-style: circle;
  }

  .exp-title {
    font-size: 1.3em;
    font-weight: 500;
  }

  .exp-duration {
    opacity: 0.6;
  }

  .exp-detail {
    padding: 10px 30px;
  }
}
</style>