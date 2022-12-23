import Head from "next/head";
import TrainerCard from "../../components/trainer/TrainerCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/TrainersPage.module.css"

export const getStaticProps = async() =>{
  const response = await fetch('https://qwertycreator.pythonanywhere.com/api/trainers')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      trainers: data
    }
  }
}


const TrainersPage = ({trainers})  => {

  return (
      <div>
        <Head>
          <title>Список тренеров</title>
          <meta name="Trainers" content="Trainers" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main>
          <Heading title="Тренерский состав" />

          <div className={styles.list}>
            {trainers && trainers.map(({id, name, upload}) => (
                <TrainerCard key={id} id={id} name={name} upload={upload} />
            ))}
          </div>

        </main>
      </div>
  );
};

export default TrainersPage;