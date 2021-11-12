import styles from './Directions.module.scss';
import { Column, Row } from '../../bits/Row/Row'
import { Link } from 'react-router-dom';

export default function Directions() {
    return <div className={styles.container}>
        <Row>
            <Column width={5}>
                <h1>
                    How to find us
                </h1>

                <p>
                    The Manchester Grammar School<br/>
                    Old Hall Lane<br/>
                    Manchester<br/>
                    M13 0XT
                </p>

                <h2>
                    Getting here
                </h2>
                <p>
                    <strong>Bus:</strong> lines 41, 42, 42A, 42B, 42C, 43, 142, 143, and 147 stop near&nbsp;
                    <a
                        href='https://tfgm.com/public-transport/bus/stops/1800EB07831/'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Old Hall Lane.
                    </a>
                    &nbsp;Lines 50, 51, and 751 stop on&nbsp;
                    <a
                        href='https://tfgm.com/public-transport/bus/stops/1800EB01611/'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Birchfields Road.
                    </a>
                </p>
                <p>
                    <strong>Train:</strong> closest station is&nbsp;
                    <a
                        href='https://www.northernrailway.co.uk/stations/LVM'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Levenshulme
                    </a>
                    . Frequent, direct bus connections from&nbsp;
                    <a
                        href='https://www.northernrailway.co.uk/stations/MAN'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Manchester Piccadilly
                    </a>
                    &nbsp;also available.
                </p>
                <p>
                    <strong>Metrolink:</strong> closest station is&nbsp;
                    <a
                        href='https://tfgm.com/public-transport/tram/stops/west-didsbury-tram'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        West Didsbury
                    </a>
                    , with frequent bus connections available.
                </p>

                <h2>
                    Parking
                </h2>
                <p>
                    More information will be posted soon.
                </p>

                <h1>
                    Get in touch
                </h1>
                <p>
                    Please email mgsmun@outlook.com for any general enquiries.
                </p>
                <p>
                    You can also contact the Core Committee members by using their&nbsp;
                    <Link to='/people/committee' className={styles.link}>
                        individual email addresses.
                    </Link>
                </p>
            </Column>
            <Column width={7}>
                <iframe
                    width={600}
                    height={450}
                    src={"https://www.google.com/maps/embed/v1/place?q=Manchester+Grammar+School,Manchester+UK&key=AIzaSyBG8NafQofyrAmVbbvZioAkKqmDWQ_gxSA"}
                    title="Directions to MGS"
                />
            </Column>
        </Row>
    </div>
}
