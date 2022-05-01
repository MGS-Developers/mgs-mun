import styles from './Home.module.scss';
import { Column, Row } from '../../bits/Row/Row'
import Image from '../../bits/Image/Image'
import Countdown from '../../bits/Countdown/Countdown'

export default function Home() {
    return <div className={styles.hero}>
        <div className={styles.contents}>
            <Row verticalCenter>
                <Column width={7}>
                    <h1>
                        Welcome to MGSMUN 2022!
                    </h1>
                    <p>
                        We look forward to welcoming you all to our conference in <strong>December</strong>. Currently,
                        all information on this website refers to MGSMUN <strong>2021</strong> — we'll start releasing
                        new details for 2022 as soon as possible.
                    </p>
                    <p>
                        To stay updated, follow us on&nbsp;
                        <a
                            href='https://www.instagram.com/mgsmun'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Instagram
                        </a> and&nbsp;
                        <a
                            href='https://twitter.com/mgsmun2021'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Twitter
                        </a>.
                    </p>

                    <Countdown />
                </Column>
                <Column>
                    <Image
                        src="https://i.ibb.co/LCyFZ6z/ezgif-com-gif-maker.jpg"
                        hash="LSHn+:OtwGxE~ptRMxRP9askR-jE"
                        alt="Students at an MGSMUN conference"
                        width={979}
                        height={549}
                    />
                </Column>
            </Row>
        </div>
    </div>
}
