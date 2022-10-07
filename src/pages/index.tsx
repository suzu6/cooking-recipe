import type { NextPage } from 'next'
import { DefaultLayout } from '../shared/layouts/DefaultLayout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <DefaultLayout >
        <div>Home</div>
      </DefaultLayout>
    </>
  )
}

export default Home
