import Card from 'react-bootstrap/Card';
import styles from "../../styles/TrainerCard.module.css"
import Link from 'next/link';

const TrainerCard = ({id, name, upload}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={upload} height={300} width={200}/>
      <Card.Body>
        <Link href={`/trainers/${id}`} legacyBehavior>
          <a className={styles.a}><Card.Title className={styles.title}>{name}</Card.Title></a>
        </Link>
      </Card.Body>
    </Card>
);

export default TrainerCard;