import styles from '../styles/Presente.module.css'
import { Fragment } from 'react'
export default function Presente(params) {
    return (
        <Fragment>
            <div className= {styles.presente}>
                <div className={styles.tampa}></div>
                <div className={styles.corpo}></div>
                <div className={styles.laco1}></div>
                <div className={styles.laco2}></div>
            </div>


        </Fragment>
    )

};
