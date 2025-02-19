import styles from '../styles/two.module.css'

export default function Two() {
    return (
        <div style={{padding: '56px 24px'}}>
            <div className={`${styles.square} animation-timeline`}></div>
            <div style={{height: '3000px'}}></div>
        </div>
    )
}