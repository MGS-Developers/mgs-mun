import styles from './CommitteeList.module.scss'
import chroma from 'chroma-js'
import CommitteeLogo from '../../bits/CommitteeLogo/CommitteeLogo'
import { CommitteeConfig } from '../Markdown/MarkdownPage'
import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CommitteeCard(
    {committee}: {
        committee: CommitteeConfig
    }
) {
    const [normalColor, hoveredColor] = useMemo(() => {
        const color = chroma(committee.color);
        return [color.alpha(0.1).hex(), color.alpha(0.2).hex()]
    }, [committee.color]);

    const [backgroundColor, setBackgroundColor] = useState(normalColor);
    const hover = useCallback(() => {
        setBackgroundColor(hoveredColor);
    }, [hoveredColor]);
    const stopHover = useCallback(() => {
        setBackgroundColor(normalColor);
    }, [normalColor]);

    return <div
        className={styles.card}
        style={{
            backgroundColor,
        }}
    >
        <Link
            to={`/committees/${committee.link}`}
            onMouseOver={hover}
            onMouseLeave={stopHover}
        >
            <CommitteeLogo
                image={committee.link}
                color={committee.color}
                className={styles.cardImage}
            />

            <h2 className={styles.cardTitle}>
                {committee.name}
            </h2>
        </Link>
    </div>
}
