import { Fragment } from 'react/cjs/react.production.min'
import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'

interface PortaProps {
  porta: PortaModel
}

export default function Porta(props: PortaProps) {
  const { porta } = props
  const selecionada = porta.selecionada ? styles.selecionada : ''
  return (
    <Fragment>
      <div className={styles.area}>
        <div className={`${styles.estrutura} ${selecionada}`}>
          <div className={styles.porta}>
            <div className={styles.numero}>{porta.numero}</div>
            <div className={styles.macaneta}></div>
          </div>
        </div>
        <div className={styles.chao}></div>
      </div>
    </Fragment>
  )
}
