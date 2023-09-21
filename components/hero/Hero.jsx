import NavBar from "./NavBar"
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <section className={styles.sectionContainer}>
        <NavBar />
        <article className={styles.container}>
          <section className={styles.infoHeroContainer}>
            <p className={styles.title}>Bienvenido a Red <span className={styles.spanVapor}>Vapor</span></p>
            <p className={styles.subtitle}>LOREM IPSUM<br />IPSUM LOREM</p>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est earum eaque voluptatem. Quas fuga nisi officia? Eaque aliquam delectus sunt dolorem molestias veniam consequuntur, rem illo, nulla itaque inventore.</p>
            </div>

            <button className={styles.shopButton}>Nuestra tienda <i className='bx bx-right-arrow-alt'></i></button>
          </section>
        </article>
      </section>
    </section>
  )
}

export default Hero