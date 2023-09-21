import styles from './Whatsapp.module.css'

import React from 'react'

const Whatsapp = () => {
  return (
    <section className={styles.container}>
      <div className={styles.whatsappContainer}>
        <h2 className={styles.title}>¡Contáctanos vía Whatsapp!</h2>
        <div className={styles.clickContainer}>
          <button className={styles.title2} href="#">CLICK AQUÍ
            <i className='bx bxl-whatsapp'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Whatsapp