const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /**
   * 사용자가 redirect된 url을 확인할 수 있다.
   * @returns [{
   *  source:"/contact/:path*", 사용자가 입력한 url경로(:path*는 /contact/뒤에 적히는 어떠한 파라미터든 그대로 전부 destination의 /:path*에 붙는다.)
   *  destination:"/contact/:path*", source 경로로 입력하면 실제로 보여줄 url경로
   *  permanent: false, 브라우저나 검색엔진이 이 정보를 기억할지 말지 여부
   * }]
   */
  async redirects() {
    return [
      {
        source: '/contact/:path*',
        destination: '/form/:path*',
        permanent: false,
      }
    ]
  },

  /**
   * redirect된 url이 바뀌지 않는다.
   * API_KEY는 숨기고, 실제 url경로를 공개하고 싶지 않을때 쓰면 된다.
   * @returns [{
   *   source: '/api/movies', 사용자가 "http://localhost:3000/api/movies"라고 url을 입력하면,
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`, desitination경로로 들어간다. (mask되어진 경로)
      다만 사용자는 그대로 바뀌지 않은 source url경로를 그대로 보고있다.
      }]
   */
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
      }
    ]
  }
}

module.exports = nextConfig
