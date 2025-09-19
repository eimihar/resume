<template>
  <StoryTitleView>UMMC Payment Kiosks</StoryTitleView>
  <StoryContentView>
    <ul>
      <li>Development lead for UMMC 10 payment kiosks project within 2 months</li>
      <li>Development of backend and APIs for cash handling, maintenance, cash movements, logging and reconciliation</li>
      <li>Development of dashboard for management of users, payments monitoring, issues like dispense and processing errors, kiosks monitoring and loggings</li>
      <li>Integration with UMMC payment APIs for patient bills and payment deposit, miscellaneous, debtor payment, and payment processing</li>
      <li>Development of processes from payment, maintenance, error handling and reconciliation</li>
      <li>Development of all the necessary logging for payments, maintenances, and the device events itself during these processes</li>
      <li>System design and specifications of infra implementation within UMMC network from servers configuration, and development operations within the ummc network</li>
      <li>Development of APIs needed for kiosk, from authentication, payment, ummc APIs, to maintenance processes (and auth flow)</li>
      <li>Development of reportings and summary as required by finance</li>
      <li>Development of tests to cover all possible cases up to edge cases like the handling for payment cancellation that involve high profile payment and the workaround when the machine fails and so on.</li>
      <li>Development of detailed UAT scripts for UMMC UAT phase</li>
      <li>Development of functional tests for every kiosk that needs to go through to ensure basic cash payment functionalities (especially)</li>
      <li>Development of documentations for technical integrations, APIs, supports, development to-dos, production checklists for ummc, qmed, and kiosk developer</li>
    </ul>
  </StoryContentView>
</template>
<script setup lang="ts">
import StoryTitleView from "@/views/Stories/StoryTitleView.vue";
import StoryContentView from "@/views/Stories/StoryContentView.vue";
</script>