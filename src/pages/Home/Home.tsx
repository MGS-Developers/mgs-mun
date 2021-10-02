import styles from './Home.module.scss';
import { Column, Row } from '../../bits/Row/Row'
import Image from '../../bits/Image/Image'

export default function Home() {
    return <div className={styles.hero}>
        <div className={styles.contents}>
            <Row verticalCenter>
                <Column width={7}>
                    <h1>
                        Welcome to MGSMUN 21!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu nibh dui. Nullam tincidunt nunc non ultrices bibendum. Sed urna tortor, vulputate at venenatis a, rutrum vel dolor. Integer sodales nisi at auctor facilisis. Nulla facilisi. Cras non lectus eros.
                    </p>
                    <p>
                        Phasellus fringilla, ante a gravida dapibus, tortor erat euismod nisl,&nbsp;
                        <a href="#">
                            john@example.com
                        </a>.
                    </p>
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
