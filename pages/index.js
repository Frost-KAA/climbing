import Head from 'next/head'
import Heading from '../components/general/Heading';
import Poster from '../components/general/Poster';
import Text from '../components/general/Text';
import Benefits from '../components/general/Benefits';
import Photo from '../components/general/Photo';

// export const getStaticProps = async() =>{
//   try{
//     const response_lessons = await fetch('https://qwertycreator.pythonanywhere.com/api/lessons')
//     const data_lessons = await response_lessons.json()

//     const response_trainers = await fetch('https://qwertycreator.pythonanywhere.com/api/trainers')
//     const data_trainers = await response_trainers.json()

//     const response_services = await fetch('https://qwertycreator.pythonanywhere.com/api/services')
//     const data_services = await response_services.json()

//     if ((!data_trainers) || (!data_lessons) || (!data_services)){
//       return{
//         notFound: true
//       }
//     }

//     return{
//       props: {
//         trainers: data_trainers,
//         : data_lessons,
//         matches: data_services,
//         table: data_table
//       }
//     }
//   } catch{
//     return{
//       props: {
//         news: null,
//         leaders: null,
//         matches: null,
//         table: null
//       }
//     }
//   }
  
// }

const HomePage = ()  => (
    <div>
      <Head>
        <title>Скалодром</title>
        <meta name="Climbing Center" content="Climbing Center" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Poster />
        <Heading title="О нас" />
        <Text text="Своей глобальной задачей мы видим развитие и популяризацию скалолазания не только как спорта, но как приятного досуга, как повода и средства общения между людьми. Наши скалодромы - это целый мир уникального личного опыта и комфортная среда для общения между нашими гостями." />
        {/* <Vote /> */}
        <Benefits />
        <Heading title="Наш скалодром" />
        <Text text="Уютный и современный скалодром, где в любое время Вы можете почувствовать себя как дома" />
        <Photo />
        <Heading title="Никогда не были на скалодроме?" />
        <Heading title="Тогда мы ждём вас!" />
        <br />
      </main>
    </div>
);

export default HomePage;

