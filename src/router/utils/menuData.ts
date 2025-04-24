import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-vue-next';
export const navMain = [
  {
    groupName: 'Platform',
    menu: [
      {
        title: 'Playground',
        url: '',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'History',
            pageName: '/History.vue',
            url: '/history'
          },
          {
            title: 'Starred',
            url: '/starred',
            pageName: '/Starred.vue'
          },
          {
            title: 'Settings',
            url: '/settings',
            pageName: '/Settings.vue'
          }
        ]
      },
      {
        title: 'Models',
        url: '',
        icon: Bot,
        items: [
          {
            title: 'Genesis',
            url: '/genesis',
            pageName: '/Genesis.vue'
          },
          {
            title: 'Explorer',
            url: '/explorer',
            pageName: '/Explorer.vue'
          },
          {
            title: 'Quantum',
            url: '/quantum',
            pageName: '/Quantum.vue'
          }
        ]
      },
      {
        title: 'Documentation',
        url: '',
        icon: BookOpen,
        items: [
          {
            title: 'Introduction',
            url: '/introduction',
            pageName: '/Introduction.vue'
          },
          {
            title: 'Get Started',
            url: '/started',
            pageName: '/GetStarted.vue'
          },
          {
            title: 'Tutorials',
            url: '/tutorials',
            pageName: '/Tutorials.vue'
          },
          {
            title: 'Changelog',
            url: '/changelog',
            pageName: '/Changelog.vue'
          }
        ]
      }
    ]
  },
  {
    groupName: 'Projects',
    menu: [
      {
        title: 'Settings',
        url: '',
        icon: Settings2,
        items: [
          {
            title: 'General',
            url: '/general',
            pageName: '/General.vue'
          },
          {
            title: 'Team',
            url: '/team',
            pageName: '/Team.vue'
          },
          {
            title: 'Billing',
            url: '/billing',
            pageName: '/Billing.vue'
          },
          {
            title: 'Limits',
            url: '/limits',
            pageName: '/Limits.vue'
          }
        ]
      }
    ]
  }
];
