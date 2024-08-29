import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/views/IndexPage.vue'
import HISNetworkInfraPage from '@/views/Stories/Qmed/HISNetworkInfraPage.vue'
import MainLayout from "@/views/Layouts/MainLayout.vue";
import WorkExperiencesPage from "@/views/WorkExperiencesPage.vue";
import PersonalProjectsPage from "@/views/PersonalProjectsPage.vue";
import SkillsPage from "@/views/SkillsPage.vue";
import AwsStoryPage from "@/views/Stories/Skills/AwsStoryPage.vue";
import QueuescreensStoryPage from "@/views/Stories/Qmed/QueuescreensStoryPage.vue";
import TicketPrinterStoryPage from "@/views/Stories/Qmed/TicketPrinterStoryPage.vue";
import APIsStoryPage from "@/views/Stories/Qmed/APIsStoryPage.vue";
import WebsocketStoryPage from "@/views/Stories/Skills/WebsocketStoryPage.vue";
import PhpStoryPage from "@/views/Stories/Skills/PhpStoryPage.vue";
import JsStoryPage from '@/views/Stories/Skills/JsStoryPage.vue';
import OrmStoryPage from "@/views/Stories/Skills/OrmStoryPage.vue";
import VercelStoryPage from "@/views/Stories/Skills/VercelStoryPage.vue";
import LinuxStoryPage from "@/views/Stories/Skills/LinuxStoryPage.vue";
import QueuesDesignStoryPage from "@/views/Stories/Qmed/QueuesDesignStoryPage.vue";
import PatientAppStoryPage from "@/views/Stories/Qmed/PatientAppStoryPage.vue";
import AdsManagementStoryPage from "@/views/Stories/Qmed/AdsManagementStoryPage.vue";
import CopilotStoryPage from "@/views/Stories/Qmed/CopilotStoryPage.vue";
import LaravelStoryPage from "@/views/Stories/Skills/LaravelStoryPage.vue";
import HISEMRIntegrationStoryPage from "@/views/Stories/Qmed/HISEMRIntegrationStoryPage.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    })
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '',
          component: WorkExperiencesPage
        },
        {
          path: 'personal-projects',
          component: PersonalProjectsPage
        },
        {
          path: 'skills',
          component: SkillsPage
        },
        {
          path: '/stories',
          children: [
            {
              path: 'qmed',
              children: [
                {
                  path: 'his-network-infra',
                  component: HISNetworkInfraPage
                },
                {
                  path: 'queuescreens',
                  component: QueuescreensStoryPage
                },
                {
                  path: 'ticket-printer',
                  component: TicketPrinterStoryPage
                },
                {
                  path: 'apis',
                  component: APIsStoryPage
                },
                {
                  path: 'queues',
                  component: QueuesDesignStoryPage
                },
                {
                  path: 'patient-app',
                  component: PatientAppStoryPage
                },
                {
                  path: 'ads-management',
                  component: AdsManagementStoryPage
                },
                {
                  path: 'copilot',
                  component: CopilotStoryPage
                },
                {
                  path: 'his-emr',
                  component: HISEMRIntegrationStoryPage
                }
              ]
            },
            {
              path: 'skills',
              children: [
                {
                  path: 'aws',
                  component: AwsStoryPage
                },
                {
                  path: 'linux',
                  component: LinuxStoryPage
                },
                {
                  path: 'websocket',
                  component: WebsocketStoryPage
                },
                {
                  path: 'php',
                  component: PhpStoryPage
                },
                {
                  path: 'js',
                  component: JsStoryPage
                },
                {
                  path: 'orm',
                  component: OrmStoryPage
                },
                {
                  path: 'vercel',
                  component: VercelStoryPage
                },
                {
                  path: 'laravel',
                  component: LaravelStoryPage
                }
              ]
            }
          ]
        }
      ]
    },
  ]
})

export default router
