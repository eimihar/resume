<script>
import {defineComponent} from "vue";
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
import LinkOut from "@/views/LinkOut.vue";

export default defineComponent({
  components: {LinkOut, StoryContentView, StoryTitleView}
})
</script>
<template>
  <StoryTitleView>EMR Integrations</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development of integration with on-prem service and EMR (Electronic medical record) / CMS (Clinic Management System)</li>
      <li>Most often we'd have to integrate with more than 2-3 parties at a time</li>
      <li>Personally i didn't think it was really cost efficient, however i'd still go through it if it really calls for it.</li>
      <li>Some integrations takes a week, another take months</li>
      <li>Possibly one of the most challenging development and my least-preferred development especially for SaaS based product, as it always involve the timelines of different parties and how small the development and the integration windows usually are.</li>
      <li>Integrations developments
        <ul>
          <li>
            <LinkOut href="https://www.originistudios.com/services-solutions/hospital-information-system-his/">
              Origin
            </LinkOut> - Handled the developments of integrations with Origin HIS, from Kek Lok Si Hospital (2020), to RMCC (2024). Worked with more than 2 integration parties at a time.
            Configured the proxy through vpn for development purpose, and worked along with both the infra engineer of the hospital, origin for production configuration. Have also integrated payment terminal for qmed kiosk, and HIS billing information.
          </li>
          <li>
            <LinkOut>Easy Clinic</LinkOut> - Handled the development of integrations for <LinkOut href="https://qualitashealth.com.my/">Qualitas</LinkOut> Easy Clinic, for both through browser extension (2020), and official API integration (2023).
          </li>
          <li>
            <LinkOut href="https://umsc.my/">UMSC</LinkOut> - Development of integration with <LinkOut href="https://scala.com/en/">Scala</LinkOut> screen and on-prem <LinkOut href="https://strateqgroup.com/home/index.php/fisicien/">fisicien</LinkOut> HIS, both includes in setting up infra access to the on-prem server prior to the integration development.
            Also have worked with 2-3 integration parties at a time. For instance, the development of qmed QR check-in for another third-party (qcare) appointment app that also talks to fisicien. Developed way a persistent proxy to the on-prem HIS.
          </li>
          <li>
            LIPPO - Kickstarted the development of official v1 user APIs for Lippo patient app.
          </li>
        </ul>
      </li>
    </ul>
  </StoryContentView>
</template>