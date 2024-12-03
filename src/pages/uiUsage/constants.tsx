import { MenuProps } from 'mcxue-ui';

export const UI_USAGE_MENU_ITEMS: MenuProps['items'] = [
  {
    label: '练习',
    type: 'group',
    children: [
      {
        label: 'Table 表格',
        key: '/ui-usage/table',
      },
      {
        label: 'Menu 导航菜单',
        key: '/ui-usage/menu'
      }
    ],
  },
  {
    label: '封装',
    type: 'group',
    children: [
      {
        label: 'McTable 表格',
        key: '/ui-usage/mc-table',
      },
      {
        label: 'McFormItem 通用表单字段',
        key: '/ui-usage/mc-form-item',
      },
    ],
  },
];
