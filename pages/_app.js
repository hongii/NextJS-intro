import Layout from "../components/Layout";
import "../styles/globals.css";
/*파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. 
(글로벌 css간의 충돌을 피하기 위해서)*/

export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
				{/* <span>Hello, global</span> */}
			</Layout>
			{/* styled jsx를 사용한 global css style */}
			<style jsx global>{`
				a{
					color: gray;
				}
			`}
			</style>
		</>
	)
}
