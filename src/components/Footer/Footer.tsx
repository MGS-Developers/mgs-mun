import styles from './Footer.module.scss';
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export default function Footer() {
    const location = useLocation();
    const show = useMemo(() => {
        return location.pathname !== '/';
    }, [location]);

    const copyrightYear = useMemo(() => {
        const year = new Date().getFullYear();
        if (year === 2021) {
            return '2021';
        } else {
            return `2021—${year}`
        }
    }, []);

    if (!show) return <></>
    return <footer className={styles.footer}>
        <p>
            <a
                href='https://github.com/palkerecsenyi/mgs-mun'
                target='_blank'
                rel='noreferrer'
            >
                Website
            </a>
            &nbsp;by Pal Kerecsenyi (kerecsenyip-y15@mgs.org)
        </p>
        <p>
            &copy; Pal Kerecsenyi {copyrightYear} under MIT license
        </p>
    </footer>
}
