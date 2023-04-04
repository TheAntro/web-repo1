import * as React from 'react';
import * as styles from './navlink.module.css';

type NavLinkProps = {
  component: React.ReactElement;
};

export function NavLink({ component }: NavLinkProps) {
  return <span className={styles['wrapper']}>{component}</span>;
}
