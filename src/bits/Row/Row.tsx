import styles from './Row.module.scss';
import { ReactNode } from 'react'

export function Row(
    {children, verticalCenter, reverseMobile}: {
        children: ReactNode;
        verticalCenter?: boolean;
        reverseMobile?: boolean;
    }
) {
    return <div className={`${styles.row} ${verticalCenter ? styles.rowVC : ''} ${reverseMobile ? styles.rowRM : ''}`}>
        {children}
    </div>
}

export function Column(
    {children, width}: {
        children?: ReactNode;
        width?: number;
    }
) {
    return <div
        className={`${styles.col} ${width ? styles['w' + width] : ''}`}
    >
        {children}
    </div>
}
