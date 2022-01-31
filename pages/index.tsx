import Head from 'next/head'
import styles from '@styles/Home.module.css'

const Home: React.FC = () => {
  return(
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate cumque quam, quidem neque cum quas eveniet! Sed ipsam adipisci eos.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id cum perspiciatis sed. Veniam assumenda ullam, rem, sequi cumque illum molestias porro numquam magnam error quibusdam, dolorum quasi id? Voluptas.
          Veritatis excepturi recusandae tempore blanditiis veniam quia libero, eum incidunt possimus tenetur tempora atque ea? Adipisci ex ab provident. Commodi consequuntur natus quas provident et, cupiditate rerum sequi pariatur voluptatem.
          </p>
        </main>
    </div>
  )
}

export default Home