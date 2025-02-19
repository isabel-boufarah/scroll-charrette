import styles from '../styles/twentytwo.module.css'

export default function TwentyTwo() {
    return (<div style={{height: '3000px'}}>
        <div className={styles.div1} styles={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div2} styles={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div3} styles={{animationTimeline: 'scroll()'}}></div>
    </div>)
}