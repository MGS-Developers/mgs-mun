import styles from './CommitteeList.module.scss'
import { committees } from '../../data/committees'
import CommitteeCard from './CommitteeCard'

export default function CommitteeList() {
    return <div className={styles.container}>
        <h1 className={styles.title}>
            Committees
        </h1>

        <div className={styles.list}>
            {committees.map(committee => <CommitteeCard
                key={committee.link}
                committee={committee}
            />)}
        </div>
    </div>
}
