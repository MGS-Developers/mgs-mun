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
                        href='https://tfgm.com/public-transport/train/stations/levenshulme-rail'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Levenshulme
                    </a>
                    . Frequent, direct bus connections from&nbsp;
                    <a
                        href='https://tfgm.com/public-transport/train/stations/manchester-piccadilly-rail'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Manchester Piccadilly
                    </a>
                    &nbsp;and&nbsp;
                    <a
                        href='https://tfgm.com/public-transport/train/stations/manchester-oxford-road-rail/'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        Manchester Oxford Road
                    </a> also available.
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
                <p>
                    <strong>Bike:</strong> Wilmslow Road/Oxford Road have physically-separated bike lanes on long sections.
                    TfGM also offers&nbsp;
                    <a
                        href='https://activetravel.tfgm.com/bee-network-cycle-hire/'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        cheap bike rental
                    </a>, with a docking station at the western end of Old
                    Hall Lane. Lots of secure bike racks are available on-site — just ask a Parking Warden for directions.
                </p>

                <h2>
                    Parking
                </h2>
                <p>
                    Parking will be provided on-site. Please use the Old Hall Lane entrance (the Telfer Road entrance will be closed)
                    and follow signs, as well as instructions from our Parking Wardens. Please keep in mind that parking is limited,
                    so consider using one of the many convenient public transport options if possible.
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
