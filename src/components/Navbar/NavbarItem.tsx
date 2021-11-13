import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss';
import { useEffect, useState, MouseEvent } from 'react'
import { RouteProps } from '../../data/routes'

interface Sub {
    label: string;
    href: string;
    hide?: boolean;
}

export interface NavbarItemProps {
    label: string;
    href?: string;
    subs?: Sub[];
    hide?: boolean;
}

interface SubRoute extends RouteProps {
    label: string;
    href: string;
    hide?: boolean;
}
export interface NavbarRouteItem extends RouteProps {
    label: string;
    href?: string;
    hide?: boolean;
    subs?: SubRoute[]
}

export default function NavbarItem(
    {label, href, subs}: NavbarItemProps
) {
    const parentLinkId = `nav_parent_link_${label}`;

    const [showSubs, setShowSubs] = useState(false);
    const [parentHovered, setParentHovered] = useState(false);
    const [subHovered, setSubHovered] = useState(false);
    const show = () => {
        setParentHovered(true);
        setShowSubs(true);
    };
    const parentLeave = (e: MouseEvent) => {
        setParentHovered(false);

        const target = e.relatedTarget;
        if (target instanceof HTMLElement &&
            (
                target.className.includes(styles.subs)
                || target.className.includes(styles.subLink)
            )
        ) {
            return
        }
        setSubHovered(false);
    }
    const subEnter = () => {
        setSubHovered(true);
    }
    const subLeave = (e: MouseEvent) => {
        const target = e.relatedTarget;
        if (target instanceof HTMLElement && target.id === parentLinkId) {
            return
        }
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
                    onMouseOver={show}
                    onMouseLeave={parentLeave}
                    id={parentLinkId}
                >
                    {label}
                </NavLink>
            </>}
            {!href && <span
                className={styles.nonLink}
                id={parentLinkId}
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
