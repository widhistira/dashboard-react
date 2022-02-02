import React from 'react';
import { Redirect } from 'react-router-dom';

import { DashboardPageConfig } from '../pages/dashboard/DashboardPageConfig';
// import { AboutPageConfig } from "../pages/about/AboutPageConfig";
import { MemoPageConfig } from '../pages/memo/MemoPageConfig';
import { UserManagementPageConfig } from '../pages/user-management/UserManagementConfig';
// import { CalendarPageConfig } from "../pages/calendar/CalendarPageConfig";
import { ForgotPasswordPageConfig } from '../pages/auth/forgot-password/ForgotPasswordPageConfig';
import { LoginPageConfig } from '../pages/auth/login/LoginPageConfig';
import { RegisterPageConfig } from '../pages/auth/register/RegisterPageConfig';
// import { DocumentationConfig } from "../pages/documentation/DocumentationConfig";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...UserManagementPageConfig.routes,
  ...MemoPageConfig.routes,
  // ...CalendarPageConfig.routes,
  ...ForgotPasswordPageConfig.routes,
  ...LoginPageConfig.routes,
  ...RegisterPageConfig.routes
  // ...AboutPageConfig.routes
  // ...DocumentationConfig.routes
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
  // {
  //   path: "/test",
  //   exact: true,
  //   component: <Example />
  // }
];

export default routes;
