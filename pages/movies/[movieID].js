/* URL = localhost:3000/movies/123456 와 같이 movieID(=123456)에 해당하는 변수 값을 넣고 싶으면, 
	movies 폴더를 생성하고 대괄호에 변수명을 넣어준 파일을 생성한다.(ex) [movieID].js) 
	if) 대괄호에 넣지 않으면, localhost:3000/movies/movieID 라는 url로 넘어가게 된다.*/

import { useRouter } from "next/router"

export default function Detail() {
	const router = useRouter();
	console.log(router); // 콘솔창에 뜬 router정보에 query를 살펴보면, movieID라는 property가 존재하는데, 
											//	이는[movieID].js 라는 파일명의 대괄호 안의 변수명과 동일하다.
	return (
		<div>{router.query.title || "Loading..."}</div>
	)
}
