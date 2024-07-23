"use client"; // 클라이언트 사이드에서만 실행됨을 명시

import Link from "next/link";
import styles from "../styles/movie.module.css"; 
import { useRouter } from "next/navigation"; 

interface IMovieProps {
  title: string; // 영화 제목
  id: string; // 영화 ID
  poster_path: string; // 포스터 이미지 경로
}

// Movie 컴포넌트: 영화 정보를 표시
export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter(); // useRouter 훅 사용
  const onClick = () => {
    router.push(`/movies/${id}`); // 클릭 시 특정 영화 페이지로 이동
  };

  return (
    <div className={styles.movie}> 
      <img src={poster_path} alt={title} onClick={onClick} /> 
      <Link href={`/movies/${id}`}>{title}</Link> 
    </div>
  );
}
