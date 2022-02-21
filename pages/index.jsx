import Head from 'next/head'
import Image from 'next/image'
import Presente from '../components/Presente'
import Porta from '../components/Porta'
import PortaModel from '../model/porta'
import { useState } from 'react'

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1, false, true))

  const p2 = new PortaModel(2)

  return (
    <div>

      <Porta porta={p1} ></Porta>

    </div>
  )
}
