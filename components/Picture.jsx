import styles from './Picture.module.css'
const Picture = () => {

  return (
    <section className={styles.pictureContainer}>
      <img className={styles.picture} src="/images/Man-Picture.png" alt="hombre echando humo por la nariz" />
    </section>
  )
}
export default Picture


