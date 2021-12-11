import styles from './Crisis.module.scss'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

interface CrisisData {
    url: string
    text: string
}

export default function Crisis() {
    const [data, setData] = useState<CrisisData>()

    useEffect(() => {
        (async () => {
            const response = await fetch('https://crisis.mgsmun.co.uk')
            const data = await response.json() as CrisisData & {
                available: boolean
            }

            if (data.available) {
                setData(data)
            } else {
                setData(undefined)
            }
        })()
    }, []);

    return <div className={styles.container}>
        <h1>Crisis Video</h1>

        {data && <>
            <video
                className={styles.video}
                src={data.url}
                controls
            />

            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
            >
                {data.text}
            </ReactMarkdown>
        </>}

        {!data && <p>
            The Crisis Video will be published during the event. It will appear on this page.
        </p>}
    </div>
}
