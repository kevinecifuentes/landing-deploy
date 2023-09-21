import React from 'react'
import styles from './OurPartners.module.css'
const OurPartners = () => {
  return (
    <section className={styles.brandContainer}>
      <h2>MARCAS QUE MANEJAMOS</h2>
      <div className={styles.slider}>
        <ul>
          <li>
            <img src="/images/brand.png" alt="" />
          </li>
          <li>
            <img src="/images/brand2.png" alt="" />
          </li>
          <li>
            <img src="/images/brand3.png" alt="" />
          </li>
          <li>
            <img src="/images/brand4.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default OurPartners
