import React from 'react'
import styles from './Location.module.css'

const Location = () => {
  return (
    <article className={styles.locationContainer}>
      <iframe className={styles.iFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3835284895235!2d-75.57338882516511!3d6.213043926693544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44296081e4c879%3A0x4083dbbde05bf1fc!2sRED%20VAPOR%20STORE%20Poblado%20(Vape%20shop%20-%20Vapeo%20-%20Vape-Vaping-Vaporizadores-Caf%C3%A9-Coffee)!5e0!3m2!1ses!2spe!4v1695047824723!5m2!1ses!2spe"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </article>

  )
}



export default Location


