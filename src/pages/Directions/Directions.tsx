import styles from './Directions.module.scss';
import { Column, Row } from '../../bits/Row/Row'

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
