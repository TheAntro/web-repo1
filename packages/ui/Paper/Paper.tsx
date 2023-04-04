import { PropsWithChildren } from 'react';
import styles from './paper.module.css';

type PaperProps = {
  color?: 'mint';
};

/**
 * A thematically stylized surface to place content on
 */
export function Paper({
  children,
  color = 'mint',
}: React.PropsWithChildren<PaperProps>) {
  return (
    <div className={`${styles.paper} ${styles[`paper-${color}`]}`}>
      {children}
    </div>
  );
}
