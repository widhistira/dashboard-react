// import { MaterialUIComponentsNavigation } from "../pages/documentation/material-ui-components/MaterialUIComponentsNavigation";

const navigationConfig = [
  {
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'leaderboard_black',
        url: '/',
        exact: true
      },
      {
        id: 'approval management',
        title: 'Approval Management',
        type: 'item',
        icon: 'approval',
        url: '/',
        exact: true
      },
      {
        id: 'user & role management',
        title: 'User & Role Management',
        type: 'item',
        icon: 'switch_account',
        url: '/pages/posts',
        exact: true
      },
      {
        id: 'policy holder information',
        title: 'Policy Holder Information',
        type: 'item',
        icon: 'person',
        url: '/',
        exact: true
      },
      {
        id: 'master management',
        title: 'Master Management',
        type: 'collapse',
        icon: 'storage',
        badge: {
          // title: "2",
          // bg: "#525E8A",
          // fg: "#FFFFFF",
        },
        children: [
          {
            id: 'medical code',
            title: 'Medical Code',
            type: 'item',
            url: '/pages/posts',
            exact: true
          },
          {
            id: 'clinical pathway',
            title: 'Clinical Pathway',
            type: 'item',
            url: '/pages/posts/add-post',
            exact: true
          },
          {
            id: 'insurance product',
            title: 'Insurance Product',
            type: 'item',
            url: '/pages/posts/add-post',
            exact: true
          },
          {
            id: 'master plan',
            title: 'Master Plan',
            type: 'item',
            url: '/pages/posts/add-post',
            exact: true
          },
          {
            id: 'E-form template',
            title: 'E-Form Template',
            type: 'item',
            url: '/pages/posts/add-post',
            exact: true
          },
          {
            id: 'document configuration',
            title: 'Document Configuration',
            type: 'item',
            url: '/pages/posts/add-post',
            exact: true
          },
          {
            id: 'notification tamplate',
            title: 'Notification Tamplate',
            type: 'item',
            url: '/pages/posts/add-post',
            exact: true
          }
        ]
      },
      {
        id: 'partner management',
        title: 'Partner Management',
        type: 'item',
        icon: 'people',
        url: '/',
        exact: true
      },
      {
        id: 'policy management',
        title: 'Policy Management',
        type: 'item',
        icon: 'policy',
        url: '/',
        exact: true
      },
      {
        id: 'case monitoring',
        title: 'Case Monitoring',
        type: 'item',
        icon: 'dvr',
        url: '/',
        exact: true
      },
      {
        id: 'document management',
        title: 'Document Management',
        type: 'item',
        icon: 'description',
        url: '/',
        exact: true
      },
      {
        id: 'claim management',
        title: 'Claim Management',
        type: 'item',
        icon: 'article',
        url: '/',
        exact: true
      },
      {
        id: 'finance & accounting',
        title: 'Finance & Accountingt',
        type: 'item',
        icon: 'receipt_long',
        url: '/',
        exact: true
      },
      {
        id: 'reports',
        title: 'Reports',
        type: 'item',
        icon: 'assessment',
        url: '/',
        exact: true
      }
      // {
      //   id: "calendar",
      //   title: "Calendar",
      //   type: "item",
      //   icon: "event",
      //   url: "/pages/calendar",
      //   exact: true,
      // },
    ]
  }
  // {
  //   id: "Pages",
  //   title: "Pages",
  //   type: "group",
  //   children: [
  //     {
  //       id: "Authentication",
  //       title: "Authentication",
  //       type: "collapse",
  //       icon: "lock",
  //       children: [
  //         {
  //           id: "Login",
  //           title: "Login",
  //           type: "item",
  //           url: "/pages/auth/login",
  //           exact: true,
  //         },
  //         {
  //           id: "Register",
  //           title: "Register",
  //           type: "item",
  //           url: "/pages/auth/register",
  //           exact: true,
  //         },
  //         {
  //           id: "Forgot Password",
  //           title: "Forgot Password",
  //           type: "item",
  //           url: "/pages/auth/forgot-password",
  //           exact: true,
  //         },
  //       ],
  //     },
  //     // {
  //     //   id: "About",
  //     //   title: "About",
  //     //   type: "item",
  //     //   icon: "description",
  //     //   url: "/pages/about",
  //     //   exact: true,
  //     // },
  //   ],
  // },

  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "item",
  //   icon: "dashboard",
  //   url: "/",
  //   exact: true
  // },
  // {
  //   id: "pages",
  //   title: "Pages",
  //   type: "group",
  //   icon: "pages",
  //   children: [
  //     {
  //       id: "all pages",
  //       title: "Pages",
  //       type: "collapse",
  //       icon: "stars",
  //       badge: {
  //         title: "new",
  //         bg: "#525E8A",
  //         fg: "#FFFFFF"
  //       },
  //       children: [
  //         {
  //           id: "about",
  //           title: "About",
  //           type: "item",
  //           icon: "info",
  //           url: "/pages/about",
  //           exact: true
  //         },
  //         {
  //           id: "contact",
  //           title: "Contact",
  //           type: "item",
  //           icon: "group",
  //           url: "/pages/contact",
  //           exact: true
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "divider-1",
  //   type: "divider"
  // },
];

export default navigationConfig;
