import styles from './Photos.module.css'
const PhotosStore = () => {
  return (
    <section className={styles.photosContainer}>
      {/* Top section */}
      <article className={styles.topSection}>
        <div>
          <img className={styles.img1} src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div>
          <img className={styles.img2} src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </article>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <img className={styles.img3} src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>




    </section>
  )
}
export default PhotosStore