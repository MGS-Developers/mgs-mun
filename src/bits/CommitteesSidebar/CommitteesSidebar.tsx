import styles from './CommitteesSidebar.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import chroma from 'chroma-js'
import { committees } from '../../data/committees'

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

    const imagePlaceholder = useMemo(() => {
        const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect fill='${backgroundColorBase}' width="10" height="10"/></svg>`);
        return `data:image/svg+xml;utf8,${svg}`;
    }, [backgroundColorBase]);

    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        (async () => {
            const url = await import('../../assets/committees/' + image + '.png');
            setImageUrl(url.default);
        })();
    }, [image]);

    return <div
        className={styles.sidebar}
        style={{
            backgroundColor,
        }}
    >
        <img
            className={styles.image}
            src={imageUrl ?? imagePlaceholder}
            alt="Committee logo"
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
