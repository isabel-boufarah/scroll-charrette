import styles from '../styles/sixteen.module.css'

export default function Sixteen() {
    return (<div style={{height: '3000px'}}>
        <div className={styles.sq1} style={{animationTimeline: "scroll()"}}></div>
    </div>)
}