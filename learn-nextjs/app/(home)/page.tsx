import Link from "next/link";

export const metadata = {
    title: "home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 영화 목록을 가져오는 비동기 함수
async function GetMovies() {
    console.log("fetching start");
    const response = await fetch(API_URL, { next: { revalidate: 60 } }); // 60초 동안 캐싱
    const json = await response.json();
    return json; // JSON 형식으로 응답 반환
}

// 홈 페이지 컴포넌트: 영화 목록을 가져와서 렌더링
export default async function HomePage() {
    const movies = await GetMovies(); // 영화 목록을 비동기적으로 가져옴

    return (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link> // 각 영화에 대한 링크 렌더링
                </li>
            ))}
        </div>
    );
}
