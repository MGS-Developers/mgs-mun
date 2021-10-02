import styles from './Navbar.module.scss';
import logo from '../../assets/MGSMUN logo white.png';
import NavbarItem, { NavbarItemProps } from './NavbarItem'

interface Props {
    items: NavbarItemProps[];
}
export default function Navbar(
    {items}: Props,
) {
    return <nav className={styles.nav}>
        <div className={styles.logo}>
            <img
                src={logo}
                alt="MGSMUN logo"
            />
            <h1 className={styles.title}>
                MGSMUN 21
            </h1>
        </div>

        <div className={styles.links}>
            {items.map(item => <NavbarItem key={item.label} {...item} />)}
        </div>
    </nav>
}
