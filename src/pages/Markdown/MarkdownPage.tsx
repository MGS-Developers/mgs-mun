import styles from './Markdown.module.scss';
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';

interface Props {
    source?: string;
}
export default function MarkdownPage(
    {source}: Props
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

    return <div className={styles.fluidContainer}>
        {markdown ? <ReactMarkdown>
            {markdown}
        </ReactMarkdown> : <></>}
    </div>
}
