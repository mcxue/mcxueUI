import { RouteObject } from 'react-router-dom';
import UsageMcTable from './UsageMcTable';
import UsageMcFormItem from './UsageMcFormItem';
import React from 'react';
import UsageTable from './UsageTable';
import UsageMenu from './UsageMenu';


const uiUsageRouteConfig: RouteObject[] = [
  {
    path: 'table',
    element: <UsageTable />,
  },
  {
    path: 'menu',
    element: <UsageMenu />,
  },
  {
    path: 'mc-table',
    element: <UsageMcTable />,
  },
  {
    path: 'mc-form-item',
    element: <UsageMcFormItem />,
  },
];

export default uiUsageRouteConfig;
