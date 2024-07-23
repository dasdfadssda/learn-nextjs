import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"; 
import { API_URL } from "../constants";

export const metadata = {
  title: "Home", // 메타데이터 설정
};

// 영화 목록을 가져오는 비동기 함수
async function getMovies() {
  const response = await fetch(API_URL); // API 호출
  const json = await response.json(); // 응답을 JSON 형식으로 파싱
  return json; 
}

export default async function HomePage() {
  const movies = await getMovies(); // 영화 목록을 비동기적으로 가져옴
  return (
    <div className={styles.container}> 
      {movies.map((movie) => (
        <Movie
          key={movie.id} 
          id={movie.id} 
          poster_path={movie.poster_path} 
          title={movie.title}
        />
      ))}
    </div>
  );
}
