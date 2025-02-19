import styles from '../styles/four.module.css'

export default function Four() {

    return (<div style={{height: '3000px'}}>
        <div className={styles.div1} styles={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div2} styles={{animationTimeline: 'scroll()'}}></div>
        <div className={styles.div3} styles={{animationTimeline: 'scroll()'}}></div>
    </div>
        
    )
}