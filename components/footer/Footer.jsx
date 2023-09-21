import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* left section  */}
      <div className={styles.sectionsContainer}>
        <section className={styles.leftSection}>
          <article>
            <h3 className={styles.redVapor}>
              <span>RED</span> VAPOR
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              dolor voluptas at nam voluptatum molestias labore quod sequi illum a
              cupiditate
            </p>
            <div className={styles.iconsContainer}>
              <div className={styles.backgroundIcon}>
                <a href="/">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </div>
              <div className={styles.backgroundIcon}>
                <a href="/">
                  <i className="bx bxl-instagram-alt"></i>
                </a>
              </div>
              <div className={styles.backgroundIcon}>
                <a href="/">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </div>
          </article>

          <article className={styles.navegationArticle}>
            <h3>NAVEGACIÓN</h3>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ACERCA DE</a>
              </li>
              <li>
                <a href="/">PRODUCTOS</a>
              </li>
              <li>
                <a href="/">CONTACTO</a>
              </li>
            </ul>
            <button className={styles.shopButton}><i className='bx bx-store'>
            </i><a href="">TIENDA</a></button>
          </article>
        </section>

        {/* right section  */}
        <section className={styles.rightSection}>
          <h3>MANTENTE CONECTADO</h3>
          <div>
            <span>
              <i className="bx bxs-map"></i>Poblado, Medellín
            </span>
            <span>
              <i className="bx bxs-time-five"></i>Lun-Sab: 8:00 - 20:00
            </span>
            <span>
              <i className="bx bxs-envelope"></i>redvapor@example.com
            </span>
          </div>
        </section>
      </div>
      <div className={styles.authorRights}>Copyright © 2023  RED VAPOR, STORE. Todos los derechos reservados.
      </div>
    </footer>
  )
}
export default Footer
