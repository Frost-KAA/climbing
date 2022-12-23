import styles from "../../styles/LessonCard.module.css"

const LessonCard = ({id, name, desc, date, time, trainer}) => {
    return (
        <li key={id} className={styles.li}>
            <div className={styles.div1}>
                <p className={styles.date}>{date}</p>
                <p className={styles.time}>{time}</p>
            </div>

            <div className={styles.div2}>
                <p className={styles.name}>{name}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        
            <div className={styles.div3}>
                <p className={styles.trainer}>{trainer}</p>
            </div>
            
        </li>
    );
};

export default LessonCard;