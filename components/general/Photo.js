import styles from "../../styles/Photo.module.css"



const Photo = () => {
    const data = [
        {id:1, path:"assets/2.jpg"},
        {id:2, path:"assets/3.jpg"},
        {id:3, path:"assets/4.jpg"},
    ]

    return (
    <div className={styles.flex}>
        {data.map(({id, path}) => (
            <div className={styles.photo} key={id}>
                <img src={path} height="200" alt="logo" />
            </div>
        ))} 
    </div>
)};

export default Photo;

