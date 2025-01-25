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
      <li>Most ofteh we'd have to integrate with more than 2-3 parties at a time</li>
      <li>Personally i didn't think it was really cost efficient, however i'd still go through it if it really calls for it.</li>
      <li>Some integrations takes a week, another take months</li>
      <li>Possibly one of the most challenging development and my least-liked development especially for SaaS based product</li>
      <li>Integrations developments
        <ul>
          <li>
            <LinkOut href="https://www.originistudios.com/services-solutions/hospital-information-system-his/">
              Origin
            </LinkOut> - Handled the developments of integrations with Origin HIS, from Kek Lok Si Hospital (2020), to RMCC (2024).
          </li>
          <li>
            <LinkOut>Easy Clinic</LinkOut> - Handled the development of integrations for <LinkOut href="https://qualitashealth.com.my/">Qualitas</LinkOut> Easy Clinic, for both through browser extension (2020), and official API integration (2023).
          </li>
          <li>
            <LinkOut href="https://umsc.my/">UMSC</LinkOut> - Development of integration with <LinkOut href="https://scala.com/en/">Scala</LinkOut> screen and <LinkOut href="https://strateqgroup.com/home/index.php/fisicien/">fisicien</LinkOut> HIS, both includes in setting up infra access to the on-prem server prior to the integration development.
          </li>
          <li>
            LIPPO - Kickstarted the development of official v1 user APIs for Lippo patient app.
          </li>
        </ul>
      </li>
    </ul>
  </StoryContentView>
</template>