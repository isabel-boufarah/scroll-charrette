import styles from '../styles/seventeen.module.css'

export default function Seventeen() {
    return (<div style={{height: '3000px'}}>
        <div className={styles.sq1} style={{animationTimeline: "scroll()"}}></div>
        <div className={styles.sq2} style={{animationTimeline: "scroll()"}}></div>
        <div className={styles.sq3} style={{animationTimeline: "scroll()"}}></div>

    </div>)
}