import styles from "../../styles/Benefits.module.css"
import Heading from "./Heading";

const Benefits = () => {

    const data = [
        {id:1, title:"Профессионалы", desc:"Дипломированные специалисты с большим стажем, постоянно повышающие квалификацию", path:"/assets/team.png"},
        {id:2, title:"Результат", desc:"Лучшие программы тренировок, проверенные временем", path:"/assets/win.png"},
        {id:3, title:"Уют и комфорт", desc:"Просторные и уютные помещения, собственное кафе", path:"/assets/cup.png"}
    ]

    return (
    <div className={styles.outer}>
        <Heading title="Преимущества"/>
        <div className={styles.flex}>
            {data.map(({id, title, desc, path}) => (
                <div className ={styles.cup} key={id}>
                    <img src={path} height="100" alt="logo" />
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            ))}
        </div>
    </div>
)
};

export default Benefits;



