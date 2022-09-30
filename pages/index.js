import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

const API_KEY = process.env.API_KEY;

export default function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchData();	
	},[]);

	const fetchData = async () => {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`);
			setMovies(response.data.results);
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