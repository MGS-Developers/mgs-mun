import styles from './Markdown.module.scss';
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import watermarkImage from '../../assets/MGSMUN logo watermark.png';

interface Props {
    source?: string;
    watermark?: boolean;
}
export default function MarkdownPage(
    {source, watermark}: Props
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

    return <div
        className={`${styles.fluidContainer} ${watermark ? styles.watermark : ''}`}
        style={{
            backgroundImage: watermark ? `url("${watermarkImage}")` : '',
        }}
    >
        {markdown ? <ReactMarkdown>
            {markdown}
        </ReactMarkdown> : <></>}
    </div>
}
