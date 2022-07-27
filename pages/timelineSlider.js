import {useState} from 'react'
import styles from '../styles/timeSlider.module.scss'
import {motion} from 'framer-motion'

const info = [
    {
        title: "title1",
        year: "1965",
        desc: "text whajgksj gpjsadj gpjsd jgpvjsdpå gjposjpj gposdopgjposjjogvopsd jopgjospj ogpjsop jgopjsopjg opjso jgojsop gjopjp"
    },
    {
        title: "title2",
        year: "1970",
        desc: "text whajgksj gpjsadj gpjsd jgpvjsdpå gjposjpj gposdopgjposjjogvopsd jopgjospj ogpjsop jgopjsopjg opjso jgojsop gjopjp"
    },
    {
        title: "title3",
        year: "1980",
        desc: "text whajgksj gpjsadj gpjsd jgpvjsdpå gjposjpj gposdopgjposjjogvopsd jopgjospj ogpjsop jgopjsopjg opjso jgojsop gjopjp"
    },
    {
        title: "title4",
        year: "1985",
        desc: "text whajgksj gpjsadj gpjsd jgpvjsdpå gjposjpj gposdopgjposjjogvopsd jopgjospj ogpjsop jgopjsopjg opjso jgojsop gjopjp"
    },
    {
        title: "title5",
        year: "1995",
        desc: "text whajgksj gpjsadj gpjsd jgpvjsdpå gjposjpj gposdopgjposjjogvopsd jopgjospj ogpjsop jgopjsopjg opjso jgojsop gjopjp"
    },
]

export default function timelineSlider() {
    const [position, setPosition] = useState(0);

    const btnRight = () => {
        if(position > 0) {
            setPosition(position - 1)
        }
    }
    const btnLeft = () => {
        if(position < info.length - 1) {
            setPosition(position + 1)
        }
    }
  return (
    <>  
    <a className={styles.goback}href="/">Go Back</a>
    <div className={styles.slider}>
    <button onClick={btnRight}
        className={styles.btn_left}><span>Go back in time</span></button>
        <button onClick={btnLeft}
        className={styles.btn_right}><span>Go forwards in time</span></button>  
        <h1 className={styles.pagetitle}>Timeline of Locking</h1>
        <p>just like time travelling...</p>
        <div className={styles.row}>           
                {
                    info.map(({title, year, desc}, idx) => (
                        <motion.div className={styles.container}
                        key={idx}
                        initial={{
                            scale: 0, 
                            rotation: -180}}
                        animate={{
                            left: `${(idx - position) * 80 - 40}vw`,
                            rotate: 0, 
                            scale: idx === position ? 1 : 0.75,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 30,
                        }}
                        >
                <div className={styles.content} >
                <h1> {title} <span>{year}</span>
                    </h1>
                    <h4>
                        {desc}
                    </h4>
                </div>
                </motion.div>
                    ))
                }           

            

        </div>
        <h2>Or scroll-down and maybe towards the future</h2>
       
    </div>
    <div className={styles.sections}>
        some content
    </div>
    
    </>
  )
}
