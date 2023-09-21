import styles from './Advantages.module.css'

const Advantages = ({ icon, title, text, cardStyle, iconStyle }) => {
  return (
    <article className={cardStyle}>
      <div className={styles.cardTopContent}>
        <i className={`${iconStyle} ${icon}`}></i>
        <h3 className={styles.titleCard}>{title}</h3>
      </div>
      <div>
        <p className={styles.text}>{text}</p>
      </div>
    </article>
  )
}
export default Advantages

