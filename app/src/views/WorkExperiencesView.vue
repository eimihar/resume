<script>
import exp from "node:constants";
import StoryLink from "@/views/StoryLink.vue";
import LinkOut from "@/views/LinkOut.vue";

export default {
  components: {LinkOut, StoryLink},
  computed: {
    exp() {
      return exp
    }
  },
  data() {
    return {
      expandVoid: false
    }
  }
}
</script>
<template>
  <div class="page-title" style="font-weight: bold; font-size: 25px;">Work Experiences</div>
  <div style="opacity: 0.6;">Fun or mundane things I did at works and stuff</div>

  <div class="section-experience">
    <div class="columns">
      <div class="column">
        <div class="exp-title">Lead Software Developer</div>
        <div class="exp-company">
          <LinkOut href="https://qmed.asia/newsroom">Queuemed Healthtech Sdn Bhd</LinkOut>
        </div>
        <div class="exp-company-about">
          SaaS (and on-prem physical set-ups) healthcare for queue management for clinics and hospitals
        </div>
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
          Development of hardware firmware including scalable devices deployment like <StoryLink path="qmed/queuescreens">queuescreens</StoryLink>, <StoryLink path="qmed/ticket-printer">ticket printers</StoryLink>
          (scalable as in support/technical experience in setting up and configuring the devices for each deployment, and also the monitoring and management)
        </li>
        <li>
          Sets up (REST) <StoryLink path="qmed/apis">APIs development</StoryLink> (that has covered literal thousands internal endpoints, and hundreds of v1 APIs) and still maintaining and actively developing another hundreds (that's being utilized by major product developments (<StoryLink path="qmed/patient-app">patient app</StoryLink>, <StoryLink path="qmed/dashboard">dashboards</StoryLink>, <StoryLink path="qmed/kiosk">kiosks</StoryLink>, <StoryLink path="qmed/copilot">copilot</StoryLink>, including thirdparties integration)
        </li>
        <li>
          Scaled the development in the way it would be manageable to businesses to users to third parties to developers to qmed internals.
        </li>
        <li>
          Handles most deployment stuff (except mobile builds), including <StoryLink path="skills/linux">setting up productions</StoryLink>, vps provisioning and development instances for most projects (<StoryLink path="skills/aws">aws</StoryLink>, <StoryLink path="skills/linux">linux</StoryLink>, ubuntu, s3, ec2, rds, azure vm, <StoryLink path="skills/vercel">vercel</StoryLink> etc), env based deployment and etc
        </li>
        <li>
          Feature development and revamps includes customizable appointment slotting/scheduling design, <StoryLink path="qmed/ticket-printer">thermal ticket printer</StoryLink>, ticket QR, queuescreens and management, <StoryLink path="qmed/queues">service queues design</StoryLink> (<StoryLink path="skills/websocket">websocket</StoryLink> etc), <StoryLink path="qmed/patient-app">patient portal</StoryLink>, online ticket, clinics management, <StoryLink path="qmed/ads-management">ads management</StoryLink>, queue sequence and blueprint, feedback system and many others.
        </li>
        <li>
          Codebase revamps to scale for features mostly or <StoryLink path="qmed/apis">how APIs are developed and maintained</StoryLink>
        </li>
        <li>
          Development leads for qmed.asia, <StoryLink path="qmed/copilot">copilot</StoryLink> project, <StoryLink path="qmed/patient-app">patient hybrid app revamp</StoryLink>, doktoraku, hardware firmwares, qmed go (teleconsultation kiosk), APIs development, and number of <StoryLink path="qmed/his-emr">HIS/EMR integrations</StoryLink> (along with <StoryLink path="qmed/his-network-infra">network infra setup</StoryLink>).
        </li>
        <li>
          Development of internal tooling, frameworks, and proof of concepts that spans across multiple projects
        </li>
        <li>
          Development of realtime features from <StoryLink path="qmed/queuescreens">queuescreens</StoryLink>, to patient facing frontend, and implementation of <StoryLink path="skills/websocket">websocket</StoryLink>, teleconsultation, firmware (raspi, kiosk), openai etc
        </li>
        <li>Development of <StoryLink path="skills/payment-gateways">payment gateways</StoryLink> integrations flow through
          senangpay and revenue monster for paid service/package and credit top-up, and development of payment terminal integration for kiosk, along with related system designs.
          Also developed payout module for payments (being an escrow model). Also integrated payment terminal for one of our hospitals.</li>
        <li>
          Tackling major technical optimization/scaling and security issues as we the number grows
        </li>
        <li>Have worked with designers, developers, mobile developers, kiosk, product owners, third parties, and non-technicals for business requirements, feature requests, bugs report or product developments.</li>
      </ul>
    </div>
  </div>
  <div v-if="!expandVoid" style="border-bottom: 1px solid gainsboro; padding: 5px; cursor: pointer; opacity: 0.6;" @click="expandVoid = true">Career void</div>
  <div v-else class="section-experience">
      <div class="exp-title" @click="expandVoid = false" style="cursor: pointer;">undefined</div>
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
    <div class="exp-company">
      <LinkOut href="https://www.crunchbase.com/organization/avana/company_overview/overview_timeline">AVANA</LinkOut>
    </div>
    <div class="exp-company-about">
      SaaS ecommerce like shopify but for SEA market, primary competitor back then was <LinkOut href="https://www.easystore.co/">EasyStore</LinkOut>
    </div>
    <div class="exp-duration">January 2014 - November 2017</div>
    <div class="exp-detail">
      <ul>
        <li>
          Develop Theming engine / theme dev. for the webstore front (similar to <LinkOut target="_blank" href="https://shopify.dev/docs/api/liquid">shopify liquid</LinkOut>)
        </li>
        <li>
          API design / development for app development consumption, along with oauth2 (through <LinkOut target="_blank" href="https://oauth2.thephpleague.com/">phpleague</LinkOut>) implementation
        </li>
        <li>
          Developer/documentation portal, complete with theme publishing review system
        </li>
        <li>
          Payment gateways integration
        </li>
        <li>
          Social platform APIs integrations, like facebook page APIs, twitter, google blogspot
        </li>
        <li>
          Developed a proper release and deployment flow (non-CICD)
        </li>
        <li>
          Deliver an ionic2 based mobile app (along with a designer) that consume the API project
        </li>
        <li>Developed a proper premium plan, along with regional pricing design</li>
        <li>Commerce, business related development</li>
        <li>Delivered major project for the first 2 years here (along with a designer). <LinkOut href="https://www.picelcom.my/">A CMS like platform to manage almost hundred of local internet centres / community.</LinkOut></li>
      </ul>
    </div>
  </div>
  <div class="section-experience">
    <div class="exp-title">System Developer</div>
    <div class="exp-company">KIST Technology</div>
    <div class="exp-duration">October 2011 - December 2013</div>
    <div class="exp-detail">
      <ul>
        <li>
          Develop web application, doing requirement study, handling application presentation.
        </li>
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
<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .exp-detail {
    ul li {
      margin-bottom: 15px;
    }
  }
}
</style>