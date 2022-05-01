import styles from './Footer.module.scss';
import { Link, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import {ReactComponent as Instagram} from '../../assets/instagram.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'

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
        <p className={styles.socials}>
            <a
                href='https://www.instagram.com/mgsmun'
                target='_blank'
                rel='noreferrer'
            >
                <Instagram />
                @mgsmun
            </a>
            <a
                href='https://twitter.com/mgsmun2021'
                target='_blank'
                rel='noreferrer'
            >
                <Twitter />
                @mgsmun2021
            </a>
        </p>

        <p>
            &copy; Pal Kerecsenyi {copyrightYear}&nbsp;
            <a href='https://github.com/MGS-Developers/mgs-mun' target='_blank' rel='noreferrer'>
                under MIT license
            </a>, various&nbsp;
            <Link to='/info/media'>
                artwork licenses
            </Link>
        </p>
    </footer>
}
