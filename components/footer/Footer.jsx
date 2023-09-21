import Link from 'next/link'
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
                <Link href="/">
                  <i className="bx bxl-facebook-circle"></i>
                </Link>
              </div>
              <div className={styles.backgroundIcon}>
                <Link href="/">
                  <i className="bx bxl-instagram-alt"></i>
                </Link>
              </div>
              <div className={styles.backgroundIcon}>
                <Link href="/">
                  <i className="bx bxl-twitter"></i>
                </Link>
              </div>
            </div>
          </article>

          <article className={styles.navegationArticle}>
            <h3>NAVEGACIÓN</h3>
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/">ACERCA DE</Link>
              </li>
              <li>
                <Link href="/">PRODUCTOS</Link>
              </li>
              <li>
                <Link href="/">CONTACTO</Link>
              </li>
            </ul>
            <button className={styles.shopButton}><i className='bx bx-store'>
            </i><Link href="">TIENDA</Link></button>
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
