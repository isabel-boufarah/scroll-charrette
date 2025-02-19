import styles from '../styles/twentytwo.module.css'

export default function TwentyTwo() {
    return (<div style={{height: '3000px'}}>
        <div className={styles.div1} style={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div2} style={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div3} style={{animationTimeline: 'scroll()'}}></div>
    </div>)
}