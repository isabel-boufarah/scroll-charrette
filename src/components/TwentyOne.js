import styles from '../styles/twentyone.module.css'

export default function TwentyOne() {
    return (<div style={{height: '3000px'}}>
        <div className={styles.words} style={{animationTimeline: 'scroll()'}}>Hello, World!</div>
    </div>)
}