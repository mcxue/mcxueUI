import { Menu, MenuProps } from 'antd';
import { useCallback, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const UsageMenu = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      label: '菜单1',
      key: 'menu1',
      children: [
        {
          label: '子菜单1',
          key: 'subMenu1',
          children: [
            {
              label: '子子菜单1',
              key: 'subSubMenu1',
            },
            {
              label: '子子菜单2',
              key: 'subSubMenu2',
            },
          ],
        },
        {
          label: '子菜单2',
          key: 'subMenu2',
          children: [
            {
              label: '子子菜单3',
              key: 'subSubMenu3',
            },
            {
              label: '子子菜单4',
              key: 'subSubMenu4',
            },
          ],
        },
      ],
    },
    {
      label: '菜单2',
      key: 'menu2',
      children: [
        {
          label: '子菜单3',
          key: 'subMenu3',
        },
        {
          label: '子菜单4',
          key: 'subMenu4',
          children: [
            {
              label: '子子菜单5',
              key: 'subSubMenu5',
            },
            {
              label: '子子菜单6',
              key: 'subSubMenu6',
            },
          ],
        },
      ],
    },
  ]);
  const [hoverMainMenuItem, setHoverMainMenuItem] = useState<MenuItem | null>(null);

  const handleMainMenuItemMouseEnter = (e: { key: string }) => {
    console.log(e);
    const selectedItem = menuItems.find(item => item.key === e.key);
    if (selectedItem) {
      setHoverMainMenuItem(selectedItem);
    }
  };

  const renderMainMenuItem = useCallback(() => {
    return menuItems.map(item => (
      <Menu.Item
        key={item.key}
        onMouseEnter={handleMainMenuItemMouseEnter}
      >
        {item?.label}
      </Menu.Item>
    ));
  }, menuItems);

  const handleMenuWrapperMouseLeave = () => {
    setHoverMainMenuItem(null);
  };

  return (
    <div style={{ width: '300px', display: 'flex' }} onMouseLeave={handleMenuWrapperMouseLeave}>
      <div style={{ width: '150px' }}>
        <Menu>
          {
            renderMainMenuItem()
          }
        </Menu>
      </div>
      <div>
        <Menu
          mode="inline"
          inlineCollapsed={false}
          style={{ width: '150px' }}
          items={hoverMainMenuItem?.children}
        />
      </div>
    </div>
  );
};

export default UsageMenu;
