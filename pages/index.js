import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchData();	
	},[]);

	const fetchData = async () => {
		try {
			const response = await axios.get("/api/movies");
			setMovies(response.data.results);
			console.log(response);
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<div className={styles.container}>
			<Seo title="Home" />
			{!movies && <h4>Loading...</h4>}
			{
				movies?.map((movie) => {
					if (movie.poster_path !== null) {
						return (
							/* router를 통해 state를 숨겨서 전달하는 방법
							Link의 href 속성에 들어간 pathname, query..는 useRouter에 의해 생성된 router.push()에서도 동일한 용도로 사용 가능하다.
							router.push(
							{ //url
								pathname: `/movies/${movie.id}`,
								query: {
											title: movie.original_title,
										},
							},

							//as => url을 masking 한다.
							`/movies/${movie.id}`
							); */
							<Link
								href={
									{
										pathname: `/movies/${movie.id}`,
										query: {
											title: movie.original_title,
										}
									}}
								as={`/movies/${movie.id}`}
								key={movie.id}>
								<a>
									<div className={styles.movie}  >
										<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
										<h4>{movie.original_title}</h4>
									</div>
								</a>

							</Link>
						)
					}
				})
			}
		</div>
	)
}


/*
* next.js의 server-side-renderring

export default function Home({ movies}) {
	return (
		<div className={styles.container}>
			<Seo title="Home" />
			{
				movies?.map((movie) => {
					if (movie.poster_path !== null) {
						return (
							<div className={styles.movie} key={movie.id} >
								<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
								<h4>{movie.original_title}</h4>
							</div>
						)
					}
				})
			}
		</div>
	)
}

//함수이름 불변 => getServerSideProps라는 함수명은 절대 바꾸면 안됨
//아래 코드는 client가 아니라 server에서 동작한다. => 따라서, API_KEY룰 숨길수도 있다. 
//loading화면 없이 API요청에 대한 응답이 완료되길 기다렸다가 모든 정보를 화면에 보여준다.
//javascript를 비활성해도 아무문제 없이 동작한다.
export async function getServerSideProps() {
	const response = await axios.get("http://localhost:3000/api/movies");
	
	//return되는 값은 Home컴포넌트의 props로 들어간다.
	return {
		props: {
			movies: response.data.results
		}
	}
}

 */