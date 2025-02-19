import styles from '../styles/twentyfour.module.css'
import {useState, useEffect} from 'react'

export default function TwentyFour() {
    const [count, setCount] = useState(0)

    const handleScroll = () => {
        setCount(count + 1)
       console.log('scroll')
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return (() => {
            window.removeEventListener("scroll", handleScroll)
        })
    }, [count])

   

    return (<div style={{height: '3000px'}}>
        <div style={{position: 'fixed', top: '100px', left: '100px'}}>{count}</div>
    </div>)
}