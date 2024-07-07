<script>
import WorkExperiencesView from "@/views/WorkExperiencesView.vue";
import PersonalProjectsView from "@/views/PersonalProjectsView.vue";
import SkillsView from "@/views/SkillsView.vue";
import MobileSkillsView from "@/views/MobileSkillsView.vue";

export default {
  components: {MobileSkillsView, SkillsView, PersonalProjectsView, WorkExperiencesView},
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
          Rahimie Ahmad
        </div>
        <div>
          Polyglot Software Engineer
        </div>
        <div style="opacity: 0.7;">Still working at
          <a href="https://qmed.asia" target="_blank">qmed.asia</a>. not actively looking</div>

      </div>
      <div class="tabs is-centered" style="overflow: hidden;">
        <ul style="border: 0px;">
          <li @click="tab = 'experiences'" :class="{'is-active': tab == 'experiences'}"><a>Work Experiences</a></li>
          <li @click="tab = 'projects'" :class="{'is-active': tab == 'projects'}"><a>Personal Projects</a></li>
          <li class="tab-skills" @click="tab = 'skills'" :class="{'is-active': tab == 'skills'}"><a>Skills</a></li>
        </ul>
      </div>
    </div>
    <div class="columns resume-body">
      <div class="column is-one-fifth container-side">
        <div class="section-contact">
          <div class="side-title">Links</div>
          <div>newrehmi@gmail.com</div>
          <div><a href="https://github.com/eimihar" target="_blank">github.com/eimihar</a></div>
          <div><a href="https://www.linkedin.com/in/eimihar" target="_blank">linked.in/in/eimihar</a></div>
          <div><a href="https://twitter.com/eimihar" target="_blank">twitter.com/eimihar</a></div>
        </div>
        <SkillsView></SkillsView>
      </div>
      <div class="column container-main">
        <WorkExperiencesView v-if="tab == 'experiences'" />
        <PersonalProjectsView v-if="tab == 'projects'" />
        <MobileSkillsView v-if="tab == 'skills'" />
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