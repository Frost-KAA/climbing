import styles from "../../styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"

const navigation = [
    {id:1, title:"Главная", path: "/"},
    {id:2, title:"Услуги", path: "/services"},
    {id:3, title:"Расписание", path: "/schedule"},
    {id:4, title:"Тренеры", path: "/trainers"}
]

const Navbar = () => {
    let idx = 0;
    const {pathname} = useRouter();
    return(
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src="/logo.png" width="50" height="50" alt="logo"/>
                </div>
                <div className={styles.links}>
                    {navigation.map((navigation) => {
                        idx += 1
                        return(
                            <Link key={navigation.id} href={navigation.path} legacyBehavior>
                                <a className={pathname === navigation.path ? styles.active : styles.none}>{navigation.title}</a>
                            </Link>
                    )})}
                </div>
            </nav>
    )
}

export default Navbar