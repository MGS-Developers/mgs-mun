import styles from './Markdown.module.scss';
import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import watermarkImage from '../../assets/MGSMUN logo watermark.png';
import { Column, Row } from '../../bits/Row/Row'
import CommitteesSidebar from '../../bits/CommitteesSidebar/CommitteesSidebar'
import rehypeRaw from 'rehype-raw'

export interface CommitteeConfig {
    name: string;
    link: string;
    color: string;
    beginner: boolean;
    headChairs: string[];
    guestChairs: string[];
    issues: string[];
}

interface Props {
    source?: string;
    watermark?: boolean;
    committee?: CommitteeConfig;
}
export default function MarkdownPage(
    {source, watermark, committee}: Props
) {
    const [markdown, setMarkdown] = useState<string>();
    useEffect(() => {
        (async () => {
            const result = (await import("../../markdown/" + source + ".md")) as {
                default: string;
            };

            const text = await fetch(result.default).then(e => e.text());
            setMarkdown(text);
        })()
    }, [source]);

    const committeeColorStyle = useMemo(() => {
        if (committee) {
            return {
                color: committee.color,
            }
        } else {
            return {}
        }
    }, [committee]);

    const renderedMarkdown = useMemo(() => {
        if (markdown) {
            return <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdown}
            </ReactMarkdown>
        } else {
            return <></>
        }
    }, [markdown]);

    return <div
        className={`${styles.fluidContainer} ${watermark ? styles.watermark : ''}`}
        style={{
            backgroundImage: watermark ? `url("${watermarkImage}")` : '',
        }}
    >
        {committee && <>
            <div className={styles.committeeHeader}>
                <h1
                    className={styles.committeeTitle}
                    style={committeeColorStyle}
                >
                    {committee.name}
                </h1>

                {committee.beginner && <h2 className={styles.committeeSubheading}>
                    Beginners' Committee
                </h2>}

                <h3 className={styles.committeeChairList}>
                    Head Chair{committee.headChairs.length > 1 ? 's' : ''}: {committee.headChairs.join(', ')}
                </h3>
                <h3 className={styles.committeeChairList}>
                    Guest Chair{committee.guestChairs.length > 1 ? 's' : ''}: {committee.guestChairs.join(', ')}
                </h3>
            </div>

            <Row reverseMobile>
                <Column width={8}>
                    <h2
                        style={committeeColorStyle}
                    >
                        Issues
                    </h2>
                    <ul>
                        {committee.issues.map(issue => <li
                            key={issue}
                            style={committeeColorStyle}
                        >
                            {issue}
                        </li>)}
                    </ul>

                    {renderedMarkdown}
                </Column>

                <Column>
                    <CommitteesSidebar
                        backgroundColorBase={committee.color}
                        image={committee.link}
                    />
                </Column>
            </Row>
        </>}

        {!committee && renderedMarkdown}
    </div>
}
