import styles from '../styles/twentyfive.module.css'

export default function TwentyFive() {
    return(<>
        <div className={styles.type}>
            <div className={styles.cutout} style={{animationTimeline: 'scroll()'}}></div>
            <div className={styles.cutout} style={{animationTimeline: 'scroll()'}}></div>
            <div className={styles.cutout} style={{animationTimeline: 'scroll()'}}></div>

        </div>
        
        
    </>)
}