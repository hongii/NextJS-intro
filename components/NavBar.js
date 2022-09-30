import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
	const router = useRouter();

	return (
		<nav className={styles.nav}>
			{/* public 폴더에 있는 파일은 "/파일명" 으로 바로 사용 가능하다. (../public/vercel.svg 와 같이 경로명x)*/}
			<img className={ styles.image} src="/vercel.svg" alt="image"/>
			<div className={styles.linkContainer}>
				<Link href="/">
					<a className={`${router.pathname === "/" ? styles.active : ""}`}>Home</a>
				</Link>

				<Link href="/about">
					<a className={`${router.pathname === "/about" ? styles.active : ""}`}>About</a>
				</Link>
			</div>
		</nav>
	)
}
