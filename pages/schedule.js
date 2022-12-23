import Head from "next/head";
import Heading from "../components/general/Heading";
import LessonsList from "../components/lesson/LessonsList";

export const getStaticProps = async() =>{

  const response = await fetch('https://qwertycreator.pythonanywhere.com/api/lessons')
  const data = await response.json()


  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      lessons: data
    }
  }
}

const SchedulePage = ({lessons})  => (
    <div>
      <Head>
        <title>Расписание занятий</title>
        <meta name="Schedule" content="Schedule" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Расписание занятий"/>
        <LessonsList lessons={lessons} />
      </main>
    </div>
);

export default SchedulePage;