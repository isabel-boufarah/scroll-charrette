import styles from '../styles/twenty.module.css'

export default function Twenty() {
    return (<div style={{height: '3000px'}}>
        <div className={styles.words} style={{animationTimeline: 'scroll()'}}>Hello, World!</div>
    </div>)
}