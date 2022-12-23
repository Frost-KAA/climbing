import LessonCard from "./LessonCard";

const LessonsList = ({lessons}) =>{

    return(
        <div>
           <ul >
                {lessons.map(({id, name, desc, date, time, trainer}) => (
                    <LessonCard key={id} id={id} name={name} desc={desc} date={date} time={time} trainer={trainer} />
                ))}
            </ul>
        </div>
        
    )
}

export default LessonsList;
