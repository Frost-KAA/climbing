import Head from "next/head";
import Heading from "../components/general/Heading";
import styles from "../styles/ServicesPage.module.css"
import Poster from "../components/general/Poster";
import Text from "../components/general/Text";

export const getStaticProps = async() =>{
  const response = await fetch('https://qwertycreator.pythonanywhere.com/api/services')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      services: data
    }
  }
}


const ServicesPage = ({services})  => {

  return (
      <div>
        <Head>
          <title>Список услуг</title>
          <meta name="Services" content="Services" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main>
          
            {/* <Poster /> */}
            <Heading title="Наши услуги" />
            <p className={styles.text}>Мы предоставляем широкий спектр услуг для наших клиентов</p>
            <div className={styles.outer}>
                {services && services.map(({id, name, desc}) => (
                    <div className={styles.list} key={id}>
                        <p className={styles.b}>{id}. {name}</p>
                        <p className={styles.text2}>{desc}</p>
                    </div>
                ))}
            </div>
        </main>
      </div>
  );
};

export default ServicesPage;