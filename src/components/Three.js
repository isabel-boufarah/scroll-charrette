import styles from '../styles/three.module.css'

export default function Three() {
    return (
        <div className={styles.main}>
            <div className={styles.square} style={{animationTimeline: 'view()'}}></div>
        </div>
    )
}