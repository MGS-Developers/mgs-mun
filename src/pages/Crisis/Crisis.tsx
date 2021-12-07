import styles from './Crisis.module.scss'
import { useEffect, useState } from 'react'

export default function Crisis() {
    const [active, setActive] = useState<boolean>()
    const [url, setUrl] = useState<string>()

    useEffect(() => {
        (async () => {
            const response = await fetch('https://crisis.mgsmun.co.uk')
            const data = await response.json() as {
                available: boolean
                url?: string
            }

            setActive(data.available)
            setUrl(data.url)
        })()
    }, []);

    return <div className={styles.container}>
        <h1>Crisis Video</h1>

        {url && <>
            <video
                className={styles.video}
                src={url}
                controls
            />
        </>}

        {!active && !url && <p>
            The Crisis Video will be published during the event. It will appear on this page.
        </p>}
    </div>
}
