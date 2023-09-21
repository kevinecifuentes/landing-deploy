import CardComparation from './CardComparation'
import styles from './Comparation.module.css'


const Comparation = ({ }) => {
  return (
    <section className={styles.comparationContainer}>
      {/* left section */}
      <section>
        <div className={styles.imageContainer}>
          <img src="/images/girlVaping.png" alt="mujer vapeando" />
        </div>
      </section>

      {/* right section  */}
      <section>
        {/* title and description  */}
        <article className={styles.titleDescriptionContainer}>
          <h2>VAPEAR VS FUMAR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            corrupti sequi, earum similique molestiae magni deserunt autem
            sapiente quisquam repellendus, provident eveniet fugit sed adipisci
            pariatur laborum voluptas officia optio.
          </p>
        </article>

        {/* cards */}
        <article >
          <CardComparation
            title="NO TIENE MAL OLOR"
            text="Lorem ipsum dolor sit amet consectetur, adi lorem lorem lorem lorem lorem lorem"
            icon="bx bxs-smile"
            cardStyle={styles.card}
          />
          <CardComparation
            title="MAYOR COSTO BENEFICIO"
            text="Lorem ipsum dolor sit amet consectetur, adi lorem lorem lorem lorem lorem lorem"
            icon="bx bx-money"
            cardStyle={styles.alternativeCard}
          />
          <CardComparation
            title="TE AYUDA A DEJAR DE FUMAR"
            text="Lorem ipsum dolor sit amet consectetur, adi lorem lorem lorem lorem lorem lorem"
            icon="bx bx-body"
            cardStyle={styles.alternativeCard}
          />
        </article>
      </section>
    </section>
  )
}
export default Comparation
