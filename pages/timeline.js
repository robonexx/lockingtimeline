import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import { useState, useEffect } from 'react';

//styles
import styles from '../styles/Timeline.module.scss';
import Link from 'next/link';


const info = [
  {
    headline: "The following dancers were the first to learn the Campbellock at the Summit Names with an asterisk denote they created a dance step that is still used in locking today.",
    subhead: "The names are listed in first name alphabetical order",
    text1: " 1. Arneta Johnson 2. Bill “Slim the Robot” Williams 3. Charles “Robot” Washington * 4. Damita Jo Freeman * 5. Don “Campbellock” Campbell * 6. Edwin “Buddy gogo” Lombard * 7. Eugene “F&M” Henderson 8. Fred “Mr. Penguin” Berry * 9. Fredi Maxi 10. Greg “Campbellock Jr.” Pope * 11. James “Skeeter Rabbit” Higgins * 12. Jeffrey “Catman” McKentire 13. Jimmy “Scooby Doo” Foster * 14. Johnnie “Sambo-Lock” McCloud * 15. Kevin “YoYo” Lombard{' '}",
    paragraph: "",
    text2: "",
  },
  {
    headline: "THE 2ND DANCERS TO LEARN By this time a strong underground following has taking place. As dancers visit other clubs more dancers join and learn. The names are in alphabetical order by their first name",
    subhead: "The names are listed in first name alphabetical order",
    text1: "1. Alpha “Omega” Anderson * 2. Bishop Hall 3. Charles “Mr. X” Marable 4. Greg “Captain Crunch” Daindridge 5. Haywood “Tito“ Collins 6. John “Okie Doke” Wilson 7. Kenny Flealock Henderson 8. Leo “Shaboo” Walker 9. Lockheart 10. Michael “Peek-A-Boo” Frenke *",
    paragraph: "  Soul Train begins taping from Los Angeles, Don is asked if he has any friends that can dance like him. He calls his friends from the Summit on the Hill, The Citadel, Maverick Flats, & Blueberry Hill. Locking is now on a weekly National TV. People love it, It’s a Hit!",
    text2: " 1. Alpha “Omega” Anderson 2. Bill “Slim the Robot” Williams 3. Charles “Robot” Washington 4. Charles “Mr. X” Marable 5. Damita Jo Freeman 6. Don “Campbellock” Campbell 7. Edwin “Buddy Go Go” Lombard 8. Eugene “F&M” Henderson 9. Fredi Maxi 10. Fred “Mr. Penguin” Berry 11. Greg “Campbellock Jr.” Pope 12. Greg “Captain Crunch” Daindridge 13. James “Skeeter Rabbit” Higgins 14. Jimmy “Scooby Doo” Foster 15. Leo “Leolock” Williamson 16. Lorna Dune 17. Morris “Cisco Kid” Bailey 18. Michael “Peek-A-Boo” Frenke 19. Pat “Madam Butterfly” Davis",
  }
]

