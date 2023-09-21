import React from 'react'
import styles from './OurStore.module.css'
import Location from './Location'
const OurStore = () => {
  return (
    <section>
      <h2 className={styles.title2}>NUESTRA <span className={styles.storeSpan}>   TIENDA</span></h2>
      <section className={styles.ourStoreContainer}>


        {/* Right section */}
        <article className={styles.rightSectionContainer}>
          <h2 className={styles.title}>Nuestra<span className={styles.storeSpan}> tienda</span></h2>
          <h4 className={styles.secondTitle}>Estamos ubicados en el poblado, Medellin</h4>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae accusantium earum quis voluptate dolorem dolorem dolorem dolorem.</p>
          </div>

        </article>


        {/* Left section */}
        <article className={styles.leftSectionContainer}>
          <div className={styles.locationContainer}>
            <Location />
          </div>
        </article>

      </section>
    </section>
  )
}

/* width="400" height="300" */

export default OurStore