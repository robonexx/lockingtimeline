import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import { useState, useEffect } from 'react';

//styles
import styles from '../styles/Timeline.module.scss';

const years = [
  {
        year: 1970,
      num: 1,
    title: 'The birth of Campbellocking',
    desc: 'In Don´s early days at collage he wanted to learn... ',
  },
  {
      year: 1971,
      num: 2,
    title: 'title',
    desc: 'Locking spread, the Campbellockers, Other groups around the area started doin shows, Gogo brother, 33 rpm, Wattswriters lorem lorem lorem',
  },
  {
      year: 1972,
      num: 3,
    title: 'title',
    desc: 'The lockers performed',
  },
  {
      year: 1973,
      num: 4,
    title: 'title',
    desc: 'Lockers plit, and kick and droppedLorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fuga ratione est dolore explicabo sequi cum perspiciatis voluptates totam minima, at reprehenderit nam. Molesti mollitia,  quod ea atque accusamus possimus',
  },
  {
      year: 1974,
      num: 5,
    title: 'title',
    desc: 'New set ups of the lockers Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fuga ratione est dolore explicabo sequi cum perspiciatis voluptates totam minima, at reprehenderit nam. Molesti mollitia,  quod ea atque accusamus possimus',
  },
  {
      year: 1975,
      num: 6,
    title: 'title',
    desc: 'Don continued, Fred was an actor, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fuga ratione est dolore explicabo sequi cum perspiciatis voluptates totam minima, at reprehenderit nam. Molesti mollitia,  quod ea atque accusamus possimus',
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0, X: 200 },
  visible: {
    opacity: 1,
    scale: 2,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const Card = ({ year, desc, title }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className={styles.card_wrapper}
      ref={ref}
      variants={cardVariant}
      initial='visible'
      animate={control}
    >
      <div className={styles.underlay}></div>
      <span className={styles.year}>{year}</span>
      <motion.div
        className={styles.card}
        /*  onClick={() => setCardOpen(!cardOpen)} */
        layout
        transition={{
          layout: { duration: 0.6, type: 'spring', easing: 'ease' },
        }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 5, scale: [1, 1.05, 1.05, 1.01, 1] }}
      >
        <motion.h2>-- {title}</motion.h2>
        {/* {cardOpen && (
          <motion.div
            className={styles.expand}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 5, scale: [1, 1.05, 1.05, 1.01, 1] }}
          >
            <p>{desc}</p>
          </motion.div>
        )} */}
        <p>{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default function timeline() {
  return (
    <motion.div className={styles.timeline}>
          <h1 className={styles.timeline_heading}>LOCKING TIMELINE</h1>
          

      {years.map(({ year, desc, title, num }) => (
    
          <div key={year}>
              <SvgLine num={num} />
            <Card year={year} desc={desc} title={title}></Card>
          </div>
      ))}
    </motion.div>
  );
}

const SvgLine = ({num}) => {
    const [count, setCount] = useState(10)


    const svgY = 100 / 100 * count

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
        control.start('visible');
        setCount((count *= num / 2))
    
    } else {
        control.start('hidden');
        
    }
  }, [control, inView]);
    
  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const svgVariants = {
    hidden: { pathLength: 1, pathOffset: -1 },
    visible: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  

  return (
      <motion.div className={styles.line}
      ref={ref}
      variants={lineVariants}
      initial='hidden'
          animate={control}>
          {num}
      <motion.svg
        fill='none'
              stroke='currentColor'
       viewBox={`0 0 1 ${svgY}`}
       
        /* onTap={() => {
          setVisible((val) => !val);
        }} */
      >
        <motion.line
          strokeWidth={5}
          stroke='black'
         variants={svgVariants}
          x1='0'
          y1='0'
          x2='0'
            y2='100%'
        />
      </motion.svg>
    </motion.div>
  );
};
