import styles from './Countdown.module.scss';
import { useEffect, useState } from 'react'
import { DateTime, Duration, DurationUnits } from 'luxon'

const target = DateTime.fromMillis(1639213200000);
const units: DurationUnits = ['days', 'hours', 'minutes', 'seconds'];
export default function Countdown() {
    const [duration, setDuration] = useState<Duration>(target.diffNow(units));

    useEffect(() => {
        const interval = setInterval(() => {
            setDuration(target.diffNow(units));
        }, 500);

        return () => {
            clearInterval(interval);
        }
    }, []);

    if (duration.toMillis() < 0) {
        return <></>
    }

    return <div className={styles.container}>
        <div className={styles.value}>
            <p className={styles.count}>{duration.days}</p>
            <p className={styles.descriptor}>Days</p>
        </div>
        <div className={styles.value}>
            <p className={styles.count}>{duration.hours}</p>
            <p className={styles.descriptor}>Hours</p>
        </div>
        <div className={styles.value}>
            <p className={styles.count}>{duration.minutes}</p>
            <p className={styles.descriptor}>Minutes</p>
        </div>
        <div className={styles.value}>
            <p className={styles.count}>{Math.floor(duration.seconds)}</p>
            <p className={styles.descriptor}>Seconds</p>
        </div>
    </div>
}
