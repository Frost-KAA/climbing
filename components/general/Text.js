import styles from "../../styles/Text.module.css"

const Text = ({text}) => (
    <div className={styles.outer}>
        {/* <br><br><br><br><br><br> */}
        <p>{text}</p>
    </div>  
);

export default Text;