<script>
export default {
  data() {
    return {
      expandVoid: false
    }
  }
}
</script>
<template>
  <div style="font-weight: bold; font-size: 25px;">Work Experiences</div>
  <div style="opacity: 0.6;">Fun or mundane things I did at works and stuff</div>

  <div class="section-experience">
    <div class="columns">
      <div class="column">
        <div class="exp-title">Lead Software Developer</div>
        <div class="exp-company">Queuemed Healthcare Sdn Bhd</div>
        <div class="exp-duration">November 2019 - current</div>
      </div>
      <!--            <div class="column is-one-quarter">-->
      <!--              <div class="tabs is-right">-->
      <!--                <ul>-->
      <!--                  <li @click="tab = 'summary'" :class="{'is-active': tab == 'summary'}"><a>Summary</a></li>-->
      <!--                  <li @click="tab = 'notable_projects'" :class="{'is-active': tab == 'notable_projects'}"><a>Notable Projects</a></li>-->
      <!--                </ul>-->
      <!--              </div>-->
      <!--            </div>-->
    </div>

    <div class="exp-detail">
      <ul>
        <li>
          Development of hardware firmware includes scalable devices deployment like queuescreens, ticket printers
          (scalable as in support/technical experience in setting up and configuring the devices for each deployment, and also the monitoring and management)
        </li>
        <li>
          Sets up (REST) APIs development (that has covered literal thousands internal endpoints, and hundreds of v1 APIs) and still maintaining and actively developing another hundreds (that's being utilized by major products (patient app, dashboards, kiosks, copilot, including thirdparties integration)
        </li>
        <li>
          Scaled the development in the way it would be manageable to businesses to users to third parties to developers to qmed.
        </li>
        <li>
          Handles most deployment stuff (except mobile builds), including setting up productions, vps provisioning and development instances for most projects (aws, linux, ubuntu, s3, ec2, rds, azure vm, vercel etc), env based deployment and etc
        </li>
        <li>
          Feature development and revamps includes customizable appointment slotting/scheduling design, thermal ticket printer, ticket QR, queuescreens and management, service queues design (websocket etc), patient portal, online ticket, clinics management, ads management, queue sequence and blueprint, feedback system
        </li>
        <li>
          Codebase revamps to scale for features mostly or how APIs are developed and maintained
        </li>
        <li>
          Development leads for qmed.asia, copilot project, patient hybrid app revamp, doktoraku, hardware firmwares, qmed go (teleconsultation kiosk), APIs development, and couple of HIS/EMR integrations
        </li>
        <li>
          Development of internal tooling, frameworks, and proof of concepts that spans across multiple projects
        </li>
        <li>
          Development of realtime features from queuescreens, to patient facing frontend, and implementation of websocket, teleconsultation, firmware (raspi, kiosk), openai etc
        </li>
        <li>
          Tackling major technical optimization/scaling issues as we grow
        </li>
      </ul>
    </div>
  </div>
  <div v-if="!expandVoid" style="border-bottom: 1px solid gainsboro; padding: 5px 15px; cursor: pointer; opacity: 0.6;" @click="expandVoid = true">Career void</div>
  <div v-else class="section-experience">
      <div class="exp-title">Trial Developer</div>
      <div class="exp-company">Rosengate</div>
      <div class="exp-duration">December 2017 - October 2019</div>
      <div class="exp-detail">
        <ul>
          <li>
            Making the existential entrance to early mid-life crisis
          </li>
          <li>
            Attempts at doing game development. badpirates.
          </li>
          <li>
            Made bajet.app
          </li>
          <li>
            Financial reset
          </li>
        </ul>
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
        <li>Delivered major project for the first 2 years. A CMS like platform to manage almost hundred of local internet centres / community.</li>
      </ul>
    </div>
  </div>
  <div class="section-experience">
    <div class="exp-title">System Developer</div>
    <div class="exp-company">KIST Technology</div>
    <div class="exp-duration">October 2011 - December 2013</div>
    <div class="exp-detail">
      Develop web application, doing requirement study, handling application presentation.
      <ul>
        <li>
          Campus management system (major module is timetable)
        </li>
        <li>
          HRIS system
        </li>
        <li>
          CRM for an aviation college
        </li>
        <li>
          E-Travel
        </li>
        <li>
          E-POS + E-Stock + E-Purse system
        </li>
        <li>
          Event booking system
        </li>
      </ul>
    </div>
  </div>
</template>