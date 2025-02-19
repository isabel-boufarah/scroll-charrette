import styles from '../styles/four.module.css'

export default function Four() {

    return (<div style={{height: '3000px'}}>
        <div className={styles.div1} style={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div2} style={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div3} style={{animationTimeline: 'scroll()'}}></div>
    </div>
        
    )
}