const years = [
  {
    year: 1970,
    num: 1,
    title: ' THE CREATION OF LOCKING',
    desc: 'While attending Trade Tech College, Elroy Skifford a friend starts to teach Don the soul dances of the time. Don is awkward and has an unusual style where he locks his body for a moment while doing these soul dances. His friends like it, and encourage him, calling it “The Locks”. The original art form of the Campbellock is based on the improvisation of the individual doing dance steps called the locks. The urban subculture of South Central Los Angeles is quick to catch on. A new urban subculture is born overnight and the history of Campbellocking begins.',
  },
  {
    year: 1971,
    num: 2,
    title: '-- Toni Basil',
    desc: 'Don Campbell meets Toni Basil, at the Citadel Club, they become friends and involved. She is a young talented choreographer and the daughter of a very successful entertainment executive and band leader in Las Vegas. She has excellent entertainment business contacts, she is able to open doors with a phone call ',
  },
  {
    year: 1972,
    num: 3,
    title: 'Campbellockers',
    desc: 'Sonny Craver Don’s manager Books The Cambellockers they are still Dancing Solos No Unison Routines.The tour falls apart, and ends early.',
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
  {
    year: 1976,
    num: 7,
    title: '1976',
    desc: 'sh oi ojn iosjoig jvoiså jgåjfksj ajg öajg öjfö jgöj, oasnvk  ,svks ndk,ms,dd vkpasdm v,sdm,v msdk vms,dmksd ,s msgk',
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

const Card = ({ year, desc, title}) => {
  console.log()
 /*  const [cardOpen, setCardOpen] = useState(false); */
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
        animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1.05, 1.01, 1] }}
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

const Section = ({ headline, subhead, text1 }) => {
  return (
      <section>
        <motion.h2>{headline}</motion.h2>
        <p>{subhead}</p>
          <p>
           {text1}
          </p>
      </section>
  );
};

const SvgLine = ({ num }) => {
  const [count, setCount] = useState(10);

  const svgY = (100 / 100) * count;

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect((num) => {
    if (inView) {
      control.start('visible');
      setCount((count * num) / 6);
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
    <motion.div
      className={styles.line}
      ref={ref}
      variants={lineVariants}
      initial='hidden'
      animate={control}
    >
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
          y1='0%'
          x2='0'
          y2='100%'
        />
      </motion.svg>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <div className={styles.timeline_page}>
       <Link className={styles.goback}href="/">Go Back</Link>
      <motion.div className={styles.timeline}>
        <h1 className={styles.timeline_heading}>LOCKING TIMELINE</h1>
        {years.map(({ year, desc, title, num, headline, subhead, text1 }) => (
          <div key={year}>
            <SvgLine num={num} />
            <Card year={year} desc={desc} title={title}></Card>           
          </div>
        ))}        
      </motion.div>
      <div className={styles.timeline_container}>
      {info.map(({ headline, subhead, text1 }, idx) => (
            <div  key={idx}>
            <Section headline={headline} subhead={subhead} text1={text1}></Section>
            </div>        
        ))}

      </div>
     {/*  <div className={styles.timeline_container}>
        <section>
          <h2>
            The following dancers were the first to learn the Campbellock at the
            Summit Names with an asterisk denote they created a dance step that
            is still used in locking today.
          </h2>
          <p className={styles.special}>
            The names are listed in first name alphabetical order
          </p>
          <p>
            1. Arneta Johnson 2. Bill “Slim the Robot” Williams 3. Charles
            “Robot” Washington * 4. Damita Jo Freeman * 5. Don “Campbellock”
            Campbell * 6. Edwin "Buddy GoGo" Lombard * 7. Eugene “F&M” Henderson
            8. Fred “Mr. Penguin” Berry * 9. Fredi Maxi 10. Greg “Campbellock
            Jr.” Pope * 11. James “Skeeter Rabbit” Higgins * 12. Jeffrey
            “Catman” McKentire 13. Jimmy “Scooby Doo” Foster * 14. Johnnie
            “Sambo-Lock” McCloud * 15. Kevin “YoYo” Lombard{' '}
          </p>
        </section> */}
       {/*  <section>
          <h2>
            THE 2ND DANCERS TO LEARN By this time a strong underground following
            has taking place. As dancers visit other clubs more dancers join and
            learn. The names are in alphabetical order by their first name
          </h2>
          <p className={styles.special}>
            The names are listed in first name alphabetical order
          </p>
          <p>
            1. Alpha “Omega” Anderson * 2. Bishop Hall 3. Charles “Mr. X”
            Marable 4. Greg “Captain Crunch” Daindridge 5. Haywood “Tito“
            Collins 6. John “Okie Doke” Wilson 7. Kenny Flealock Henderson 8.
            Leo “Shaboo” Walker 9. Lockheart 10. Michael “Peek-A-Boo” Frenke *
          </p>
          <p>
            Soul Train begins taping from Los Angeles, Don is asked if he has
            any friends that can dance like him. He calls his friends from the
            Summit on the Hill, The Citadel, Maverick Flats, & Blueberry Hill.
            Locking is now on a weekly National TV. People love it, It’s a Hit!
          </p>
          <p className={styles.special}>
            1. Alpha “Omega” Anderson 2. Bill “Slim the Robot” Williams 3.
            Charles “Robot” Washington 4. Charles “Mr. X” Marable 5. Damita Jo
            Freeman 6. Don “Campbellock” Campbell 7. Edwin “Buddy Go Go” Lombard
            8. Eugene “F&M” Henderson 9. Fredi Maxi 10. Fred “Mr. Penguin” Berry
            11. Greg “Campbellock Jr.” Pope 12. Greg “Captain Crunch” Daindridge
            13. James “Skeeter Rabbit” Higgins 14. Jimmy “Scooby Doo” Foster 15.
            Leo “Leolock” Williamson 16. Lorna Dune 17. Morris “Cisco Kid”
            Bailey 18. Michael “Peek-A-Boo” Frenke 19. Pat “Madam Butterfly”
            Davis
          </p>
        </section>
        <section>
          <h2>The CAMPBELLOCKERS!</h2>
          <p>
            Don “Campbellock” Campbell Johnnie “SamboLock” McCloud Bill “Slim
            the Robot” Williams Charles “Robot” Washington Fred “Mr. Penguin”
            Berry
          </p>
          <h2>
            Soul Train Gang Goes on Tour Lots of Hard Work, But No Money! When
            they spoke to show producer Don Cornilus about receiving payment
            they were banned from performing on the show.
          </h2>
          <p>
            Toni Basil becomes both Don’s personal manager as well as the
            “Campbellockers” manager. Using her industry contacts she is able to
            book the act onto a variety of TV shows.
          </p>
          <h2>GoGo Brothers</h2>
          <p>
            The first two groups to organize were the Go-Go Brothers, and the
            Yo-Yo Brothers. By performing at schools and civic functions, they
            were first to pass the concept of locking to other interested young
            adults living in the inner and outer city. They were one of the
            first groups to perform unison steps and choreography.
          </p>
          <p className={styles.special}>
            James “Skeeter Rabbit” Higgins Edwin “Buddy Go Go” Lombard Kevin “Yo
            Yo” Lombard Tony “Go Go” Lewis
          </p>
        </section>
        <section>bla bal bal</section>
        <section></section>
        <section></section>
        <section></section> */}
      {/* </div> */}
    </div>
  );
}
