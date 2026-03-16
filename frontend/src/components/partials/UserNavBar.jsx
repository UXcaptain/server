import { NavLink } from 'react-router'
import { useState } from 'react';
import {
  IconHomeFilled,
  IconUserCircle,
  IconCreditCardFilled,
  IconDotsVertical
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import { CreateNewAnalysisButton } from '../../pages/user/CreateNewAnalysisButton';
import LogOutButton from '../navBarElements/LogOutButton';
import { Menu, ActionIcon } from '@mantine/core';


const UserNavBar = () => {

  const [active, setActive] = useState('Dashboard');

  const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconHomeFilled },
  { link: '/user/profile', label: 'Cambiar contraseña', icon: IconUserCircle },
  { link: '/user/billing', label: 'Planes', icon: IconCreditCardFilled },
];

  const links = data.map((item) => (
    <NavLink to={item.link} key={item.label} className={classes.link} data-active={item.label === active || undefined} onClick={() => setActive(item.label)}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <div className={classes.linksContainer}>
          {links}
        </div>
      </div>

      <div className={classes.navbarRight}>
        <div className={classes.buttonContainer}>
          <CreateNewAnalysisButton />
        </div>
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" size="lg" radius="md">
              <IconDotsVertical size={20} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <LogOutButton />
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  );

};

export default UserNavBar;
