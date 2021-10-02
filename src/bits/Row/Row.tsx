import styles from './Row.module.scss';
import { ReactNode } from 'react'

export function Row(
    {children, verticalCenter}: {
        children: ReactNode;
        verticalCenter?: boolean;
    }
) {
    return <div className={`${styles.row} ${verticalCenter ? styles.rowVC : ''}`}>
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
