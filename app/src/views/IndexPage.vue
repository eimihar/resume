<script>
export default {

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
        <div style="opacity: 0.7;">Not actively looking</div>
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
        <div class="section-skills">
          <div class="side-title">Skills</div>
          <div>
            <div class="side-subtitle">languages</div>
            <div>
              php, js, typescript, mysql
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
            <div class="side-subtitle">frameworks</div>
            <div>laravel, exedra, vue, quasar</div>
            <div class="minor">ionic, flutter</div>
            <div class="side-subtitle">backend</div>
            <div>
              php, mysql, node.js, lamp, ubuntu, linux, orm / active record, rest APIs, express.js
            </div>
            <div class="side-subtitle">architectural</div>
            <div>design pattern, oop, mvc, composite, adapter, IoC, meta / decorators, php PSR, async</div>
            <div class="side-subtitle">frontend</div>
            <div>html, css, js, jquery, vue, typescript, flutter, ionic, quasar, bulma, bootstrap</div>
            <div class="minor">electron, chrome extension</div>
            <div class="side-subtitle">ops</div>
            <div>
              vps, aws, ec2, rds, s3, ses, bash, system.d, linux, ubuntu, ssh, sftp, vercel, azure
            </div>
            <div class="side-subtitle">others</div>
            <div>
              openai, llm, raspberry, websocket, pusher.js
            </div>
            <div class="side-subtitle">tools</div>
            <div>phpstorm, vscode, notion, asana, trello, github, bitbucket</div>
          </div>
        </div>
      </div>
      <div class="column container-main">
        <div style="font-weight: bold; font-size: 25px;">Work Experience</div>
        <div class="section-experience">
          <div class="columns">
            <div class="column">
              <div class="exp-title">Lead Software Developer</div>
              <div class="exp-company">Queuemed Healthcare Sdn Bhd</div>
              <div class="exp-duration">November 2019 - current</div>
            </div>
            <div class="column is-one-fifth">
              <div class="tabs is-right">
                <ul>
                  <li class="is-active"><a>Summary</a></li>
                  <li><a>Projects</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="exp-detail">
            <ul>
              <li>
                Development of hardware firmware includes scalable devices deployment like queuescreens, ticket printers
                (scalable as in support/technical experience in setting up additionals for each deployment)
              </li>
              <li>
                Sets up (REST) APIs development (that has covered literal thousands internal endpoints, and hundreds of v1 APIs) and still maintaining and developing another hundreds (that's being utilized by major products (patient apps, dashboards, kiosks, copilot, including thirdparties integration)
              </li>
              <li>
                Scaled the development in the way it would be manageable to businesses to users to third parties to developers to qmed.
              </li>
              <li>
                Handles most deployment stuff (except mobile builds), including setting up productions , provisioning and development instances for most projects (aws, linux, ubuntu, s3, ec2, rds, azure vm, vercel etc), env based deployment and et cetera cetera et
              </li>
              <li>
                Feature development and revamps includes customizable appointment slotting/scheduling design, ticket printer, queuescreens and management, service queues design (websocket etc), patient portal, online ticket, clinics management, ads management, queue sequence and blueprint, feedback system
              </li>
              <li>
                Codebase revamps to scale for features mostly or how APIs are developed, maintained
              </li>
              <li>
                Development leads for qmed, copilot project, patient hybrid app revamp, doktoraku, hardware firmwares, qmed go (teleconsultation kiosk), APIs development, and couple of HIS/EMR integrations
              </li>
              <li>
                Development of realtime features from queuescreens, to patient facing frontend, and implementation of websocket, teleconsultation, firmware (raspi, kiosk), openai etc
              </li>
              <li>
                Tackling major technical optimization/scaling issues as we grow
              </li>
            </ul>
            <div>
            </div>
          </div>
        </div>
        <div class="section-experience">
          <div class="exp-title">Lead System Developer</div>
          <div class="exp-company">AVANA</div>
          <div class="exp-duration">January 2014 - November 2017</div>
          <div class="exp-detail">
            <ul>
              <li>
                Develop Theming engine / theme dev. for the webstore front (similar to shopify liquid)
              </li>
              <li>
                API design / development for app development consumption, along with oauth2 (through phpleague) implementation
              </li>
              <li>
                Developer/documentation portal, complete with theme publishing review system
              </li>
              <li>
                Payment gateways
              </li>
              <li>
                Social platform APIs, like facebook page APIs, twitter, google blogspot
              </li>
              <li>
                Developed a proper release and deployment flow (non-CICD)
              </li>
              <li>
                Deliver an ionic2 based mobile app (along with a designer) that consume the API project
              </li>
              <li>Do a proper premium plan, along with regional pricing design</li>
              <li>Commerce, business related development</li>
              <li>Delivered major project for the first 2 years. A CMS like platform to manage almost hundred of centres.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
      border-right: 1px solid gainsboro;

      .side-title {
        font-weight: bold;
        font-size: 1.1em;
      }

      .side-subtitle {
        font-weight: bold;
        margin-top: 15px;
      }

      > div {
        padding: 10px;
      }
    }

    .container-main {
      margin-bottom: 150px;
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

  .exp-detail {
    padding: 10px 30px;
  }
}
</style>