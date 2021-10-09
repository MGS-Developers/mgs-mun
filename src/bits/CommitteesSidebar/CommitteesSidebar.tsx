import styles from './CommitteesSidebar.module.scss'
import { NavLink } from 'react-router-dom'
import { useMemo } from 'react'
import chroma from 'chroma-js'
import { committees } from '../../data/committees'
import CommitteeLogo from '../CommitteeLogo/CommitteeLogo'

interface Props {
    backgroundColorBase: string;
    image: string;
}
export default function CommitteesSidebar(
    {backgroundColorBase, image}: Props,
) {
    const backgroundColor = useMemo(() => {
        return chroma(backgroundColorBase).alpha(0.1).hex();
    },[backgroundColorBase]);

    return <div
        className={styles.sidebar}
        style={{
            backgroundColor,
        }}
    >
        <CommitteeLogo
            image={image}
            color={backgroundColorBase}
            className={styles.image}
        />

        <h1 className={styles.title}>
            Committees
        </h1>

        {committees.map(committee => <NavLink
            to={`/committees/${committee.link}`}
            activeClassName={styles.linkActive}
            style={{
                color: backgroundColorBase,
            }}
            key={committee.link}
        >
            {committee.name}
        </NavLink>)}
    </div>
}
