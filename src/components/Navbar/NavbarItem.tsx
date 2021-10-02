import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useCallback, useEffect, useState } from 'react'

export interface NavbarItemProps {
    label: string;
    href?: string;
    subs?: {
        label: string;
        href: string;
    }[];
}
export default function NavbarItem(
    {label, href, subs}: NavbarItemProps
) {
    const [showSubs, setShowSubs] = useState(false);
    const [parentHovered, setParentHovered] = useState(false);
    const [subHovered, setSubHovered] = useState(false);
    const show = () => {
        setParentHovered(true);
        setShowSubs(true);
    };
    const parentLeave = () => {
        setParentHovered(false);
    }
    const subEnter = () => {
        setSubHovered(true);
    }
    const subLeave = () => {
        setSubHovered(false);
    }

    useEffect(() => {
        if (!showSubs) return;

        if (!parentHovered && !subHovered) {
            setSubHovered(false);
            setShowSubs(false);
        }
    }, [parentHovered, subHovered, showSubs]);

    return <div className={styles.itemParent}>
        <p className={styles.linkText}>
            {href && <>
                <NavLink
                    exact
                    to={href}
                    className={styles.link}
                    activeClassName={styles.linkActive}
                >
                    {label}
                </NavLink>
            </>}
            {!href && <span
                className={styles.nonLink}
                onMouseOver={show}
                onMouseLeave={parentLeave}
            >
                {label}
            </span>}
        </p>

        {subs && <div
            className={`${styles.subs} ${showSubs ? styles.subsActive : ''}`}
            onMouseEnter={subEnter}
            onMouseLeave={subLeave}
        >
            {subs?.map(sub => <NavLink
                key={sub.href}
                exact
                to={sub.href}
                className={styles.subLink}
            >
                {sub.label}
            </NavLink>)}
        </div>}
    </div>
}
