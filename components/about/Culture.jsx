import styles from './Culture.module.css'

const Culture = () => {
  return (

    <section className={styles.sectionContainer}>

      {/* left section */}
      <article className={styles.leftSection}>
        <img src="./images/girl-vape.png" alt="Sexy chica vapeando" className={styles.girlImg} />
      </article>

      {/*   right section */}
      <article className={styles.rightSection}>

        <div className={styles.titleContainer}>
          <h3 className={styles.title}>En <span className={styles.spanTitle}>Red</span> Vapor</h3>
          <br />
          <h2 className={styles.description}>TENEMOS LA CULTURA DE <br /> DAR LO MEJOR A NUESTROS <br />CLIENTES</h2>
        </div>

        <section className={styles.listCulture}>
          {/*  Left list */}
          <ul className={styles.listContainer}>
            <li className={styles.list}><i className={` ${styles.icon} bx bx-check`}> </i> Productos de calidad</li>
            <li className={styles.list}><i className={` ${styles.icon} bx bx-check`}> </i> Buenos precios</li>
            <li className={styles.list}><i className={` ${styles.icon} bx bx-check`}> </i> Garantía 100%</li>
          </ul>

          {/* Right list */}
          <ul className={styles.listContainer}>
            <li className={styles.list}><i className={` ${styles.icon} bx bx-check`}> </i> Amistosos en el servicio</li>
            <li className={styles.list}><i className={` ${styles.icon} bx bx-check`}> </i> Variedad de esencias</li>
            <li className={styles.list}><i className={` ${styles.icon} bx bx-check`}> </i> Agradable lugar</li>
          </ul>
        </section>
      </article>
    </section>


  )
}
export default Culture