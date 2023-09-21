import styles from './Products.module.css'

const Products = ({ title, text, img, alt }) => {
  return (
    <article className={styles.cardContainer}>

      {/* Top section  */}
      <div className={styles.imageContainer}>
        <img
          src={img}
          alt={alt}
        />
      </div>

      {/* Bottom section  */}
      <div className={styles.bottomSection}>
        <h3>{title}</h3>
        <p>
          {text}
        </p>
        <div>
          <button>Ver más</button>
        </div>
      </div>
    </article>
  )
}

export default Products
