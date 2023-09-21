import { useState } from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {

  const [menu, setMenu] = useState(true)

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <section>
      {/* Navbar Mobile  */}
      <article className={styles.mobileNav}>
        <div className={styles.container}>
          <div>
            <h2 className={styles.title}><span className={styles.redTitle}>RED</span>VAPOR</h2>
          </div>
          <div>
            <i onClick={showMenu} className={`${styles.menuIcon} ${menu ? 'bx bx-menu' : 'bx bx-x'}`}></i>
          </div>
        </div>
      </article>

      <div className={`${styles.navMenu} ${menu ? styles.showMenu : null} ${styles.mobileNav}`}>
        <ul>
          <li><a onClick={showMenu} href="#">INICIO</a></li>
          <li><a onClick={showMenu} href="#">ACERCA DE</a></li>
          <li><a onClick={showMenu} href="#">PRODUCTOS</a></li>
          <li><a onClick={showMenu} href="#">CONTACTO</a></li>
        </ul>
      </div>

      {/* Shop Info  */}
      <article className={styles.shopInfoContainer}>
        {/* left section  */}
        <div className={styles.shopInfoLeftSection}>
          <div>
            <i className="bx bxs-map"></i>
            <p>Medellín, Colombia</p>
          </div>
          <div>
            <i className='bx bxs-phone'></i>
            <p>(+57) 555 55 55</p>
          </div>
        </div>

        {/* right section  */}
        <div className={styles.shopInfoRightSection}>
          <div>
            <i className="bx bxs-time-five"></i>
            <p>Abierto: Lun-Sab 8:00-20:00</p>
          </div>
        </div>
      </article>

      {/* Navbar Desktop  */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div>
            <h2 className={styles.title}><span className={styles.redTitle}>RED</span>VAPOR</h2>
          </div>
          <ul className={styles.listContainer}>
            <li>INICIO</li>
            <li>ACERCA DE </li>
            <li>PRODUCTOS</li>
            <li>CONTACTO</li>
            <a href='/' className={styles.shopButton}><i className={`${styles.shopIcon} bx bx-store`}></i>TIENDA</a>
          </ul>
        </div>
      </nav>
    </section >
  )
}
export default NavBar