import styles from './Footer.module.scss';
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export default function Footer() {
    const location = useLocation();
    const show = useMemo(() => {
        return location.pathname !== '/';
    }, [location]);

    if (!show) return <></>
    return <footer className={styles.footer}>
        <p>
            Website by Pal Kerecsenyi (kerecsenyip-y15@mgs.org)
        </p>
        <p>
            &copy; Manchester Grammar School 2021
        </p>
    </footer>
}
