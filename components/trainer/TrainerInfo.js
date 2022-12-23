import Heading from "../general/Heading"
import styles from "../../styles/TrainerInfo.module.css"

const TrainerInfo = ({trainer}) =>{
    if (!trainer){
        return <Heading title="Информация о тренере"/>
    }

    return(
        <main>
            <Heading title={trainer.name} />
            <div className={styles.general}>
                <p><b>Опыт работы тренером: </b>{trainer.year}</p>
                <p><b>Интересная информация: </b>{trainer.desc}</p>
                <img src={trainer.upload} width="250" height="350" alt="trainer_img"/>
                {/* <p className={styles.down}>{cat.name} уже ждет встречи с вами!</p> */}
            </div>
        </main>
        
    )
}

export default TrainerInfo;
