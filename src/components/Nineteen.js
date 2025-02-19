import styles from '../styles/nineteen.module.css'

// https://stackoverflow.com/questions/42821213/different-scroll-speed-for-each-element
export default function Nineteen() {
    return (<div className={styles.parallax}>
        <div className={`${styles.group} ${styles.group1}`}>
      <div className={`${styles.layer} ${styles.layerbase}`}>
        <div class="title">Base Layer</div>
      </div>
    </div>
    <div className={`${styles.group} ${styles.group1}`}>
      <div className={`${styles.layer} ${styles.layerbase}`}>
        <div class="title">Base Layer</div>
      </div>
      <div className={`${styles.layer} ${styles.layerbg}`}>
        <div class="title">background Layer</div>
      </div>
    </div>
    
    </div>)
}