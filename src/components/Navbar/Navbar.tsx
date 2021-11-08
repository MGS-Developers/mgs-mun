import styles from './Navbar.module.scss';
import logo from '../../assets/png_logos/MGSMUN logo white.png';
import NavbarItem, { NavbarItemProps } from './NavbarItem'
import { useEffect, useMemo, useState } from 'react'
import menuIcon from '../../assets/menu_icon.svg'
import { Link } from 'react-router-dom';

interface Props {
    items: NavbarItemProps[];
}
export default function Navbar(
    {items}: Props,
) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const close = () => setShowMobileMenu(false);

    const itemsToDisplay = useMemo(() => {
        const parentFiltered = items.filter(e => !e.hide)
        parentFiltered.forEach(item => {
            if (item.subs) {
                item.subs = item.subs.filter(e => !e.hide)
            }
        });
        return parentFiltered;
    }, [items]);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add("locked")
        } else {
            document.body.classList.remove("locked")
        }

        return () => {
            document.body.classList.remove("locked")
        }
    }, [showMobileMenu]);

    return <nav className={styles.nav}>
        <Link
            className={styles.logo}
            to='/'
        >
            <img
                src={logo}
                alt="MGSMUN logo"
            />
            <h1 className={styles.title}>
                MGSMUN 21
            </h1>
        </Link>

        <button
            className={styles.mobileButton}
            onClick={() => setShowMobileMenu(true)}
        >
            <img src={menuIcon} alt="Open menu" />
        </button>

        {showMobileMenu && <div className={styles.mobileMenu}>
            <button
                className={styles.mobileButton}
                onClick={close}
            >
                &times;
            </button>

            {itemsToDisplay.map(item => <p
                className={styles.mobileLink}
                key={item.label}
            >
                {item.href && <Link
                    to={item.href}
                    onClick={close}
                >
                    {item.label}
                </Link>}
                {!item.href && item.label}

                {item.subs?.map(sub => <span
                    className={`${styles.mobileLink} ${styles.mobileLinkIndented}`}
                    key={sub.label}
                >
                    <Link
                        to={sub.href}
                        onClick={close}
                    >
                        {sub.label}
                    </Link>
                </span>)}
            </p>)}
        </div>}

        <div className={styles.links}>
            {itemsToDisplay.map(item => <NavbarItem key={item.label} {...item} />)}
        </div>
    </nav>
}
