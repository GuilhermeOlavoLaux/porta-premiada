import { Fragment } from 'react/cjs/react.production.min'
import styles from '../styles/Porta.module.css'

export default function Porta(props) {
    return (
        <Fragment>
            <div className={styles.area}>
                <div className={styles.estrutura}>
                    <div className={styles.porta}>
                        <div className={styles.numero}>
                            3
                        </div>
                        <div className={styles.macaneta}>
                        </div>
                    </div>
                </div>
                <div className={styles.chao}>
                </div>
            </div>
        </Fragment>
    )

};