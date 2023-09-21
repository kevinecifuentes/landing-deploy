import styles from './Comparation.module.css'

const CardComparation = ({ title, text, icon, cardStyle }) => {
  return (
    <article className={styles.cardsContainer}>
      <div className={cardStyle}>
        <div className={styles.borderIcon}>
          <i className={`${styles.icon} ${icon}`}></i>
        </div>
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </article>
  )
}
export default CardComparation