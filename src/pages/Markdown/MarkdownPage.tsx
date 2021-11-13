import styles from './Markdown.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import watermarkImage from '../../assets/png_logos/MGSMUN logo watermark.png';
import { Column, Row } from '../../bits/Row/Row'
import CommitteesSidebar from '../../components/CommitteesSidebar/CommitteesSidebar'
import rehypeRaw from 'rehype-raw'
import { Link } from 'react-router-dom';
import remarkFootnotes from 'remark-footnotes';

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
    briefingPaper?: boolean;
    committee?: CommitteeConfig;
}
export default function MarkdownPage(
    {source, briefingPaper, committee}: Props
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

    const [timeElapsed, setTimeElapsed] = useState(false);
    useEffect(() => {
        setTimeElapsed(false);
        const id = setTimeout(() => {
            setTimeElapsed(true);
        }, 1000);

        return () => {
            clearTimeout(id);
        }
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
            return <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                plugins={[remarkFootnotes]}
            >
                {markdown}
            </ReactMarkdown>
        } else if (timeElapsed) {
            return <h1>
                Loading...
            </h1>
        } else {
            return <></>
        }
    }, [markdown, timeElapsed]);

    const print = useCallback(() => {
        window.print();
    }, []);

    return <div
        className={`${styles.fluidContainer} ${briefingPaper ? styles.watermark : ''}`}
        style={{
            backgroundImage: briefingPaper ? `url("${watermarkImage}")` : '',
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
                        Issues <span className={styles.committeeBriefingPaperLinked}>(briefing papers linked)</span>
                    </h2>
                    <ul>
                        {committee.issues.map((issue, index) => <li
                            key={issue}
                            style={committeeColorStyle}
                        >
                            <Link
                                to={`/committees/${committee!.link}/issue${index+1}`}
                                style={committeeColorStyle}
                            >
                                {issue}
                            </Link>
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

        {briefingPaper && <p>
            <button
                className={styles.briefingPaperButton}
                onClick={print}
            >
                Print briefing paper
            </button>
        </p>}

        {!committee && renderedMarkdown}
    </div>
}
